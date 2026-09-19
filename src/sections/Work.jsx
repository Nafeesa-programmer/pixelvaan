import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "Velora",
    category: "Architecture & Interiors",
    year: "2026",
    description:
      "A refined digital presence for an architecture studio built around space, material and visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    details:
      "Velora brings architecture and digital storytelling together through an immersive editorial experience. The interface focuses on large-scale imagery, restrained typography and effortless navigation.",
    services: ["Strategy", "Web Design", "Development"],
  },
  {
    number: "02",
    name: "Kairo",
    category: "Digital Product",
    year: "2026",
    description:
      "A conversion-focused product experience designed to make complex technology feel simple and intuitive.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85",
    details:
      "Kairo transforms a complex digital product into a clear and approachable experience. The design system uses strong hierarchy, purposeful motion and focused interaction patterns.",
    services: ["Product Strategy", "UI/UX Design", "Development"],
  },
  {
    number: "03",
    name: "Forma",
    category: "Fashion & E-commerce",
    year: "2026",
    description:
      "An editorial commerce experience combining strong visual identity with effortless product discovery.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=85",
    details:
      "Forma combines editorial fashion storytelling with a streamlined commerce experience. Every interaction is designed to keep the product and brand at the center.",
    services: ["Brand Identity", "E-commerce", "Development"],
  },
];

function BrowserPreview({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full cursor-pointer overflow-hidden rounded-[24px] bg-[#e8e5df] text-left shadow-[0_30px_80px_rgba(0,0,0,0.16)]"
    >
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
          alt={`${project.name} project preview`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.02 }}
          whileHover={{ scale: 1.07 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/50" />

        <div className="absolute inset-x-5 top-0 flex items-center justify-between py-4 text-white sm:inset-x-7 sm:py-5">
          <span className="text-[11px] font-medium tracking-[0.16em] uppercase">
            {project.name}
          </span>

          <div className="hidden gap-5 text-[9px] tracking-[0.12em] uppercase opacity-90 sm:flex">
            <span>Work</span>
            <span>About</span>
            <span>Contact</span>
          </div>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
            <ArrowUpRight size={13} strokeWidth={1.5} />
          </span>
        </div>

        <div className="absolute inset-x-5 bottom-5 text-white sm:inset-x-7 sm:bottom-7">
          <p className="mb-2 text-[9px] tracking-[0.2em] uppercase opacity-75">
            {project.category}
          </p>

          <h3 className="text-4xl font-medium tracking-[-0.06em] sm:text-6xl">
            {project.name}
          </h3>
        </div>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-3 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[92vh] w-full max-w-[1100px] overflow-y-auto rounded-[28px] bg-[#f1eee8] text-black"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white/80 backdrop-blur-md transition-transform duration-300 hover:rotate-90"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} project`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-white sm:bottom-10 sm:left-10">
                <p className="mb-3 text-[10px] tracking-[0.2em] uppercase opacity-70">
                  {project.category}
                </p>

                <h2 className="text-6xl font-medium tracking-[-0.07em] sm:text-8xl">
                  {project.name}
                </h2>
              </div>
            </div>

            <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-[1fr_280px]">
              <div>
                <p className="max-w-[650px] text-lg leading-8 text-black/65 sm:text-xl">
                  {project.details}
                </p>
              </div>

              <div className="border-t border-black/15 pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                <p className="mb-5 text-[10px] tracking-[0.2em] text-black/40 uppercase">
                  Services
                </p>

                <div className="space-y-3">
                  {project.services.map((service) => (
                    <div
                      key={service}
                      className="border-b border-black/10 pb-3 text-sm"
                    >
                      {service}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="mb-2 text-[10px] tracking-[0.2em] text-black/40 uppercase">
                    Year
                  </p>

                  <p className="text-sm">{project.year}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
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
                    {project.year}
                  </span>
                </div>

                <BrowserPreview
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />

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
                    onClick={() => setSelectedProject(project)}
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

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Work;