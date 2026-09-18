import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-[#050505] px-[clamp(20px,5vw,72px)] py-8 text-white">
      <div className="mx-auto max-w-[1440px]">
        <div className="border-t border-white/15 pt-16">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr_0.8fr]">
            <div>
              <a
                href="#home"
                className="group flex w-fit items-center gap-3"
              >
                <span className="text-[clamp(3rem,7vw,7rem)] font-medium leading-none tracking-[-0.07em]">
                  pixelvaan
                </span>

                <span
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-white/20
                    transition-all duration-500
                    group-hover:rotate-45
                    group-hover:bg-white
                    group-hover:text-black
                  "
                >
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </a>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/60 md:text-base">
                Digital experiences built with clarity,
                character, and purpose.
              </p>

              <a
                href="mailto:hello@pixelvaan.com"
                className="
                  group mt-8
                  flex w-fit items-center gap-3
                  text-sm font-medium text-white
                "
              >
                <span className="border-b border-white/30 pb-1 transition-colors duration-300 group-hover:border-white">
                  hello@pixelvaan.com
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    transition-transform duration-500
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                Navigate
              </span>

              <nav className="mt-7 flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="
                      group flex w-fit items-center gap-2
                      text-sm text-white/65
                      transition-colors duration-300
                      hover:text-white
                    "
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="
                        opacity-0
                        transition-all duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                Connect
              </span>

              <div className="mt-7 flex flex-col gap-4">
                <a
                  href="#home"
                  className="
                    text-sm text-white/65
                    transition-colors duration-300
                    hover:text-white
                  "
                >
                  Instagram
                </a>

                <a
                  href="#home"
                  className="
                    text-sm text-white/65
                    transition-colors duration-300
                    hover:text-white
                  "
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-12">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                  Based in
                </span>

                <p className="mt-4 text-sm text-white/65">
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            mt-20
            flex flex-col gap-5
            border-t border-white/10
            pt-6
            text-xs text-white/40
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>© 2026 Pixelvaan. All rights reserved.</span>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#home"
              className="transition-colors duration-300 hover:text-white"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;