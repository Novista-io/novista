import Link from "next/link";
import type { ReactNode } from "react";

import { contact } from "@/content/site";

/**
 * Privacy policies for Novista's apps and games.
 *
 * Each entry gets its own page at /policy/<slug>, a card on /policy and a
 * line in the sitemap. The website itself keeps its own policy at
 * /privacy-policy.
 *
 * Every policy must describe what that app actually does today. If an app
 * starts collecting something new (ads, analytics, accounts, purchases), update
 * its entry and `updatedAt` before that version ships, and keep it in step
 * with the app's Data safety form in Play Console.
 */
export type AppPolicy = {
  /**
   * URL segment: the policy lives at /policy/<slug>. Never change a live one,
   * because store listings and in-app links point at it.
   */
  slug: string;
  name: string;
  kind: "App" | "Game";
  /** Who makes it, as the app itself says. */
  madeBy: string;
  /** Developer name on Google Play. Google checks that the policy names it. */
  developer: string;
  /** Android application ID, once it is final. */
  androidId: string | null;
  platforms: string[];
  /** One sentence, used on the /policy card and as the meta description. */
  summary: string;
  /** Where privacy questions about this app go. */
  email: string;
  /** Another place the same policy is published, if any. */
  alsoAt: { label: string; href: string } | null;
  /** ISO date the policy last changed. */
  updatedAt: string;
  /** Plain semantic markup; LegalPage styles it. */
  body: ReactNode;
};

const DEVELOPER = "Novista Technologies";
const email = contact.email;
const mail = (address: string) => <a href={`mailto:${address}`}>{address}</a>;

/* -------------------------------------------------------------------------- */
/* Band.pk                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Matches the Data safety form in Play Console (pk.band.app) and the policy at
 * https://band.pk/privacy. Change all three together.
 */
const band: AppPolicy = {
  slug: "band",
  name: "Band.pk: IELTS Practice Tests",
  kind: "App",
  madeBy: "Band.pk",
  developer: DEVELOPER,
  androidId: "pk.band.app",
  platforms: ["Android", "Web"],
  summary:
    "Accounts, practice results, ads for free accounts and AI Writing checks: what Band.pk collects and who it is shared with.",
  email: "support@band.pk",
  alsoAt: { label: "band.pk/privacy", href: "https://band.pk/privacy" },
  updatedAt: "2026-11-10",
  body: (
    <>
      <h2>Who we are</h2>
      <p>
        Band.pk is an IELTS preparation service: the website band.pk and the
        Band.pk Android app. It is operated by Novista Solutions, Pakistan, and
        published on Google Play as {DEVELOPER}. For anything about your data,
        email {mail("support@band.pk")}.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account details:</strong> your name, email address and
          password (stored only as a secure hash), and optionally your phone
          number, target band and test version (Academic or General Training).
          If you sign in with Google, Google shares your name, email address and
          Google account ID with us. We never see your Google password.
        </li>
        <li>
          <strong>Your practice:</strong> the tests you take, your answers,
          scores, time spent and progress, the Writing responses you type, and
          the ratings, comments and question reports you send us. Speaking
          recordings stay on your device and are not uploaded.
        </li>
        <li>
          <strong>Payments:</strong> for plans bought on the website, the payment
          method and transaction reference you submit. For Premium or AI credits
          bought in the app, Google Play handles the payment; we receive the
          order reference and what was bought, never your card or account
          details.
        </li>
        <li>
          <strong>AI credits:</strong> your credit balance and its history:
          credits given, bought and used, and which AI checks used them.
        </li>
        <li>
          <strong>Device and security information:</strong> an identifier and
          name of the device you sign in on (an account can be signed in on one
          device at a time), the app version, and server logs with IP addresses
          and browser or device type, which we keep for security.
        </li>
      </ul>
      <p>
        We don&apos;t use analytics trackers. Our own cookies only keep you
        signed in and play protected test files. Ads, described below, are
        served by Google.
      </p>

      <h2>Ads</h2>
      <p>
        Band.pk is free to use thanks to ads. Free accounts and visitors see a
        few banner ads, and can watch a short ad to open a Premium test once.
        Premium members never see ads. Ads are provided by Google: AdMob in the
        Android app, and AdSense and Google Ad Manager on the website.
      </p>
      <ul>
        <li>
          To show and measure ads and prevent ad fraud, Google may collect your
          device&apos;s advertising ID (in the app), cookies or similar
          identifiers (on the website), your IP address and approximate
          location, how you interact with ads, and basic diagnostic information
          about the app&apos;s performance. Google may use this to personalise
          ads, as described in{" "}
          <a href="https://policies.google.com/technologies/partner-sites">
            how Google uses information from sites or apps that use its services
          </a>
          .
        </li>
        <li>
          When you watch an ad to open a test, Google tells our server that the
          ad was watched, with your Band.pk user ID, so we can open the test for
          you.
        </li>
        <li>
          In the EEA, the UK and Switzerland we ask for your consent first with
          Google&apos;s consent message, and you can change your choice at any
          time (in the app: Profile, then Ad privacy choices). Anywhere, you can
          turn off personalised ads in your Google ad settings, or reset or
          delete your advertising ID in your phone&apos;s settings.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To provide your account, mark your tests and show your results and progress.</li>
        <li>To give you the Premium access you paid for and answer your support requests.</li>
        <li>To keep accounts secure and prevent abuse, for example one signed-in device per account.</li>
        <li>To fix and improve our tests and features, using the feedback and reports you send.</li>
      </ul>

      <h2>AI Writing checks</h2>
      <p>
        When your Writing is checked by AI, the text of your answer and the task
        (including a description of its chart or picture) are sent to an AI
        provider to mark it and write the feedback. We send only that, never
        your name, email address or other account details. Your answer and the
        feedback are kept with your test result.
      </p>
      <p>
        We currently use DeepSeek and Anthropic, and may also use OpenAI, Google
        (Gemini), Alibaba Cloud (Qwen) or xAI (Grok); one of them marks each
        check. These providers may process the text outside Pakistan, including
        in the United States and China, under their own terms for business
        customers.
      </p>
      <p>
        AI feedback is an estimate to help you learn. It isn&apos;t an official
        IELTS score.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We never sell your data. It is shared only with services that run
        Band.pk for us, and only as far as they need:
      </p>
      <ul>
        <li>
          our hosting provider (Hostinger, with servers in Germany) and
          Cloudflare, which carries and protects traffic to band.pk;
        </li>
        <li>
          Google, for purchases made through Google Play, when you choose to sign
          in with Google, and to show ads to free accounts (see Ads);
        </li>
        <li>the AI providers named above, for AI Writing checks (the task and your answer only).</li>
      </ul>
      <p>We may also disclose data when the law requires it.</p>

      <h2>How we protect it</h2>
      <p>
        All traffic uses HTTPS. Passwords are stored as secure hashes, test audio
        and images are stored encrypted, and tests downloaded in the app are kept
        encrypted on your phone.
      </p>

      <h2>How long we keep it, and deleting your account</h2>
      <p>
        We keep your data while you have an account. You can delete your account
        and its data at any time on the{" "}
        <a href="https://band.pk/delete-account">delete account page</a>, in the
        app (Profile, then Delete account) or by emailing{" "}
        {mail("support@band.pk")}. Deletion is permanent; copies in our encrypted
        server backups are overwritten as those backups are replaced.
      </p>
      <p>
        You can see and correct your details in your profile at any time, and
        ask us for a copy of your data by email.
      </p>

      <h2>Children</h2>
      <p>
        Band.pk is meant for IELTS candidates and isn&apos;t directed at children
        under 13. We don&apos;t knowingly collect data from children under 13.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we update the date at the top of this page,
        and tell you in the app or by email if the change is significant.
      </p>
    </>
  ),
};

/* -------------------------------------------------------------------------- */
/* Novista Chess                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Matches the Data safety form for io.novista.chess (no data collected or
 * shared). Name no company here other than Novista Games and Novista
 * Technologies.
 */
const chess: AppPolicy = {
  slug: "chess",
  name: "Novista Chess",
  kind: "Game",
  madeBy: "Novista Games",
  developer: DEVELOPER,
  androidId: "io.novista.chess",
  platforms: ["Android", "Windows", "macOS", "Linux"],
  summary:
    "Novista Chess collects nothing: no accounts, ads, analytics or tracking, and your games stay on your device.",
  email,
  alsoAt: null,
  updatedAt: "2026-11-10",
  body: (
    <>
      <h2>The short version</h2>
      <p>
        Novista Chess collects nothing. It has no accounts, no ads, no analytics
        and no tracking, it plays without an internet connection, and your games
        and settings stay on your own device.
      </p>

      <h2>Who we are</h2>
      <p>
        Novista Chess is made by Novista Games and published by {DEVELOPER}, the
        developer name shown on Google Play. It is available for Android,
        Windows, macOS and Linux.
      </p>

      <h2>Information we collect</h2>
      <p>
        None. Novista Chess does not collect, share or sell any personal
        information or usage data, and it sends nothing to us or to anyone else.
      </p>

      <h2>Information kept on your device</h2>
      <p>
        Your game in progress, your settings and your statistics are saved on
        your device so you can carry on later. They never leave the device, we
        cannot see them, and uninstalling the game deletes them.
      </p>

      <h2>Permissions</h2>
      <p>
        On Android the game uses vibration for move feedback, which you can turn
        off in its settings. It asks for no permission that needs your approval,
        and has no access to your contacts, photos, location, camera or
        microphone.
      </p>

      <h2>Links in the game</h2>
      <p>
        The About screen links to our website, to this policy and to the
        open-source licences. A link opens only when you tap it, in your own web
        browser, where the website&apos;s{" "}
        <Link href="/privacy-policy">privacy policy</Link> applies.
      </p>

      <h2>Children</h2>
      <p>
        Novista Chess does not collect any information from anyone, including
        children.
      </p>

      <h2>Changes</h2>
      <p>
        If the game ever starts handling information differently, we will update
        this policy before that version is released and change the date at the
        top of this page.
      </p>
    </>
  ),
};

/* -------------------------------------------------------------------------- */
/* Bounce Masters                                                             */
/* -------------------------------------------------------------------------- */

/**
 * The game has ad and purchase hooks but no ad network or billing library yet.
 * When one is added, rewrite this policy (what the provider receives, consent,
 * how to opt out) before that build is released.
 */
const bounceMasters: AppPolicy = {
  slug: "bounce-masters",
  name: "Bounce Masters",
  kind: "Game",
  madeBy: "Novista Games",
  developer: DEVELOPER,
  androidId: "io.novista.bouncemasters",
  platforms: ["Android", "iOS", "Windows", "macOS", "Linux"],
  summary:
    "Bounce Masters collects nothing: no accounts, ads, purchases or tracking, and your progress stays on your device.",
  email,
  alsoAt: null,
  updatedAt: "2026-11-10",
  body: (
    <>
      <h2>The short version</h2>
      <p>
        Bounce Masters collects nothing. It has no accounts, no analytics and no
        tracking, and it plays without an internet connection. Your progress,
        coins and settings stay on your own device.
      </p>

      <h2>Who we are</h2>
      <p>
        Bounce Masters is made by Novista Games and published by {DEVELOPER}. It
        is available for Android, iPhone and iPad, Windows, macOS and Linux.
      </p>

      <h2>Information we collect</h2>
      <p>
        None. Bounce Masters does not collect, share or sell any personal
        information or usage data, and it sends nothing to us or to anyone else.
      </p>

      <h2>Ads and purchases</h2>
      <p>
        The current version has no ads and no in-app purchases. Coins and items
        are earned by playing and are kept on your device. If a future version
        adds optional ads or purchases, we will update this policy before that
        version is released, saying exactly what the ad or payment provider
        receives and how you can opt out.
      </p>

      <h2>Information kept on your device</h2>
      <p>
        Your level progress, stars, coins, unlocked items and settings are saved
        on your device so you can carry on later. They never leave the device,
        we cannot see them, and uninstalling the game deletes them.
      </p>

      <h2>Permissions</h2>
      <p>
        On Android the game uses vibration for feedback, which you can turn off
        in its settings. It asks for no permission that needs your approval on
        any platform, and has no access to your contacts, photos, location,
        camera or microphone.
      </p>

      <h2>Links in the game</h2>
      <p>
        The game links to our website, to this policy, to our{" "}
        <Link href="/terms">terms</Link> and to an email address for support. A
        link opens only when you tap it, in your own browser or email app. On
        our website, the website&apos;s{" "}
        <Link href="/privacy-policy">privacy policy</Link> applies.
      </p>

      <h2>Children</h2>
      <p>
        Bounce Masters does not collect any information from anyone, including
        children.
      </p>

      <h2>Changes</h2>
      <p>
        If the game ever starts handling information differently, we will update
        this policy before that version is released and change the date at the
        top of this page.
      </p>
    </>
  ),
};

/* -------------------------------------------------------------------------- */
/* The Floor Is Lying                                                         */
/* -------------------------------------------------------------------------- */

const floorIsLying: AppPolicy = {
  slug: "floor-is-lying",
  name: "The Floor Is Lying",
  kind: "Game",
  madeBy: "Novista Solutions",
  developer: DEVELOPER,
  // Not final until the game is published.
  androidId: null,
  platforms: ["Android", "iOS", "Windows", "macOS", "Linux"],
  summary:
    "The Floor Is Lying collects nothing: no accounts, ads, analytics or tracking, and your progress stays on your device.",
  email,
  alsoAt: null,
  updatedAt: "2026-11-10",
  body: (
    <>
      <h2>The short version</h2>
      <p>
        The Floor Is Lying collects nothing. It has no accounts, no ads, no
        analytics and no tracking, and it plays without an internet connection.
        Your progress and settings stay on your own device.
      </p>

      <h2>Who we are</h2>
      <p>
        The Floor Is Lying is made by Novista Solutions and published by{" "}
        {DEVELOPER}. It is available for Android, iPhone and iPad, Windows,
        macOS and Linux.
      </p>

      <h2>Information we collect</h2>
      <p>
        None. The Floor Is Lying does not collect, share or sell any personal
        information or usage data, and it sends nothing to us or to anyone else.
      </p>

      <h2>Information kept on your device</h2>
      <p>
        Your level progress and settings are saved on your device so you can
        carry on later. They never leave the device, we cannot see them, and
        uninstalling the game deletes them.
      </p>

      <h2>Permissions</h2>
      <p>
        On Android the game uses vibration for feedback, which you can turn off
        in its settings. It asks for no permission that needs your approval on
        any platform, and has no access to your contacts, photos, location,
        camera or microphone.
      </p>

      <h2>Links in the game</h2>
      <p>
        The title screen and credits link to our website and to an email address
        for support. A link opens only when you tap it, in your own browser or
        email app. On our website, the website&apos;s{" "}
        <Link href="/privacy-policy">privacy policy</Link> applies.
      </p>

      <h2>Children</h2>
      <p>
        The Floor Is Lying does not collect any information from anyone,
        including children.
      </p>

      <h2>Changes</h2>
      <p>
        If the game ever starts handling information differently, we will update
        this policy before that version is released and change the date at the
        top of this page.
      </p>
    </>
  ),
};

/** Order here is the order on /policy. */
export const policies: AppPolicy[] = [chess, band, bounceMasters, floorIsLying];

export const policySlugs = policies.map((policy) => policy.slug);

export function getPolicy(slug: string): AppPolicy | undefined {
  return policies.find((policy) => policy.slug === slug);
}
