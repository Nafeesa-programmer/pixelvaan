import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Velora",
    category: "Architecture & Interior",
    type: "Digital Experience",
    year: "2026",
    description:
      "A refined digital presence for a modern architecture studio, showcasing spaces that inspire calm, balance, and a better way to live.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    name: "Kairo",
    category: "SaaS Platform",
    type: "Digital Product",
    year: "2026",
    description:
      "A modern SaaS platform designed to help ambitious teams work smarter, faster, and more collaboratively — all in one place.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    name: "Forma",
    category: "Fashion & Lifestyle",
    type: "E-Commerce",
    year: "2025",
    description:
      "A premium e-commerce experience for a contemporary fashion brand, blending modern design with timeless style.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=85",
  },
];

function BrowserFrame({ project }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex h-11 items-center gap-2 border-b border-black/10 bg-[#f7f6f3] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />

        <div className="mx-auto hidden h-6 w-[42%] items-center justify-center rounded-md bg-black/[0.04] text-[9px] tracking-wide text-black/30 sm:flex">
          {project.name.toLowerCase()}.studio
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={project.image}
          alt={`${project.name} project preview`}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.045 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

        <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-white">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            {project.name}
          </span>

          <span className="rounded-full border border-white/25 bg-black/15 px-3 py-1.5 text-[9px] backdrop-blur-md">
            Selected work
          </span>
        </div>

        <div className="absolute bottom-5 left-5 max-w-[80%] text-white">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/65">
            {project.category}
          </p>

          <h3 className="mt-2 text-[clamp(1.7rem,4vw,3.4rem)] font-medium leading-[0.92] tracking-[-0.055em]">
            {project.name}
          </h3>
        </div>

        <motion.span
          className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md"
          whileHover={{
            rotate: 45,
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
          transition={{ duration: 0.4 }}
        >
          <ArrowUpRight size={17} strokeWidth={1.5} />
        </motion.span>
      </div>
    </motion.div>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0a0a0a] px-[clamp(20px,5vw,72px)] py-[clamp(100px,13vw,190px)] text-white"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="border-t border-white/15 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                Selected work
              </span>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.18em] text-white/25 md:block">
              2025 — 2026
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[760px] text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em]"
          >
            Digital experiences
            <span className="text-white/35">
              {" "}
              for modern brands.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md justify-self-start text-sm leading-7 text-white/45 md:justify-self-end md:text-base"
          >
            We partner with ambitious brands to create websites,
            products, and digital experiences that feel considered,
            useful, and unmistakably their own.
          </motion.p>
        </div>

        <div className="mt-24 space-y-24 md:mt-32 md:space-y-36">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 1,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-10 md:grid-cols-[0.34fr_1fr] md:gap-14 lg:grid-cols-[0.3fr_1fr] lg:gap-20"
            >
              <div className="flex flex-col">
                <span className="text-xs text-white/30">
                  {project.number}
                </span>

                <h3 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-none tracking-[-0.06em]">
                  {project.name}
                </h3>

                <div className="mt-6">
                  <p className="text-sm font-medium text-white/70">
                    {project.category}
                  </p>

                  <p className="mt-1 text-sm text-white/35">
                    {project.type}
                  </p>
                </div>

                <p className="mt-8 max-w-xs text-sm leading-6 text-white/45">
                  {project.description}
                </p>

                <div className="mt-auto pt-8">
                  <div className="flex items-center gap-3 text-xs text-white/35">
                    <span>{project.year}</span>
                    <span className="h-px w-8 bg-white/20" />
                  </div>

                  <a
                    href="#contact"
                    className="group mt-7 flex w-fit items-center gap-3 border-b border-white/20 pb-2 text-sm text-white/75 transition-colors duration-300 hover:border-white hover:text-white"
                  >
                    <span>View project</span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>

              <BrowserFrame project={project} />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-28 flex justify-center md:mt-40"
        >
          <a
            href="#contact"
            className="group flex items-center gap-4 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/70 transition-all duration-500 hover:border-white/40 hover:bg-white hover:text-black"
          >
            <span>View all work</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;