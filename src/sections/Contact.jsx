import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";

const services = [
  "Web Design",
  "Development",
  "Brand Identity",
  "Digital Product",
  "Strategy",
];

const API_URL =
  import.meta.env.VITE_API_URL || "https://pixelvaan.onrender.com";

function Contact() {
  const [selectedService, setSelectedService] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));

    setServerError("");
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (!selectedService) {
      nextErrors.service = "Please select a service.";
    }

    if (!form.message.trim()) {
      nextErrors.message =
        "Please tell us about your project.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "loading") return;

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setServerError("");
    setStatus("loading");

    try {
      const response = await fetch(
        `${API_URL}/api/inquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.company,
            service: selectedService,
            message: form.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Something went wrong. Please try again."
        );
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      setSelectedService("");
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");

      setServerError(
        error.message ||
          "Unable to submit your inquiry right now."
      );
    }
  };

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-[#f1eee8]
        px-[clamp(20px,5vw,72px)]
        py-[clamp(110px,14vw,210px)]
        text-black
      "
    >
      <div className="mx-auto max-w-[1440px]">

        <div className="border-t border-black/20 pt-6">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-black/55
              "
            >
              Start a project
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 max-w-[1100px]"
        >
          <h2
            className="
              text-[clamp(3.5rem,9vw,9rem)]
              font-medium
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            Let's make
            <span className="text-black/45">
              {" "}something
            </span>
            <br />
            meaningful.
          </h2>
        </motion.div>

        <div
          className="
            mt-24
            grid gap-16
            border-t border-black/20
            pt-10
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-24
          "
        >

          <div>
            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-black/55
              "
            >
              Tell us about it
            </span>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-black/70
              "
            >
              Have a project, product, or idea in mind?
              Tell us what you're building and we'll take
              it from there.
            </p>

            <a
              href="mailto:hello@pixelvaan.com"
              className="
                group
                mt-10
                flex w-fit
                items-center gap-3
                border-b border-black/30
                pb-2
                text-sm
                font-medium
                text-black
                transition-colors duration-300
                hover:border-black
              "
            >
              <span>hello@pixelvaan.com</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="
                  transition-transform duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-0"
          >

            <div className="border-b border-black/20">
              <label
                htmlFor="name"
                className="
                  block pt-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-black/55
                "
              >
                Your name
              </label>

              <input
                id="name"
                value={form.name}
                onChange={(event) =>
                  updateField(
                    "name",
                    event.target.value
                  )
                }
                type="text"
                autoComplete="name"
                placeholder="John Doe"
                className="
                  w-full
                  bg-transparent
                  py-5
                  text-xl
                  text-black
                  outline-none
                  placeholder:text-black/45
                "
              />

              {errors.name && (
                <p className="pb-3 text-xs font-medium text-red-700">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="border-b border-black/20">
              <label
                htmlFor="email"
                className="
                  block pt-6
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-black/55
                "
              >
                Email address
              </label>

              <input
                id="email"
                value={form.email}
                onChange={(event) =>
                  updateField(
                    "email",
                    event.target.value
                  )
                }
                type="email"
                autoComplete="email"
                placeholder="john@company.com"
                className="
                  w-full
                  bg-transparent
                  py-5
                  text-xl
                  text-black
                  outline-none
                  placeholder:text-black/45
                "
              />

              {errors.email && (
                <p className="pb-3 text-xs font-medium text-red-700">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="border-b border-black/20">
              <label
                htmlFor="company"
                className="
                  block pt-6
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-black/55
                "
              >
                Company
              </label>

              <input
                id="company"
                value={form.company}
                onChange={(event) =>
                  updateField(
                    "company",
                    event.target.value
                  )
                }
                type="text"
                autoComplete="organization"
                placeholder="Your company"
                className="
                  w-full
                  bg-transparent
                  py-5
                  text-xl
                  text-black
                  outline-none
                  placeholder:text-black/45
                "
              />
            </div>

            <div className="border-b border-black/20 pt-6">
              <span
                className="
                  block
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-black/55
                "
              >
                What do you need?
              </span>

              <div className="mt-5 flex flex-wrap gap-2 pb-6">
                {services.map((service) => {
                  const active =
                    selectedService === service;

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => {
                        setSelectedService(service);

                        setErrors((current) => ({
                          ...current,
                          service: "",
                        }));

                        setServerError("");
                      }}
                      className={`
                        flex items-center gap-2
                        rounded-full
                        border
                        px-4 py-2.5
                        text-sm
                        font-medium
                        transition-all duration-300
                        ${
                          active
                            ? "border-black bg-black text-white"
                            : "border-black/20 text-black/70 hover:border-black hover:text-black"
                        }
                      `}
                    >
                      {active && (
                        <Check
                          size={13}
                          strokeWidth={2}
                        />
                      )}

                      {service}
                    </button>
                  );
                })}
              </div>

              {errors.service && (
                <p className="pb-3 text-xs font-medium text-red-700">
                  {errors.service}
                </p>
              )}
            </div>

            <div className="border-b border-black/20">
              <label
                htmlFor="message"
                className="
                  block pt-6
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-black/55
                "
              >
                Tell us about your project
              </label>

              <textarea
                id="message"
                value={form.message}
                onChange={(event) =>
                  updateField(
                    "message",
                    event.target.value
                  )
                }
                rows={4}
                placeholder="What are you looking to build?"
                className="
                  w-full
                  resize-none
                  bg-transparent
                  py-5
                  text-xl
                  leading-relaxed
                  text-black
                  outline-none
                  placeholder:text-black/45
                "
              />

              {errors.message && (
                <p className="pb-3 text-xs font-medium text-red-700">
                  {errors.message}
                </p>
              )}
            </div>

            {serverError && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  mt-5
                  border
                  border-red-900/15
                  bg-red-950/[0.04]
                  px-4 py-3
                  text-sm
                  font-medium
                  text-red-800
                "
              >
                {serverError}
              </motion.div>
            )}

            <motion.button
              whileHover={{
                scale:
                  status === "loading"
                    ? 1
                    : 1.02,
              }}
              whileTap={{
                scale:
                  status === "loading"
                    ? 1
                    : 0.98,
              }}
              type="submit"
              disabled={status === "loading"}
              className="
                group
                mt-10
                flex w-full
                items-center
                justify-between
                rounded-full
                bg-black
                px-6 py-4
                text-white
                disabled:cursor-wait
                disabled:opacity-70
              "
            >
              <span className="text-sm font-medium">
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                    ? "Inquiry sent"
                    : "Send inquiry"}
              </span>

              <span
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  transition-transform duration-500
                  group-hover:rotate-45
                "
              >
                {status === "loading" ? (
                  <Loader2
                    size={16}
                    strokeWidth={1.5}
                    className="animate-spin"
                  />
                ) : status === "success" ? (
                  <Check
                    size={16}
                    strokeWidth={1.7}
                  />
                ) : (
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                  />
                )}
              </span>
            </motion.button>

            {status === "success" && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  mt-4
                  flex items-center gap-2
                  text-sm
                  font-medium
                  text-black/65
                "
              >
                <span
                  className="
                    flex h-5 w-5
                    items-center justify-center
                    rounded-full
                    bg-black
                    text-white
                  "
                >
                  <Check
                    size={11}
                    strokeWidth={2}
                  />
                </span>

                Thanks. Your inquiry has been received.
              </motion.div>
            )}
          </form>
        </div>

        <footer
          className="
            mt-32
            flex flex-col gap-6
            border-t border-black/20
            pt-6
            text-xs
            text-black/55
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>
            © 2026 Pixelvaan. All rights reserved.
          </span>

          <div className="flex gap-6">
            <a
              href="#home"
              className="transition-colors hover:text-black"
            >
              Instagram
            </a>

            <a
              href="#home"
              className="transition-colors hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="#home"
              className="transition-colors hover:text-black"
            >
              Privacy
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;