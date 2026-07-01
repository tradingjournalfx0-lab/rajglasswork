import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600" />

      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/20 bg-white/10 p-10 text-center backdrop-blur-xl shadow-2xl md:p-16"
        >

          <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-white">
            Free Consultation
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Ready To Transform Your
            <br />
            Home Or Office With Premium Glass?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sky-100">
            Get a free site visit and quotation. We provide modern glass
            doors, partitions, railings, shower cubicles and commercial
            glazing solutions.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <Link
              to="/quote"
              className="flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-sky-700 transition hover:scale-105"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

          {/* Trust Numbers */}

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/20 pt-10 md:grid-cols-4">

            <div>
              <h3 className="text-3xl font-bold text-white">
                1500+
              </h3>
              <p className="mt-2 text-sky-100">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                12+
              </h3>
              <p className="mt-2 text-sky-100">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                1200+
              </h3>
              <p className="mt-2 text-sky-100">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                24×7
              </h3>
              <p className="mt-2 text-sky-100">
                Support
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}