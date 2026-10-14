import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mathyoucan",
  description:
    "Privacy Policy for Mathyoucan — how we handle account and app data.",
};

export default function MathyoucanPrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <article className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <header className="mb-10 border-b border-neutral-200 pb-8">
          <p className="mb-2 text-sm text-neutral-500">Mathyoucan</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-500">
            Last updated: October 14, 2026
          </p>
        </header>

        <div className="space-y-8 text-[15px] leading-7 text-neutral-800">
          <section className="space-y-3">
            <p>
              Mathyoucan (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a
              simple educational math learning application. This Privacy Policy
              explains what information we collect when you use the Mathyoucan
              app and how we use it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
              Information We Collect
            </h2>
            <p>
              We collect only the information needed to create and manage your
              account and provide the app:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Account information</strong> — such as your email
                address, name (if you provide it), and password when you
                register or log in. Passwords are stored in a secure, hashed
                form.
              </li>
              <li>
                <strong>Account identifiers</strong> — such as a user ID linked
                to your account so we can keep you signed in and save your
                learning progress.
              </li>
            </ul>
            <p>
              We do not collect location data, advertising identifiers, or other
              personal information beyond what is needed for your account and
              the educational features of the app.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
              How We Use Your Information
            </h2>
            <p>We use your information only to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Create and manage your account</li>
              <li>Let you sign in securely</li>
              <li>Provide and improve the educational features of Mathyoucan</li>
              <li>Respond to support requests you send us</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use your data
              for advertising or tracking across other apps or websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
              Sharing of Information
            </h2>
            <p>
              We do not share your personal information with third parties for
              marketing or advertising. We may use trusted service providers
              only as needed to run the app (for example, hosting or
              authentication), and they may process account data only on our
              behalf.
            </p>
            <p>
              We may disclose information if required by law or to protect the
              security and integrity of Mathyoucan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
              Data Retention and Deletion
            </h2>
            <p>
              We keep your account information for as long as your account is
              active. If you want to delete your account or personal data,
              contact us at the email below and we will remove it, except where
              we must keep limited information to meet legal requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
              Children&apos;s Privacy
            </h2>
            <p>
              Mathyoucan is an educational app and may be used by children. We
              collect account information only to provide the service. We do not
              knowingly use children&apos;s data for advertising or tracking. If
              you are a parent or guardian and believe your child provided
              information without your consent, contact us and we will help
              remove it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
              Changes to This Policy
            </h2>
            <p>
              If we change how we handle information, we will update this
              Privacy Policy and the &quot;Last updated&quot; date above.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Email:{" "}
                <a
                  href="mailto:office@mathyoucan.com"
                  className="underline underline-offset-2 hover:text-neutral-950"
                >
                  office@mathyoucan.com
                </a>
              </li>
              <li>
                Mathyoucan, 3rd floor, Office 2, Khodjali 32 Block 1181, Baku,
                Azerbaijan
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
