import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const titleWords = [
  "Digital",
  "experiences",
  "built",
  "to",
  "be",
  "remembered.",
];

function Hero() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const titleY = useTransform(
    scrollY,
    isMobile ? [0, 900] : [0, 650],
    isMobile ? [0, -120] : [0, -180]
  );

  const titleOpacity = useTransform(
    scrollY,
    isMobile ? [0, 850] : [0, 500],
    [1, 0]
  );

  const titleScale = useTransform(
    scrollY,
    isMobile ? [0, 900] : [0, 650],
    isMobile ? [1, 0.96] : [1, 0.94]
  );

  const contentY = useTransform(
    scrollY,
    isMobile ? [0, 750] : [0, 500],
    isMobile ? [0, -70] : [0, -90]
  );

  const contentOpacity = useTransform(
    scrollY,
    isMobile ? [0, 700] : [0, 420],
    [1, 0]
  );

  const eyebrowY = useTransform(
    scrollY,
    isMobile ? [0, 550] : [0, 350],
    isMobile ? [0, -35] : [0, -45]
  );

  const eyebrowOpacity = useTransform(
    scrollY,
    isMobile ? [0, 500] : [0, 300],
    [1, 0]
  );

  const visualY = useTransform(
    scrollY,
    isMobile ? [0, 900] : [0, 700],
    isMobile ? [0, -160] : [0, -260]
  );

  const visualRotate = useTransform(
    scrollY,
    isMobile ? [0, 900] : [0, 700],
    isMobile ? [0, 7] : [0, 12]
  );

  const visualOpacity = useTransform(
    scrollY,
    isMobile ? [0, 800] : [0, 550],
    [1, 0]
  );

  return (
    <section
      id="home"
      className="
        relative flex min-h-screen w-full
        items-end overflow-hidden
        bg-black
        px-[clamp(20px,5vw,72px)]
        pb-[clamp(48px,8vw,96px)]
        pt-32 text-white
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          style={{
            y: visualY,
            opacity: visualOpacity,
            rotate: visualRotate,
          }}
          className="
            absolute left-1/2 top-[28%]
            h-[420px] w-[420px]
            -translate-x-1/2
            rounded-full
            bg-white/[0.025]
            blur-[120px]
          "
        />

        <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <motion.div
          style={{
            y: eyebrowY,
            opacity: eyebrowOpacity,
          }}
          className="
            mb-8 flex items-center gap-3
            text-xs uppercase
            tracking-[0.2em]
            text-white/40
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span>Digital studio · Hyderabad</span>
        </motion.div>

        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
            scale: titleScale,
          }}
          className="origin-left"
        >
          <h1
            className="
              max-w-[1200px]
              text-[clamp(3.5rem,9vw,9rem)]
              font-medium
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            <span className="flex flex-wrap overflow-hidden">
              {titleWords.slice(0, 2).map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mr-[0.22em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>

            <span className="flex flex-wrap overflow-hidden text-white/35">
              {titleWords.slice(2).map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.38 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mr-[0.22em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="
            mt-14 flex flex-col gap-10
            border-t border-white/10
            pt-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-md
              text-sm
              leading-7
              text-white/50
              md:text-base
            "
          >
            We design and build high-performance
            digital products for brands that want
            to move with clarity, character, and purpose.
          </motion.p>

          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group flex w-fit items-center gap-3
              text-sm text-white/70
              transition-colors duration-300
              hover:text-white
            "
          >
            <span>Explore our work</span>

            <span
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-white/15
                transition-all duration-500
                group-hover:-rotate-45
                group-hover:bg-white
                group-hover:text-black
              "
            >
              <ArrowDownRight
                size={16}
                strokeWidth={1.6}
              />
            </span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        style={{
          y: visualY,
          opacity: visualOpacity,
          rotate: visualRotate,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="
          absolute right-[5vw]
          top-1/2 hidden
          -translate-y-1/2
          lg:block
        "
      >
        <ArrowUpRight
          size={100}
          strokeWidth={0.6}
          className="text-white/[0.08]"
        />
      </motion.div>
    </section>
  );
}

export default Hero;