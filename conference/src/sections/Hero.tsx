"use client"
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components";
import { corporateTrainingHero } from "@/assets/images";

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#171512] text-white">
      <Image
        src={corporateTrainingHero}
        alt="Professionals collaborating in a modern corporate training room"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.52)_32%,rgba(0,0,0,0.16)_68%,rgba(0,0,0,0.36)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/65 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1510px] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 md:pb-20 lg:px-14 lg:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,760px)_1fr]">
          <div className="max-w-[760px] pb-10 lg:pb-24">
            <p className="mb-8 text-xs font-black uppercase tracking-[0.28em] text-white/70 md:mb-12 md:text-sm">
              Corporate Training &amp; Development
            </p>
            <h1 className="font-sfProDisplayBold text-[4rem] font-black leading-[0.96] tracking-normal text-[#f7f4ec] sm:text-[5.5rem] md:text-[7rem] lg:text-[6.9rem] xl:text-[8.7rem]">
              Unlock Your
              <span className="block">
                Team&apos;s <span className="text-[#bd7a35]">Full</span>
              </span>
              <span className="block text-[#bd7a35]">Potential</span>
            </h1>
            <p className="mt-8 max-w-[650px] text-lg font-semibold leading-8 text-white/72 md:text-2xl md:leading-10">
              DNA Management delivers world-class professional development
              programs that transform individuals into exceptional leaders
              and high-performing teams.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="primary"
                className="h-14 min-w-[210px] justify-center border-[#bd7a35] bg-[#bd7a35] px-8 text-base font-bold normal-case text-white hover:bg-[#a9672d] md:h-[68px] md:text-xl"
              >
                Explore Programs
              </Button>
              <Button
                variant="outline"
                className="h-14 min-w-[190px] justify-center border-white/30 bg-transparent px-8 text-base font-bold normal-case text-white outline-none hover:border-white/60 hover:bg-white/10 md:h-[68px] md:text-xl"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="mb-12 w-full max-w-[430px] justify-self-start rounded-[32px] bg-[#f7f6f1] p-7 text-[#111111] shadow-2xl shadow-black/25 sm:p-9 lg:mb-28 lg:justify-self-end xl:max-w-[500px] xl:rounded-[36px] xl:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45 md:text-sm">
              Years of Excellence
            </p>
            <strong className="mt-3 block font-sfProDisplayBold text-6xl leading-none md:text-7xl">
              15+
            </strong>
            <p className="mt-4 max-w-[230px] text-lg font-semibold leading-7 text-black/65">
              Transforming organizations across industries
            </p>
            <div className="mt-6 grid grid-cols-2 gap-5 border-t border-black/10 pt-5">
              <div>
                <strong className="block font-sfProDisplayBold text-2xl md:text-3xl">
                  500+
                </strong>
                <span className="mt-1 block text-sm font-semibold text-black/45 md:text-base">
                  Organizations Trained
                </span>
              </div>
              <div>
                <strong className="block font-sfProDisplayBold text-2xl md:text-3xl">
                  98%
                </strong>
                <span className="mt-1 block text-sm font-semibold text-black/45 md:text-base">
                  Satisfaction Rate
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/50 lg:flex">
          <span className="text-xs font-black uppercase tracking-[0.28em]">Scroll</span>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
            <path d="M2 2L10 10L18 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
