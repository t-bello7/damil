import { FC } from "react";
import Image from "next/image";
import { corporateTrainingHero } from "@/assets/images";

const testimonials = [
  {
    quote:
      "DNA Management transformed how our executive team operates. The ROI has been extraordinary - we saw measurable improvements in team cohesion and decision speed within 90 days.",
    name: "Sarah Chen",
    role: "Chief People Officer, TechScale Inc.",
    initials: "SC",
  },
  {
    quote:
      "The communication training was unlike anything we'd experienced before. Our managers went from dreading difficult conversations to handling them with genuine confidence and skill.",
    name: "Marcus Johnson",
    role: "VP of Operations, Meridian Group",
    initials: "MJ",
    featured: true,
  },
  {
    quote:
      "We've worked with many training partners over the years. DNA Management stands apart because they actually understand our business and tailor everything to our specific challenges.",
    name: "Elena Rodriguez",
    role: "Director of L&D, Pacific Ventures",
    initials: "ER",
  },
];

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="border-b border-white/10 bg-[#080808] py-20 text-[#f7f4ec] md:py-28 lg:py-36">
      <div className="mx-auto max-w-[1510px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,680px)_minmax(360px,1fr)] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/58">
              Client Stories
            </p>
            <h2 className="mt-7 max-w-[660px] font-sfProDisplayBold text-[3rem] font-black leading-[1.05] tracking-normal md:text-6xl lg:text-[4.5rem]">
              Results That <span className="text-[#bd7a35]">Speak for Themselves</span>
            </h2>
          </div>

          <p className="max-w-[570px] text-lg font-semibold leading-8 text-white/68 md:text-2xl md:leading-10 lg:justify-self-end">
            Hear from the leaders and organizations who&apos;ve experienced the DNA Management difference firsthand.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_1.4fr_1fr] lg:items-start xl:gap-10">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={`rounded-[32px] border border-white/12 bg-[#1a1a1a] p-8 shadow-2xl shadow-black/20 md:p-12 ${
                testimonial.featured ? "lg:-mt-12 lg:p-10 xl:p-12" : "lg:mt-10 xl:p-12"
              }`}
            >
              {testimonial.featured && (
                <div className="relative -mx-2 mb-12 aspect-[1.52] overflow-hidden rounded-[28px] md:-mx-4">
                  <Image
                    src={corporateTrainingHero}
                    alt="Professional leader after training session"
                    fill
                    sizes="(min-width: 1200px) 620px, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              )}

              <span className="font-sfProDisplayBold text-7xl font-black leading-none text-[#6f4929]">
                &quot;
              </span>

              <p
                className={`mt-9 font-sfProDisplayBold font-black leading-[1.26] tracking-normal text-[#f7f4ec] ${
                  testimonial.featured
                    ? "text-[2rem] md:text-[2.65rem]"
                    : "text-[1.65rem] md:text-[2.05rem]"
                }`}
              >
                {testimonial.quote}
              </p>

              <div className="mt-14 h-px w-full bg-white/12" />

              <div className="mt-8 flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 font-sfProDisplayBold text-lg font-black text-white/70 md:h-16 md:w-16">
                  {testimonial.initials}
                </div>

                <div>
                  <h3
                    className={`font-sfProDisplayBold text-lg font-black ${
                      testimonial.featured ? "text-[#bd7a35]" : "text-[#f7f4ec]"
                    }`}
                  >
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-base font-semibold leading-6 text-white/62">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
