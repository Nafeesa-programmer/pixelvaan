import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Digital experiences with strong visual systems, clear hierarchy, and interfaces designed around how people actually move.",
    details:
      "From early concepts to polished interface systems, we create distinctive digital experiences that balance visual impact with usability.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Fast, responsive, production-ready websites engineered for reliability, performance, accessibility, and scale.",
    details:
      "We turn approved designs into robust, responsive products using modern frontend architecture, thoughtful interactions, and production-ready code.",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that give ambitious brands a clear and memorable presence.",
    details:
      "We build cohesive identity systems across typography, visual language, digital touchpoints, and the details that make a brand recognizable.",
  },
  {
    number: "04",
    title: "Digital Product",
    description:
      "Intuitive product experiences that make complex ideas easier to understand, use, and remember.",
    details:
      "We shape product experiences around real user journeys, combining strategy, interface design, interaction, and scalable systems.",
  },
  {
    number: "05",
    title: "Strategy",
    description:
      "Clear digital direction that connects business goals, audience needs, brand positioning, and experience.",
    details:
      "Before pixels and code, we help define what should be built, who it is for, and how the digital experience should create meaningful value.",
  },
];

function Services() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (number) => {
    setActiveService((current) =>
      current === number ? null : number
    );
  };

  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden bg-[#f1eee8] px-[clamp(20px,5vw,72px)] py-[clamp(100px,13vw,190px)] text-black"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-[clamp(70px,9vw,120px)] flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[11px] font-medium tracking-[0.22em] text-black/45 uppercase">
              What we do
            </p>

            <h2 className="max-w-[900px] text-[clamp(48px,7.5vw,112px)] font-medium leading-[0.9] tracking-[-0.065em]">
              Built around
              <br />
              what matters.
            </h2>
          </div>

          <p className="max-w-[320px] text-sm leading-6 text-black/50 md:pb-2">
            Strategy, design and technology brought together to create digital
            experiences with purpose.
          </p>
        </div>

        <div className="border-t border-black/15">
          {services.map((service) => {
            const isActive = activeService === service.number;

            return (
              <motion.div
                key={service.number}
                layout
                className="group border-b border-black/15"
              >
                <button
                  type="button"
                  onClick={() => toggleService(service.number)}
                  aria-expanded={isActive}
                  className={`flex w-full cursor-pointer flex-col gap-8 py-8 text-left transition-all duration-500 md:grid md:grid-cols-[90px_1fr_1fr_70px] md:items-center md:py-10 ${
                    isActive
                      ? "md:pb-7"
                      : "hover:bg-black hover:px-6 hover:text-white md:hover:px-8"
                  }`}
                >
                  <span
                    className={`text-[10px] tracking-[0.18em] transition-colors duration-500 ${
                      isActive
                        ? "text-black/40"
                        : "text-black/40 group-hover:text-white/45"
                    }`}
                  >
                    {service.number}
                  </span>

                  <span className="text-[clamp(40px,5.5vw,78px)] font-medium leading-[0.9] tracking-[-0.06em]">
                    {service.title}
                  </span>

                  <span
                    className={`max-w-[520px] text-sm leading-6 transition-colors duration-500 md:text-[15px] ${
                      isActive
                        ? "text-black/60"
                        : "text-black/55 group-hover:text-white/65"
                    }`}
                  >
                    {service.description}
                  </span>

                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isActive
                        ? "rotate-45 border-black bg-black text-white"
                        : "border-black/15 group-hover:border-white/25 group-hover:bg-white group-hover:text-black"
                    }`}
                  >
                    <ArrowUpRight size={18} strokeWidth={1.5} />
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

                        <div className="md:col-span-2">
                          <p className="max-w-[650px] text-lg leading-8 text-black/65">
                            {service.details}
                          </p>
                        </div>

                        <div />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;