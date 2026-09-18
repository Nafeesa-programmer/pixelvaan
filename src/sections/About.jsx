import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  ["01", "Digital-first", "Every decision starts with the experience."],
  ["02", "Built with intent", "Design and technology work as one."],
  ["03", "Made to last", "Systems that grow with ambitious brands."],
];

function About() {
  return (
    <section
      id="about"
      className="
    relative
    scroll-mt-28
    overflow-hidden
    bg-black
    px-[clamp(20px,5vw,72px)]
    py-[clamp(110px,14vw,210px)]
    text-white
  "
    >
      <div className="mx-auto max-w-[1440px]">
        <div
          className="
            mb-20 flex items-center gap-3
            border-t border-white/10
            pt-6
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />

          <span
            className="
              text-xs uppercase
              tracking-[0.2em]
              text-white/40
            "
          >
            About Pixelvaan
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[1200px]"
        >
          <h2
            className="
              text-[clamp(3rem,8vw,8rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.065em]
            "
          >
            We turn ideas into
            <span className="text-white/30"> digital experiences</span>
            <br />
            people remember.
          </h2>
        </motion.div>

        <div
          className="
            mt-20
            grid gap-12
            border-t border-white/10
            pt-8
            md:mt-32
            md:grid-cols-[1fr_1.2fr]
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="
                text-xs uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              Our approach
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <p
              className="
                max-w-2xl
                text-[clamp(1.35rem,2.5vw,2.4rem)]
                font-light
                leading-[1.25]
                tracking-[-0.035em]
                text-white/70
              "
            >
              Pixelvaan is a digital studio focused on creating distinctive
              brands, websites, and products that feel as good as they perform.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 border-t border-white/10">
          {stats.map(([number, title, description], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="
                group
                grid grid-cols-[50px_1fr]
                gap-5
                border-b border-white/10
                py-8
                md:grid-cols-[80px_1fr_1fr_auto]
                md:items-center
                md:gap-8
              "
            >
              <span className="text-xs tracking-[0.15em] text-white/30">
                {number}
              </span>

              <h3
                className="
                  text-2xl
                  font-medium
                  tracking-[-0.04em]
                  transition-transform duration-500
                  group-hover:translate-x-2
                  md:text-3xl
                "
              >
                {title}
              </h3>

              <p
                className="
                  col-start-2
                  max-w-sm
                  text-sm
                  leading-6
                  text-white/40
                  md:col-start-auto
                "
              >
                {description}
              </p>

              <span
                className="
                  hidden h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  transition-all duration-500
                  group-hover:rotate-45
                  group-hover:border-white
                  group-hover:bg-white
                  group-hover:text-black
                  md:flex
                "
              >
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative mt-28
            overflow-hidden
            rounded-[3px]
            border border-white/10
            bg-[#111111]
            px-6 py-16
            md:px-16 md:py-24
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              h-72 w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.025]
              blur-[100px]
            "
          />

          <div className="relative">
            <span
              className="
                text-xs uppercase
                tracking-[0.2em]
                text-white/30
              "
            >
              The next move
            </span>

            <h3
              className="
                mt-8 max-w-4xl
                text-[clamp(2.5rem,6vw,6rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.06em]
              "
            >
              Have something
              <span className="text-white/30"> worth building?</span>
            </h3>

            <a
              href="#contact"
              className="
    group mt-10
    flex w-fit items-center gap-4
    rounded-full
    bg-white
    px-6 py-3
    transition-transform duration-500
    hover:scale-[1.03]
  "
              style={{ color: "#000000" }}
            >
              <span
                style={{
                  color: "#000000",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                Let's talk
              </span>

              <span
                className="
                flex h-7 w-7
                items-center justify-center
                rounded-full
                border border-black/15
                transition-transform duration-500
                group-hover:rotate-45
              "
              >
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  style={{ color: "#000000" }}
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
