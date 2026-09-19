import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Velora",
    category: "Architecture & Interiors",
    description:
      "A refined digital presence for an architecture studio built around space, material and visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    accent: "Architecture",
  },
  {
    number: "02",
    name: "Kairo",
    category: "Digital Product",
    description:
      "A conversion-focused product experience designed to make complex technology feel simple and intuitive.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85",
    accent: "SaaS",
  },
  {
    number: "03",
    name: "Forma",
    category: "Fashion & E-commerce",
    description:
      "An editorial commerce experience combining strong visual identity with effortless product discovery.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=85",
    accent: "Fashion",
  },
];

function BrowserPreview({ project }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-[#e8e5df] shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
      <div className="flex h-11 items-center gap-2 border-b border-black/10 bg-white/85 px-4 backdrop-blur-md">
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />

        <div className="mx-auto hidden h-6 w-[42%] items-center justify-center rounded-full bg-black/[0.045] text-[9px] tracking-[0.12em] text-black/35 sm:flex">
          {project.name.toLowerCase()}.studio
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={project.image}
          alt={`${project.name} website preview`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.02 }}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 text-white sm:px-7 sm:py-5">
          <span className="text-[11px] font-medium tracking-[0.16em] uppercase">
            {project.name}
          </span>

          <div className="hidden gap-5 text-[9px] tracking-[0.12em] uppercase opacity-90 sm:flex">
            <span>Work</span>
            <span>About</span>
            <span>Contact</span>
          </div>

          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30">
            <ArrowUpRight size={12} strokeWidth={1.5} />
          </span>
        </div>

        <div className="absolute inset-x-5 bottom-5 text-white sm:inset-x-7 sm:bottom-7">
          <p className="mb-2 text-[9px] tracking-[0.2em] uppercase opacity-75">
            {project.accent}
          </p>

          <h3 className="text-3xl font-medium tracking-[-0.05em] sm:text-5xl">
            {project.name}
          </h3>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="relative scroll-mt-28 overflow-hidden bg-[#050505] px-[clamp(20px,5vw,72px)] py-[clamp(100px,13vw,190px)] text-white"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-[clamp(70px,9vw,130px)] flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[11px] font-medium tracking-[0.22em] text-white/45 uppercase">
              Selected work
            </p>

            <h2 className="max-w-[850px] text-[clamp(48px,7.5vw,112px)] font-medium leading-[0.9] tracking-[-0.065em]">
              Digital work
              <br />
              with a point of view.
            </h2>
          </div>

          <p className="max-w-[310px] text-sm leading-6 text-white/45 md:pb-2">
            A selection of digital experiences shaped around strong ideas,
            thoughtful interaction and lasting visual identities.
          </p>
        </div>

        <div className="space-y-[clamp(90px,12vw,180px)]">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.9,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="mb-6 flex items-center justify-between border-t border-white/15 pt-4">
                <div className="flex items-center gap-5">
                  <span className="text-[10px] tracking-[0.18em] text-white/35">
                    {project.number}
                  </span>

                  <span className="text-[10px] tracking-[0.18em] text-white/45 uppercase">
                    {project.category}
                  </span>
                </div>

                <span className="text-[10px] tracking-[0.18em] text-white/35 uppercase">
                  2026
                </span>
              </div>

              <BrowserPreview project={project} />

              <div className="mt-7 flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div>
                  <h3 className="text-[clamp(32px,4vw,58px)] font-medium tracking-[-0.055em]">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-[570px] text-sm leading-6 text-white/45">
                    {project.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="group/button flex w-fit items-center gap-3 rounded-full border border-white/15 px-4 py-2.5 text-xs text-white/75 transition-all duration-500 hover:border-white/40 hover:bg-white hover:text-black"
                >
                  View project

                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current transition-transform duration-500 group-hover/button:rotate-45">
                    <ArrowUpRight size={12} strokeWidth={1.5} />
                  </span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;