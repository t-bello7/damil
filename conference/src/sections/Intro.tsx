import { FC } from "react";
import Image from "next/image";
import { teamTrainingImg } from "@/assets/images";

const principles = [
  {
    title: "Human-Centered",
    description:
      "Every program starts with deep listening. We design for your people, not a generic audience.",
    highlighted: true,
  },
  {
    title: "Evidence-Based",
    description:
      "Our methods are grounded in behavioral science and validated by measurable outcomes.",
  },
  {
    title: "Lasting Impact",
    description:
      "We build capabilities that outlast the training room and compound over time.",
  },
];

const Intro: FC = () => {
  return (
    <section id="intro" className="w-full max-w-full overflow-x-clip bg-[#080808] py-20 text-[#f7f4ec] md:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1510px] px-4 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1210px]">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/58">
            Our Story
          </p>

          <h2 className="mt-16 max-w-[1080px] break-words font-sfProDisplayBold text-[clamp(2.45rem,12vw,3.1rem)] font-black leading-[1.05] tracking-normal md:text-7xl lg:text-[5.9rem]">
            We Believe in the <span className="text-[#bd7a35]">Power of People</span>
          </h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,690px)_420px] lg:items-start lg:gap-20 xl:grid-cols-[minmax(0,760px)_470px]">
            <div className="space-y-8 text-lg font-semibold leading-9 text-white/70 md:text-2xl md:leading-[1.7] lg:pt-1">
              <p>
                DNA Management was founded on a simple conviction:{" "}
                <strong className="font-sfProDisplayBold text-[#f7f4ec]">
                  organizations don&apos;t transform - people do.
                </strong>{" "}
                For over 15 years, we&apos;ve partnered with Fortune 500 companies, growing startups, and public sector organizations to develop the human capabilities that drive lasting change.
              </p>

              <p>
                Our approach is grounded in behavioral science, adult learning theory, and the hard-won wisdom of practitioners who&apos;ve led teams through real challenges. We don&apos;t deliver off-the-shelf content - every engagement is designed around your specific context, culture, and goals.
              </p>

              <p>
                From intensive leadership academies to targeted skill-building workshops, we create learning experiences that meet people where they are and help them move with confidence.
              </p>
            </div>

            <div className="relative aspect-[0.78] overflow-hidden rounded-[28px] md:max-w-[470px] lg:mt-0">
              <Image
                src={teamTrainingImg}
                alt="Professionals reviewing training goals together"
                fill
                sizes="(min-width: 1200px) 470px, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>
          </div>

          <figure className="mt-20 border-l-[4px] border-[#bd7a35] pl-8 md:mt-28 md:pl-12">
            <blockquote className="max-w-[1180px] break-words font-sfProDisplayBold text-[clamp(1.75rem,8vw,2.05rem)] font-black leading-[1.25] tracking-normal md:text-5xl md:leading-[1.22]">
              &quot;The best investment any organization can make is in the growth of its people.&quot;
            </blockquote>
            <figcaption className="mt-6 text-base font-semibold text-white/64 md:text-lg">
              - DNA Management Founding Principle
            </figcaption>
          </figure>

          <div className="mt-20 h-px w-full bg-white/12 md:mt-28" />

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`md:px-14 ${
                  index === 0
                    ? "md:pl-0"
                    : "border-t border-white/12 pt-10 md:border-l md:border-t-0 md:pt-0"
                }`}
              >
                <h3
                  className={`font-sfProDisplayBold text-2xl font-black md:text-3xl ${
                    principle.highlighted ? "text-[#bd7a35]" : "text-[#f7f4ec]"
                  }`}
                >
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-[320px] text-base font-semibold leading-8 text-white/66 md:text-lg md:leading-9">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
