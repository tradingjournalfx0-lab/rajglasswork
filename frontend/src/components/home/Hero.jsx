import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundGlow from "../common/BackgroundGlow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      {/* Background Glow */}
      <BackgroundGlow />

      {/* Dark Overlay */}
      <div className="absolute inset-0 h-full bg-white/10 from-slate-950 via-slate-900/80 to-slate-950/40" />

      {/* Main Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-6">

        <div className="grid  items-center gap-16 py-28 lg:grid-cols-2">

          {/* ========================= */}
          {/* LEFT SIDE */}
          {/* ========================= */}

          <div className="order-2 lg:order-1">

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-3 backdrop-blur-xl"
            >

              <CheckCircle2
                size={18}
                className="text-sky-400"
              />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-sky-300">
                Premium Glass Fitting Company
              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="
              mt-8
              text-5xl
              font-black
              leading-tight
              text-black
              sm:text-6xl
              xl:text-7xl
              "
            >

              Transform

              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">

                Your Space

              </span>

              With Premium Glass

            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
              className="
              mt-8
              max-w-xl
              text-black
              leading-8
              text-slate-300
              "
            >
              <span className=" text-black">
              We design and install premium
              Toughened Glass,
              Office Partition,
              Glass Doors,
              Shower Cubicles,
              Glass Railings and
              Spider Glazing
              with world-class finishing.

              </span>
            </motion.p>

                        {/* CTA Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/quote"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-sky-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-sky-700
                  hover:shadow-2xl
                "
              >
                Get Free Quote
                <ArrowRight size={20} />
              </Link>

              <a
                href="tel:+918726856089"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/20
                  bg-gray-100
                  px-8
                  py-4
                  font-semibold
                  text-black
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-black/20
                "
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/918726856089?text=Hello%20Raj%20Glasswork,"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-green-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-600
                "
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4"
            >
              {[
                ["1500+", "Projects"],
                ["4+", "Years"],
                ["100%", "Quality"],
                ["24/7", "Support"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    backdrop-blur-xl
                  "
                >
                  <h3 className="text-3xl font-black text-sky-400">
                    {value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ========================= */}
          {/* RIGHT SIDE */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="
              order-1
              relative
              flex
              flex-col
              items-center
              justify-center
              lg:order-2
              lg:justify-end
            "
          >

            {/* Main Image */}

            <img
              src="/rajglasswork.png"
              alt="Glass Installation"
              className="
                aspect-[4/5]
                w-full
                max-w-xl
                rounded-[32px]
                object-cover
                shadow-[0_30px_80px_rgba(0,0,0,.45)]
              "
            />

            
               <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/1 px-5 py-3 backdrop-blur-xl mt-5"
            >

               <CheckCircle2
                size={18}
                className="text-black"
              /> 

              <span className="text-sm font-semibold uppercase tracking-[3px] text-black">
                "Raj Gupta – Founder & CEO"
              </span>

            </motion.div>

            {/* Floating Glass Card */}

            {/* <div
              className="
                absolute
                -bottom-6
                left-1/2
                w-[320px]
                -translate-x-1/2
                rounded-3xl
                border
                border-white/20
                bg-white/10
                p-6
                backdrop-blur-2xl
                lg:left-auto
                lg:right-0
                lg:translate-x-0
              "
            >
              <h3 className="text-xl font-bold text-white">
                Why Choose GlassPro?
              </h3>

              <div className="mt-5 space-y-3 text-slate-200">

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />
                  Premium Toughened Glass
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />
                  Expert Installation
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />
                  Free Site Visit
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />
                  24×7 Customer Support
                </div>

              </div>
            </div> */}

            
            </motion.div>
        </div>
        </div>
    </section>
    );
}