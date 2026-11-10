import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/sections/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPolicy, policies, type AppPolicy } from "@/content/policies";
import { breadcrumbSchema, buildMetadata, webPageSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return policies.map((policy) => ({ slug: policy.slug }));
}

export const dynamicParams = false;

const titleFor = (policy: AppPolicy) => `${policy.name} Privacy Policy`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);

  if (!policy) return {};

  return buildMetadata({
    title: titleFor(policy),
    description: policy.summary,
    path: `/policy/${policy.slug}`,
  });
}

export default async function AppPolicyPage({ params }: Props) {
  const { slug } = await params;
  const policy = getPolicy(slug);

  if (!policy) notFound();

  const title = titleFor(policy);
  const path = `/policy/${policy.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "App privacy", path: "/policy" },
    { name: policy.name, path },
  ];

  const facts: { label: string; value: React.ReactNode }[] = [
    { label: policy.kind, value: policy.name },
    { label: "Made by", value: policy.madeBy },
    { label: "Developer on Google Play", value: policy.developer },
    ...(policy.androidId
      ? [{ label: "Android app ID", value: policy.androidId }]
      : []),
    { label: "Platforms", value: policy.platforms.join(", ") },
    {
      label: "Privacy questions",
      value: <a href={`mailto:${policy.email}`}>{policy.email}</a>,
    },
  ];

  return (
    <>
      <LegalPage
        title={title}
        intro={`How ${policy.name} handles your information.`}
        updatedAt={policy.updatedAt}
        crumbs={crumbs}
      >
        <dl className="border-line bg-surface-2 grid gap-x-8 gap-y-4 rounded-3xl border p-6 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="min-w-0">
              <dt className="eyebrow text-muted">{fact.label}</dt>
              <dd className="text-ink mt-1 text-[0.9375rem] font-medium break-words">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        {policy.alsoAt ? (
          <p>
            The same policy is published at{" "}
            <a href={policy.alsoAt.href}>{policy.alsoAt.label}</a>.
          </p>
        ) : null}

        {policy.body}

        <h2>Contact</h2>
        <p>
          Questions about this policy, or about your information? Email{" "}
          <a href={`mailto:${policy.email}`}>{policy.email}</a>.
        </p>
      </LegalPage>

      <JsonLd
        data={[
          webPageSchema({ name: title, description: policy.summary, path }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
