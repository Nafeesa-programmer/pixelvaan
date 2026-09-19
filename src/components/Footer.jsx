import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/pixelvaan/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pixelvaan/",
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-[clamp(20px,5vw,72px)] py-16 text-white sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 border-t border-white/10 pt-14 md:mb-24 md:pt-16">
          <div className="grid gap-16 md:grid-cols-[1.4fr_0.6fr_0.6fr] md:gap-10">
            <div>
              <a
                href="#home"
                className="group inline-flex items-center gap-4"
              >
                <span className="text-[clamp(64px,9vw,130px)] font-medium leading-[0.8] tracking-[-0.075em]">
                  pixelvaan
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </a>

              <p className="mt-10 max-w-[520px] text-base leading-7 text-white/45">
                Digital experiences built with clarity, character, and purpose.
              </p>

              <a
                href="mailto:hello@pixelvaan.com"
                className="group mt-10 inline-flex items-center gap-4 border-b border-white/20 pb-2 text-base font-medium transition-colors duration-300 hover:border-white"
              >
                hello@pixelvaan.com

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            <div>
              <p className="mb-7 text-[10px] font-medium tracking-[0.22em] text-white/35 uppercase">
                Navigate
              </p>

              <nav className="flex flex-col items-start gap-5">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-white/85 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-7 text-[10px] font-medium tracking-[0.22em] text-white/35 uppercase">
                Connect
              </p>

              <div className="flex flex-col items-start gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-white/85 transition-colors duration-300 hover:text-white"
                  >
                    {social.label}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-12">
                <p className="mb-5 text-[10px] font-medium tracking-[0.22em] text-white/35 uppercase">
                  Based in
                </p>

                <p className="text-sm text-white/55">
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center">
          <p>© 2026 Pixelvaan. All rights reserved.</p>

          <div className="flex items-center gap-7">
            <a
              href="#contact"
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