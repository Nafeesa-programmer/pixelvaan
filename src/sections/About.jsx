import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const approaches = [
  {
    number: "01",
    title: "Digital-first",
    short: "Every decision starts with the experience.",
    details:
      "We start by understanding how people should move through an experience. Structure, interaction and visual design are shaped around that journey from the beginning.",
  },
  {
    number: "02",
    title: "Built with intent",
    short: "Design and technology work as one.",
    details:
      "Every visual decision has a purpose and every technical decision supports the experience. We bring design and development together instead of treating them as separate stages.",
  },
  {
    number: "03",
    title: "Made to last",
    short: "Systems that grow with ambitious brands.",
    details:
      "We build flexible digital foundations that can evolve with a brand, allowing new content, features and ideas to grow without losing the original experience.",
  },
];

function About() {
  const [activeApproach, setActiveApproach] = useState(null);

  const toggleApproach = (number) => {
    setActiveApproach((current) =>
      current === number ? null : number
    );
  };

  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden bg-black px-[clamp(20px,5vw,72px)] py-[clamp(100px,13vw,190px)] text-white"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-white/40 uppercase">
              Our approach
            </p>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[950px] text-[clamp(42px,6vw,88px)] font-medium leading-[0.95] tracking-[-0.065em]"
            >
              Pixelvaan is a digital studio focused on creating experiences
              that feel as good as they perform.
            </motion.h2>

            <p className="mt-10 max-w-[650px] text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              We combine strategy, design and technology to build digital
              experiences that are clear, distinctive and made to create
              lasting value.
            </p>
          </div>
        </div>

        <div className="mt-[clamp(90px,12vw,170px)] border-t border-white/15">
          {approaches.map((approach) => {
            const isActive = activeApproach === approach.number;

            return (
              <motion.div
                key={approach.number}
                layout
                className="border-b border-white/15"
              >
                <button
                  type="button"
                  onClick={() => toggleApproach(approach.number)}
                  aria-expanded={isActive}
                  className={`group flex w-full cursor-pointer flex-col gap-6 py-8 text-left transition-all duration-500 md:grid md:grid-cols-[90px_1fr_1fr_70px] md:items-center md:py-10 ${
                    isActive
                      ? "md:pb-7"
                      : "hover:bg-white hover:px-6 hover:text-black md:hover:px-8"
                  }`}
                >
                  <span
                    className={`text-[10px] tracking-[0.18em] transition-colors duration-500 ${
                      isActive
                        ? "text-white/35"
                        : "text-white/35 group-hover:text-black/40"
                    }`}
                  >
                    {approach.number}
                  </span>

                  <span className="text-[clamp(30px,4vw,58px)] font-medium leading-none tracking-[-0.055em]">
                    {approach.title}
                  </span>

                  <span
                    className={`text-sm leading-6 transition-colors duration-500 ${
                      isActive
                        ? "text-white/55"
                        : "text-white/45 group-hover:text-black/55"
                    }`}
                  >
                    {approach.short}
                  </span>

                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isActive
                        ? "rotate-45 border-white bg-white text-black"
                        : "border-white/15 group-hover:border-black/15 group-hover:bg-black group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-10 md:grid-cols-[90px_1fr_1fr_70px]">
                        <div />

                        <p className="max-w-[650px] text-base leading-7 text-white/55 sm:text-lg sm:leading-8 md:col-span-2">
                          {approach.details}
                        </p>

                        <div />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-[clamp(90px,12vw,160px)] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 sm:p-10 md:p-14">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] tracking-[0.2em] text-white/35 uppercase">
                Start something
              </p>

              <h3 className="max-w-[700px] text-[clamp(38px,5vw,72px)] font-medium leading-[0.92] tracking-[-0.06em]">
                Have something
                <br />
                worth building?
              </h3>
            </div>

            <a
              href="#contact"
              className="group flex w-fit items-center gap-4 rounded-full bg-white px-6 py-3.5 transition-transform duration-500 hover:scale-[1.03]"
              style={{ color: "#000000" }}
            >
              <span
                style={{
                  color: "#000000",
                  whiteSpace: "nowrap",
                }}
              >
                Let's talk
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15 transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  style={{ color: "#000000" }}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;