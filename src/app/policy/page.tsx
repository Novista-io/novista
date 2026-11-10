import type { Metadata } from "next";

import {
  Card,
  CardAction,
  CardBody,
  CardChips,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { LegalPage } from "@/components/sections/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { policies } from "@/content/policies";
import { site } from "@/content/site";
import { breadcrumbSchema, buildMetadata, webPageSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

const TITLE = "App Privacy Policies";
const DESCRIPTION =
  "The privacy policy for each Novista app and game: what it collects, what stays on your device and how to contact us.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/policy",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "App privacy", path: "/policy" },
];

export default function PolicyIndexPage() {
  return (
    <>
      <LegalPage
        title={TITLE}
        intro="Every Novista app and game has its own privacy policy. Choose one to see exactly what it collects, what stays on your device and who to contact."
        crumbs={crumbs}
        prose={false}
      >
        <ul className="grid gap-5 sm:grid-cols-2">
          {policies.map((policy) => (
            <li key={policy.slug}>
              <Card href={`/policy/${policy.slug}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="accent">{policy.kind}</Badge>
                  <span className="text-muted text-xs">
                    Updated {formatDate(policy.updatedAt)}
                  </span>
                </div>
                <CardTitle className="mt-4">{policy.name}</CardTitle>
                <CardBody className="mt-2">{policy.summary}</CardBody>
                <CardChips items={policy.platforms} />
                <CardAction>Read the policy</CardAction>
              </Card>
            </li>
          ))}

          <li>
            <Card href="/privacy-policy">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Website</Badge>
              </div>
              <CardTitle className="mt-4">{site.domain}</CardTitle>
              <CardBody className="mt-2">
                The contact form, server logs and optional analytics on this
                website.
              </CardBody>
              <CardAction>Read the policy</CardAction>
            </Card>
          </li>
        </ul>
      </LegalPage>

      <JsonLd
        data={[
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: "/policy" }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
