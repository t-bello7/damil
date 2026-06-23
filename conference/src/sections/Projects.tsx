import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  corporateTrainingHero,
  effectiveCommunicationTraining,
  highPerformanceTeamBuilding,
} from "@/assets/images";

const programs = [
  {
    number: "01",
    category: "Leadership",
    title: "Advance Accunting and Auditing",
    description:
      "Public accountants and auditors maintain trust in financial markets by providing transparency and accountability. This course focuses on advanced accounting and auditing topics — handling complex transactions, applying rigorous audit methodologies, and interpreting evolving regulatory requirements.",
    points: [
      "Advanced accounting for complex transactions and consolidations",
      "Rigorous audit methodologies, sampling, and evidence evaluation",
      "Regulatory compliance, reporting standards, and rule changes",
      "Risk assessment, internal controls, and professional ethics",
    ],
    image: corporateTrainingHero,
  },
  {
    number: "02",
    category: "Communication",
    title: "Effective Communication & Influence",
    description:
      "Build teams that communicate with clarity, confidence, and impact. From boardroom presentations to cross-functional collaboration, we cover every dimension of professional communication.",
    points: [
      "Executive presence and public speaking",
      "Negotiation and conflict resolution",
      "Storytelling for business impact",
      "Stakeholder management",
    ],
    image: effectiveCommunicationTraining,
    reverse: true,
  },
  {
    number: "03",
    category: "Team Performance",
    title: "High-Performance Team Building",
    description:
      "Transform groups into cohesive, high-performing teams. Our evidence-based programs address team dynamics, psychological safety, and the systems that enable sustained excellence.",
    points: [
      "Team dynamics and trust building",
      "Psychological safety frameworks",
      "Accountability and performance culture",
      "Remote and hybrid team effectiveness",
    ],
    image: highPerformanceTeamBuilding,
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="w-full max-w-full overflow-x-clip bg-[#f7f7f4] py-20 text-[#101010] md:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1510px] px-4 sm:px-8 lg:px-14">
        <div className="max-w-[560px]">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-black/38">
            Our Programs
          </p>
          <h2 className="mt-5 max-w-full break-words font-sfProDisplayBold text-[clamp(2.25rem,11vw,2.65rem)] font-black leading-[1.02] tracking-normal md:text-6xl">
            Training Programs That
            <span className="block text-[#a96a31]">Drive Results</span>
          </h2>
        </div>

        <div className="mt-16 h-px w-full bg-black/10 md:mt-24" />

        <div className="divide-y divide-black/10">
          {programs.map((program) => (
            <article
              key={program.number}
              className="grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20 xl:gap-28"
            >
              <div className={program.reverse ? "lg:order-2" : ""}>
                <div className="relative aspect-[1.42] overflow-hidden rounded-[28px] md:rounded-[34px] lg:aspect-[1.38]">
                  <Image
                    src={program.image}
                    alt={`${program.title} training session`}
                    fill
                    sizes="(min-width: 1200px) 680px, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div
                className={`relative ${
                  program.reverse
                    ? "lg:order-1 lg:pr-10 xl:pr-20"
                    : "lg:pl-4 xl:pl-12"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-7 right-0 font-sfProDisplayBold text-[5.5rem] font-black leading-none text-[#e6ece5] md:text-[7rem] ${
                    program.reverse ? "lg:right-24 xl:right-36" : ""
                  }`}
                >
                  {program.number}
                </span>

                <div className="relative z-10 max-w-[520px]">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-black/38">
                    {program.category}
                  </p>
                  <h3 className="mt-7 max-w-full break-words border-l-[3px] border-[#bd7a35] pl-5 font-sfProDisplayBold text-[clamp(1.75rem,8vw,2rem)] font-black leading-[1.08] tracking-normal md:text-[2.6rem]">
                    {program.title}
                  </h3>
                  <p className="mt-8 text-base font-semibold leading-8 text-black/68 md:text-lg md:leading-9">
                    {program.description}
                  </p>
                  <ul className="mt-7 space-y-3 text-sm font-semibold leading-6 text-black/62 md:text-base">
                    {program.points.map((point) => (
                      <li key={point} className="flex gap-4">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#bd7a35]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className="mt-9 inline-flex items-center gap-3 border-b border-black/20 pb-1 text-base font-black text-[#111111] transition hover:border-[#bd7a35] hover:text-[#a96a31]"
                  >
                    Learn More
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
