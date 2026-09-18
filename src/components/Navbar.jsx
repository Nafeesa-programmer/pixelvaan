import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-0"
      >
        <motion.nav
          animate={{
            width: scrolled ? "calc(100% - 40px)" : "100%",
            maxWidth: scrolled ? "1180px" : "1440px",
            marginTop: scrolled ? 14 : 0,
            borderRadius: scrolled ? 999 : 0,
            backgroundColor: scrolled
              ? "rgba(12, 12, 12, 0.78)"
              : "rgba(0, 0, 0, 0)",
            borderColor: scrolled
              ? "rgba(255, 255, 255, 0.10)"
              : "rgba(255, 255, 255, 0)",
            boxShadow: scrolled
              ? "0 16px 50px rgba(0, 0, 0, 0.30)"
              : "0 0 0 rgba(0, 0, 0, 0)",
            backdropFilter: scrolled
              ? "blur(20px)"
              : "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            flex items-center justify-between
            border
            px-[clamp(20px,4vw,48px)]
            py-4
          "
        >
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Pixelvaan home"
            className="group flex items-center gap-2"
          >
            <span
              className="
                text-lg
                font-semibold
                tracking-[-0.04em]
                text-white
              "
            >
              pixelvaan
            </span>

            <span
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-full
                border border-white/15
                text-white
                transition-all duration-500
                ease-[cubic-bezier(.22,1,.36,1)]
                group-hover:rotate-45
                group-hover:border-white
                group-hover:bg-white
                group-hover:text-black
              "
            >
              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
              />
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  group relative
                  text-sm
                  font-medium
                  text-white/55
                  transition-colors duration-300
                  hover:text-white
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    w-0
                    bg-white
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}

            <a
              href="#contact"
              className="
                group
                flex items-center gap-2
                rounded-full
                border border-white/15
                bg-white
                px-5 py-2.5
                text-sm font-medium
                transition-all duration-500
                hover:border-white
                hover:bg-white
              "
              style={{
                color: "#000000",
              }}
            >
              <span
                style={{
                  color: "#000000",
                }}
              >
                Let's talk
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                style={{
                  color: "#000000",
                }}
                className="
                  transition-transform duration-500
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="
              relative
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-white/15
              bg-white/[0.03]
              text-white
              backdrop-blur-md
              transition-all duration-300
              hover:border-white
              hover:bg-white
              hover:text-black
              md:hidden
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X
                    size={18}
                    strokeWidth={1.7}
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu
                    size={18}
                    strokeWidth={1.7}
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed inset-0 z-40
              flex flex-col
              overflow-y-auto
              bg-[#080808]
              px-6 pb-8 pt-28
              md:hidden
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-25%]
                top-[10%]
                h-72
                w-72
                rounded-full
                bg-white/[0.035]
                blur-[100px]
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 15,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="
                relative
                flex items-center gap-3
                border-b border-white/10
                pb-5
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-white/35
                "
              >
                Navigation
              </span>
            </motion.div>

            <nav className="relative mt-8 flex flex-col">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                  }}
                  transition={{
                    delay: 0.12 + index * 0.07,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    flex items-center
                    justify-between
                    border-b border-white/10
                    py-4
                    text-[clamp(2.2rem,9vw,3.5rem)]
                    font-medium
                    leading-none
                    tracking-[-0.055em]
                    text-white
                  "
                >
                  <span
                    className="
                      transition-transform duration-500
                      group-hover:translate-x-2
                    "
                  >
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.2}
                    className="
                      text-white/30
                      transition-all duration-500
                      group-hover:rotate-45
                      group-hover:text-white
                    "
                  />
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              onClick={closeMenu}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group mt-8
                flex shrink-0
                items-center justify-between
                rounded-full
                bg-white
                px-6 py-4
              "
              style={{
                color: "#000000",
              }}
            >
              <span
                style={{
                  color: "#000000",
                }}
                className="text-sm font-medium"
              >
                Let's talk
              </span>

              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  border border-black/15
                  transition-transform duration-500
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  style={{
                    color: "#000000",
                  }}
                />
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;