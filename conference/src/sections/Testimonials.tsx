"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { conferenceKeynote } from "@/assets/images";

const countdownTarget = new Date(2026, 6, 3).getTime();

const getCountdown = () => {
  const remaining = Math.max(countdownTarget - Date.now(), 0);
  const totalSeconds = Math.floor(remaining / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

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
  const featuredTestimonial = testimonials.find((testimonial) => testimonial.featured) ?? testimonials[0];
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setCountdown(getCountdown());

    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <section id="testimonials" className="border-y border-black/10 bg-[#f7f7f4] py-20 text-[#101010] md:py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1510px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,680px)_minmax(360px,1fr)] lg:items-center lg:gap-20 lg:px-14 xl:gap-28">
        <div className="relative">
          <div className="relative aspect-[1.05] overflow-hidden rounded-[8px] bg-[#080808] md:aspect-[1.18] lg:aspect-[0.98]">
            <Image
              src={conferenceKeynote}
              alt="Conference keynote speaker presenting to a professional audience"
              fill
              sizes="(min-width: 1200px) 680px, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#080808]/18" />
          </div>

          <div className="absolute inset-x-5 bottom-5 bg-[#bd7a35] px-5 py-5 text-white shadow-2xl shadow-black/20 sm:inset-x-auto sm:right-8 sm:w-[390px] md:px-7 md:py-6">
            <div className="flex divide-x divide-white/28">
              {countdownItems.map((item) => (
                <div key={item.label} className="flex-1 px-3 text-center first:pl-0 last:pr-0">
                  <p className="font-sfProDisplayBold text-[1.75rem] font-black leading-none md:text-[2.35rem]">
                    {String(item.value).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-4 text-white/82 md:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[650px] lg:justify-self-end">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#bd7a35]">
            About Meetup
          </p>
          <h2 className="mt-6 font-sfProDisplayBold text-[2.75rem] font-black uppercase leading-[1.12] tracking-normal md:text-6xl lg:text-[4.6rem]">
            Welcome to the biggest conference in germany 2026
          </h2>
          <p className="mt-7 text-base font-semibold leading-8 text-black/70 md:text-lg md:leading-9">
            Hear from leaders who have used DNA Management programs to strengthen communication, rebuild trust, and create measurable momentum inside their organizations.
          </p>
          <blockquote className="mt-7 border-l-[3px] border-[#bd7a35] pl-6 text-lg font-semibold leading-9 text-black/72 md:text-xl md:leading-10">
            &quot;{featuredTestimonial.quote}&quot;
          </blockquote>

          <div className="mt-8">
            <p className="font-sfProDisplayBold text-xl font-black text-[#101010]">
              {featuredTestimonial.name}
            </p>
            <p className="mt-1 text-base font-semibold text-black/50">
              {featuredTestimonial.role}
            </p>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex h-14 items-center justify-center border border-[#bd7a35] px-8 font-sfProDisplayBold text-sm font-black uppercase tracking-normal text-[#a96a31] transition hover:bg-[#bd7a35] hover:text-white"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
