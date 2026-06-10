"use client"
import { FC, useState } from "react";
import Link  from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { dnaLogo } from "@/assets/images";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "Programs",
    href: "#projects",
  },
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [openMobileMenu, setOpenMobileMenu ]= useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30 font-sfProDisplay">
      <div className="mx-auto max-w-[1510px] px-5 sm:px-8 lg:px-14">
        <div className="flex h-[76px] items-center justify-between border-b border-white/10 bg-black/20 px-0 backdrop-blur-sm lg:h-[92px]">
          <Link href="#" className="flex items-center gap-3 text-white">
                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[11px] bg-white shadow-lg shadow-black/10 md:h-14 md:w-14">
                  <Image src={dnaLogo} alt="DNA Management logo" className="h-full w-full object-contain p-1" />
                </span>
                <span className="font-sfProDisplayBold text-2xl font-black tracking-[-0.01em] md:text-[28px]">
                  DNA Management
                </span>
          </Link>
                
          <ul className="hidden items-center gap-10 md:flex lg:gap-14">
            {navItems.map(({label, href}) => (
              <li key={label}>
                <Link className="text-lg font-semibold text-white/70 transition hover:text-white" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="hidden min-w-[156px] rounded-full bg-[#bd7a35] px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-[#a9672d] md:inline-flex md:justify-center lg:min-w-[180px]"
          >
            Get in Touch
          </Link>

          <button
            className="relative z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            <AnimatePresence mode="wait">
              {
                openMobileMenu ? (          
                  <motion.svg key="close" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clipPath="url(#clip0_794_3025)"><path d="M15.8334 5.34175L14.6584 4.16675L10.0001 8.82508L5.34175 4.16675L4.16675 5.34175L8.82508 10.0001L4.16675 14.6584L5.34175 15.8334L10.0001 11.1751L14.6584 15.8334L15.8334 14.6584L11.1751 10.0001L15.8334 5.34175Z"></path></g><defs><clipPath id="clip0_794_3025"><rect width="20" height="20" fill="white"></rect></clipPath></defs>
                  </motion.svg>
                ) : (
                  <motion.svg key="menu" width="20" height="14" viewBox="0 0 20 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 14H20V11.8H0V14ZM0 8.1H20V5.9H0V8.1ZM0 0V2.2H20V0H0Z"></path></motion.svg>
                )
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openMobileMenu && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-5 mt-3 rounded-[8px] border border-white/10 bg-[#171512]/95 p-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-[6px] px-3 py-3 text-base font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 rounded-full bg-[#bd7a35] px-5 py-3 text-center text-base font-bold text-white"
                onClick={() => setOpenMobileMenu(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
);
};

export default Header;
