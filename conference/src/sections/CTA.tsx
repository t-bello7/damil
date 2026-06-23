import Link from "next/link";
import { FC } from "react";

const processSteps = [
  {
    title: "Discovery Call",
    text: "We learn about your organization, goals, and challenges.",
  },
  {
    title: "Custom Design",
    text: "We build a program tailored to your specific context.",
  },
  {
    title: "Expert Facilitation",
    text: "Experienced practitioners deliver engaging, impactful sessions.",
  },
  {
    title: "Sustained Support",
    text: "Post-training resources and coaching to reinforce learning.",
  },
];

const CTA: FC = () => {
  return (
    <section className="w-full max-w-full overflow-x-clip bg-[#080808] py-20 text-[#f7f4ec] md:py-28 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1510px] gap-14 px-4 sm:px-8 lg:grid-cols-[minmax(0,770px)_minmax(420px,620px)] lg:items-center lg:gap-24 lg:px-14">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/58">
            Start Today
          </p>
          <h2 className="mt-20 max-w-[850px] break-words font-sfProDisplayBold text-[clamp(2.5rem,12vw,3.4rem)] font-black leading-[1.02] tracking-normal md:text-7xl lg:text-[5.7rem] xl:text-[6.5rem]">
            Ready to Build a
            <span className="block text-[#bd7a35]">Stronger Team?</span>
          </h2>
          <p className="mt-10 max-w-[680px] text-xl font-semibold leading-9 text-white/70 md:text-2xl md:leading-10">
            Let&apos;s design a training program that fits your organization&apos;s unique needs, culture, and ambitions. Our team is ready to help.
          </p>

          <div className="mt-16 flex w-full flex-col gap-5 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex h-16 w-full items-center justify-center rounded-full bg-[#bd7a35] px-6 text-center text-base font-black text-white transition hover:bg-[#a9672d] sm:w-auto sm:px-9 sm:text-lg md:min-w-[315px] md:text-2xl"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="#projects"
              className="inline-flex h-16 w-full items-center justify-center rounded-full border-4 border-white/20 px-6 text-center text-base font-black text-white transition hover:border-white/45 hover:bg-white/5 sm:w-auto sm:px-9 sm:text-lg md:min-w-[230px] md:text-2xl"
            >
              View Programs
            </Link>
          </div>
        </div>

        <aside className="rounded-[34px] bg-[#f7f7f4] px-8 py-10 text-[#101010] md:rounded-[42px] md:px-14 md:py-16 lg:px-16">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-black/38">
            What to Expect
          </p>
          <h3 className="mt-7 font-sfProDisplayBold text-[2rem] font-black leading-tight md:text-[2.75rem]">
            Our Engagement Process
          </h3>

          <ul className="mt-14 space-y-8">
            {processSteps.map((step) => (
              <li key={step.title} className="flex gap-5">
                <span className="mt-3 h-3 w-3 shrink-0 rounded-full bg-[#bd7a35]" />
                <p className="text-lg font-semibold leading-8 text-black/68 md:text-2xl md:leading-10">
                  <strong className="font-sfProDisplayBold text-[#101010]">
                    {step.title}
                  </strong>{" "}
                  - {step.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="my-14 h-px w-full bg-black/10" />

          <p className="text-xs font-black uppercase tracking-[0.28em] text-black/38">
            Response Time
          </p>
          <p className="mt-5 text-lg font-semibold leading-8 text-black/68 md:text-2xl">
            We respond to all inquiries within one business day.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default CTA;
