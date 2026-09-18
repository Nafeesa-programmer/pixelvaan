import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Digital experiences with strong visual systems, clear hierarchy, and interfaces designed around how people actually move.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Fast, responsive, production-ready websites engineered for reliability, performance, accessibility, and scale.",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that give ambitious brands a recognizable presence across every digital touchpoint.",
  },
  {
    number: "04",
    title: "Digital Products",
    description:
      "Thoughtful product experiences that turn complex ideas into intuitive, useful, and memorable digital tools.",
  },
  {
    number: "05",
    title: "Strategy",
    description:
      "Clear digital direction connecting business goals, audience needs, content, design, and technology.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        scroll-mt-28
        overflow-hidden
        bg-[#f1eee8]
        px-[clamp(20px,5vw,72px)]
        py-[clamp(100px,13vw,190px)]
        text-black
      "
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="border-t border-black/20 pt-6">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/55">
              What we do
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-16
            max-w-[1000px]
            md:mt-24
          "
        >
          <h2
            className="
              text-[clamp(3.2rem,8vw,8rem)]
              font-medium
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            Built for brands
            <span className="text-black/40">
              {" "}
              that want more.
            </span>
          </h2>
        </motion.div>

        <div className="mt-24 border-t border-black/20 md:mt-32">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                grid
                border-b border-black/20
                py-10
                transition-colors duration-500
                md:grid-cols-[80px_1fr_1fr_60px]
                md:items-center
                md:gap-8
                md:py-14
                lg:grid-cols-[100px_1.2fr_1fr_70px]
              "
            >
              <span
                className="
                  mb-5
                  text-xs
                  font-medium
                  tracking-[0.16em]
                  text-black/45
                  transition-colors duration-500
                  group-hover:text-black
                  md:mb-0
                "
              >
                {service.number}
              </span>

              <h3
                className="
                  text-[clamp(2.1rem,5vw,5rem)]
                  font-medium
                  leading-none
                  tracking-[-0.055em]
                  transition-transform duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:translate-x-2
                  md:group-hover:translate-x-3
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  text-black/65
                  transition-colors duration-500
                  group-hover:text-black/85
                  md:mt-0
                  md:text-base
                "
              >
                {service.description}
              </p>

              <span
                className="
                  mt-8
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  self-end
                  rounded-full
                  border border-black/20
                  transition-all duration-500
                  group-hover:rotate-45
                  group-hover:border-black
                  group-hover:bg-black
                  group-hover:text-white
                  md:mt-0
                  md:justify-self-end
                "
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                />
              </span>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="max-w-md text-sm leading-6 text-black/55">
            From first idea to final launch, we bring
            strategy, design, and technology together.
          </p>

          <a
            href="#contact"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              text-sm
              font-medium
              text-black
            "
          >
            <span>Start a conversation</span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border border-black/20
                transition-all duration-500
                group-hover:rotate-45
                group-hover:bg-black
                group-hover:text-white
              "
            >
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;