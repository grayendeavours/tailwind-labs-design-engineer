import { HyaBeforeAfter } from "@/components/HyaBeforeAfter";
import { MagazineFeature } from "@/components/MagazineFeature";
import { PhotoUpload } from "@/components/PhotoUpload";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="bg-gray-50 p-2 sm:p-8">
      <Section>
        <div className="w-full flex flex-col sm:flex-row justify-between border-b pb-2">
          <p className="font-semibold text-gray-700">Application</p>
          <p className="">
            Design Engineer{" "}
            <span className="text-gray-500">@ Tailwind Labs</span>
          </p>
        </div>

        <h1 className="font-semibold text-5xl mt-12 text-gray-800">
          Harry Gray
        </h1>

        <div className="mt-12">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8">
            <div className="sm:col-span-1">
              <dt className="border-b text-sm text-gray-700 font-semibold pb-1">
                Employment status
              </dt>
              <dd className="mt-1">Self employed</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="border-b text-sm text-gray-700 font-semibold pb-1">
                Available from
              </dt>
              <dd className="mt-1">Mid April</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="border-b text-sm text-gray-700 font-semibold pb-1">
                Location
              </dt>
              <dd className="mt-1">
                Sussex, England{" "}
                <span
                  title="British Summer Time (UTC+1) from 31st March. Tell that to the weather..."
                  className="cursor-help text-gray-500 text-xs"
                >
                  UTC+0/1
                </span>
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="border-b text-sm text-gray-700 font-semibold pb-1">
                Health status
              </dt>
              <dd className="mt-1">Alive</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="border-b text-sm text-gray-700 font-semibold pb-1">
                Sarcastic?
              </dt>
              <dd className="mt-1">Hardly.</dd>
            </div>
          </dl>
        </div>

        <h2 className="mt-12 font-semibold pb-2 text-gray-700 border-b">
          Intro
        </h2>
        <p className="mt-3">
          Hello, I&apos;m Harry. A designer, developer, and dad that loves
          making wonderful things for people on the web. I turn my hand to
          anything that makes peoples&apos; lives better.
        </p>
        <p className="mt-3">
          Over the last five years, almost all of my work has used React,
          TypeScript, and Next.js. Much of it has used Tailwind CSS, though
          clearly not enough for my taste.
        </p>

        <h2 className="mt-12 font-semibold pb-2 text-gray-700 border-b">
          Fit for role
        </h2>
        <p className="mt-3">
          My interests, my experience, my passions, all seem to align so well
          with you and this opportunity. It&apos;s almost weird. I think
          we&apos;re soulmates.
        </p>
        <p className="mt-3">
          In all seriousness, we know there aren&apos;t masses of companies,
          jobs, or people out there that share this compulsion to make detailed,
          delightful things the way we do.
        </p>
        <p className="mt-3">
          My primary purpose in life is to interface humans and computers in a
          way that is empowering and joyful. Whatever needs doing. If it moves
          the needle, get it done.
        </p>

        <h2 className="mt-12 font-semibold pb-2 text-gray-700 border-b">
          Excitement
        </h2>
        <p className="mt-3">
          Honestly, the role&apos;s &lsquo;upcoming projects&rsquo; reads like a
          wishlist to Santa of things I want to spend my waking hours thinking
          about (inevitably bleeding into my dreams).
        </p>
        <p className="mt-3">
          I love writing. I love writing with personality. Writing like I speak.
          I love your sarky microcopy and willingness to have an identity. I
          want to bring my flavour of humour to your collective tone of voice.
          Albeit in American English, most of the time.
        </p>
        <p className="mt-3">
          If I <em>really</em> had to pick something from that list though,
          I&apos;d do the Catalyst command palette first. I&apos;m excited for
          Catalyst regardless - as a consumer - but the opportunity to
          completely immerse myself in a pattern I use every day but have never
          designed or developed for is scintilating.
        </p>

        <h2 className="mt-12 font-semibold pb-2 text-gray-700 border-b">
          Project: detail orientedness
        </h2>
        <p className="mt-3">
          I completely rebuilt the decade-old personalisation engine for
          award-winning personalised book publisher{" "}
          <a
            className="underline"
            href="https://www.wonderbly.com"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Wonderbly
          </a>
          .
        </p>
        <p className="mt-3">
          There were a number of new capabilities they wanted to add to their
          books that the legacy app just couldn&apos;t extend to. The project
          used React, TypeScript, Next.js, and Sass modules (for team
          familiarity).
        </p>
        <p className="mt-3">
          One of the essential features was photo upload. I designed (in code)
          and implemented the capability across the stack, cramming in a dozen
          details to make the experience as seamless as possible.
        </p>
        <p className="mt-3">
          Upselling photo uploads has earned the company tens of thousands of
          dollars of additional revenue already. Launch of the new app improved
          conversion by 19.5%.
        </p>
        <p className="mt-3">
          Try it live:{" "}
          <a
            className="underline"
            href="https://www.wonderbly.com/personalized-products/teen-birthday-book/create/start?locale=en-US"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Wonderbly Teen Birthday Book
          </a>
        </p>
      </Section>

      <PhotoUpload />

      <Section>
        <h2 className="font-semibold pb-2 text-gray-700 border-b">
          Project: applying Tailwind CSS
        </h2>
        <p className="mt-3">
          A few previous colleagues of mine created a recruitment SaaS called{" "}
          <a
            className="underline"
            href="https://app.hya.work/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            hya
          </a>
          . They got something functional - literally coded wireframes - very
          rapidly and wanted to refine it.
        </p>
        <p className="mt-3">
          I realised they needed a proper design language and a navigation
          overhaul. I migrated the styling approach from StyledComponents to
          Tailwind CSS, and applied the new system one component at a time.
        </p>
        <p className="mt-3">
          It write like it was a frontal assault, but it was really a
          multi-month journey with early and regular presenting and discussion
          of ideas, approaches, and benefits.
        </p>
        <p className="mt-3">
          As you can see from the pretty significant before and afters, I had to
          work hard to make improvements without fundamentally changing the UX
          or risking regressions on an actively-used service.
        </p>
        <p className="mt-3">
          The transformation was achieved gradually and without downtime.
        </p>
      </Section>

      <HyaBeforeAfter />

      <Section>
        <h2 className="font-semibold pb-2 text-gray-700 border-b">
          Example: explaining complicated concepts
        </h2>
        <p className="mt-3">
          Back in 2019 I had a feature published in web development-focused
          print magazine <em>net</em> titled &ldquo;Build a neural network with
          brain.js&rdquo;. It was quite the challenge introducing just enough
          theory to apply to a simple, fun, follow-along demo.
        </p>
        <p className="mt-3">
          Entertainingly, Tailwind CSS was on the front cover too.
        </p>
        <p className="mt-3">Please, read it for yourself.</p>
      </Section>

      <MagazineFeature />

      <Section>
        <h2 className="font-semibold pb-2 text-gray-700 border-b">
          Time spent
        </h2>
        <p className="mt-3">
          In a move not quite natural to me, I tightly timeboxed this exercise.
        </p>
        <p className="mt-3">
          I think you need to know what I can do in reasonable time. What I can
          deliver quickly as a demonstration or first pass fit for feedback.
          Weeks of tweaking and obsessing in isolation won&apos;t tell you what
          it would be like to work together.
        </p>
        <p className="mt-3">
          I started this from a blank slate on Saturday 23rd March at about 9am
          (having spent the morning shepherding my toddler away from grievous
          bodily harm) and finished by 5pm on Sunday.
        </p>

        <p className="mt-12 pt-12 border-t border-gray-200">
          Thanks for reading (scrolling?) all this way. Hopefully speak soon.
        </p>
        <p className="mt-3">Harry</p>
      </Section>
    </main>
  );
}

function Section({ children }: { children: ReactNode }) {
  return (
    <section className="p-4 sm:p-12 border-x lg:w-screen max-w-prose m-auto box-content">
      {children}
    </section>
  );
}
