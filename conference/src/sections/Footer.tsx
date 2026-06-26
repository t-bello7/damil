import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { dnaLogo } from "@/assets/images";

const navItems = [
  { label: "Programs", href: "#projects" },
  { label: "About", href: "#intro" },
  { label: "Contact", href: "#contact" },
];

const Footer: FC = () => {
  return (
    <footer id="contact" className="bg-[#080808] font-sfProDisplay text-white">
      <div className="grid lg:grid-cols-[minmax(360px,42%)_1fr]">
        <aside className="flex min-h-[660px] flex-col justify-between bg-[#080808] px-5 py-16 sm:px-8 md:py-24 lg:min-h-[1080px] lg:px-14 xl:px-20">
          <div className="max-w-[620px]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/58">
              Contact Us
            </p>
            <h2 className="mt-8 font-sfProDisplayBold text-[3rem] font-black leading-[1.03] tracking-normal text-[#f7f4ec] md:text-6xl xl:text-[4.65rem]">
              Let&apos;s Start a
              <span className="block text-[#bd7a35]">Conversation</span>
            </h2>
            <p className="mt-8 max-w-[490px] text-lg font-semibold leading-8 text-white/68 md:text-2xl md:leading-10">
              Tell us about your organization and what you&apos;re looking to achieve. We&apos;ll get back to you within one business day.
            </p>
          </div>

          <div className="my-14 h-px w-full bg-white/12 lg:my-20" />

          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/58">
              Contact Us Directly
            </p>
            <a
              href="mailto:hello@dnamanagement.com"
              className="mt-4 block font-sfProDisplayBold text-[2rem] font-black leading-tight text-white transition hover:text-[#bd7a35] md:text-4xl"
            >
              kontact@dnamanagement.de

            </a>
            <p className="mt-3 text-base font-semibold text-white/62 md:text-lg">
              Lühmannstraße 24B , 21075 Hamburg
            </p>
            <p className="mt-2 text-base font-semibold text-white/62 md:text-lg">
              +491714133877
            </p>
          </div>

          <div className="my-14 h-px w-full bg-white/12 lg:my-20" />

          <div className="max-w-[590px]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/58">
              What Happens Next
            </p>
            <p className="mt-5 text-base font-semibold leading-8 text-white/68 md:text-lg md:leading-9">
              A member of our team will review your message and reach out to schedule a discovery call. No pressure, no sales pitch - just a conversation.
            </p>
          </div>
        </aside>

        <div className="bg-[#f7f7f4] px-5 py-16 text-[#101010] sm:px-8 md:py-24 lg:px-20 xl:px-32">
          <div className="mx-auto max-w-[780px]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-black/38">
              Send a Message
            </p>
            <h3 className="mt-6 font-sfProDisplayBold text-[2.55rem] font-black leading-[1.05] tracking-normal md:text-6xl">
              Tell Us About Your Goals
            </h3>
            <p className="mt-6 max-w-[680px] text-lg font-semibold leading-8 text-black/66 md:text-xl md:leading-9">
              Share a bit about your organization and what you&apos;re hoping to achieve. We&apos;ll tailor our response to your specific situation.
            </p>

            <div className="my-14 h-px w-full bg-black/10 md:my-20" />

            <form className="space-y-16"
              action="https://formspree.io/f/mwkywooe"
              method="POST"
            >
              <fieldset className="space-y-9">
                <legend className="w-full border-b border-black/10 pb-5 font-sfProDisplayBold text-2xl font-black">
                  <span className="border-l-[3px] border-[#bd7a35] pl-5">
                    Your Information
                  </span>
                </legend>

                <div className="grid gap-8 md:grid-cols-2">
                  <label className="grid gap-3 text-base font-black">
                    Full Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      className="h-[72px] rounded-[14px] border border-black/10 bg-[#f0eee9] px-6 text-lg font-semibold text-[#111111] outline-none transition placeholder:text-[#9ba3b3] focus:border-[#bd7a35]"
                    />
                  </label>

                  <label className="grid gap-3 text-base font-black">
                    Work Email
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@company.com"
                      className="h-[72px] rounded-[14px] border border-black/10 bg-[#f0eee9] px-6 text-lg font-semibold text-[#111111] outline-none transition placeholder:text-[#9ba3b3] focus:border-[#bd7a35]"
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset className="space-y-9">
                <legend className="w-full border-b border-black/10 pb-5 font-sfProDisplayBold text-2xl font-black">
                  <span className="border-l-[3px] border-[#bd7a35] pl-5">
                    Your Training Needs
                  </span>
                </legend>

                <label className="grid gap-3 text-base font-black">
                  Area of Interest
                  <select
                    name="interest"
                    defaultValue=""
                    className="h-[72px] appearance-none rounded-[14px] border border-black/10 bg-[#f0eee9] bg-[linear-gradient(45deg,transparent_50%,#111_50%),linear-gradient(135deg,#111_50%,transparent_50%)] bg-[length:7px_7px,7px_7px] bg-[position:calc(100%-26px)_32px,calc(100%-21px)_32px] bg-no-repeat px-6 text-lg font-semibold text-[#111111] outline-none transition focus:border-[#bd7a35]"
                  >
                    <option value="" disabled>
                      Select a program area
                    </option>
                    <option>Executive Leadership Development</option>
                    <option>Effective Communication & Influence</option>
                    <option>High-Performance Team Building</option>
                    <option>Custom Training Program</option>
                  </select>
                </label>

                <label className="grid gap-3 text-base font-black">
                  Tell Us More
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Share your goals, team size, timeline, or any specific challenges you're facing..."
                    className="min-h-[180px] resize-y rounded-[14px] border border-black/10 bg-[#f0eee9] px-6 py-6 text-lg font-semibold leading-8 text-[#111111] outline-none transition placeholder:text-[#9ba3b3] focus:border-[#bd7a35]"
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex h-16 min-w-[190px] items-center justify-center rounded-full bg-[#050505] px-9 text-lg font-black text-white transition hover:bg-[#bd7a35]"
                  >
                    Send Message
                  </button>
                  <p className="mt-8 max-w-[420px] text-base font-semibold leading-7 text-black/42">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-14 xl:px-20">
        <div className="mx-auto flex max-w-[1510px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link href="#" className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[8px] bg-white">
              <Image src={dnaLogo} alt="DNA Management logo" className="h-full w-full object-contain p-1" />
            </span>
            <span className="font-sfProDisplayBold text-2xl font-black">
              DNA Management
            </span>
          </Link>

          <p className="text-base font-semibold text-white/66">
            &copy; 2026 DNA Management. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-8 text-base font-bold text-white/66 md:justify-end">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
