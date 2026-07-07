import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-gray-200 bg-white p-10 text-center shadow-2xl md:p-16"
        >

          {/* Badge */}

          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-sky-700">
            Free Consultation
          </span>

          {/* Heading */}

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-gray-900 md:text-6xl">
            Ready To Transform Your
            <br />
            <span className="text-sky-600">
              Home Or Office
            </span>
            <br />
            With Premium Glass?
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Get a free site visit and quotation. We provide premium glass
            doors, office partitions, shower cubicles, railings, spider
            glazing and complete glass fitting solutions with expert
            installation.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <Link
              to="/quote"
              className="flex items-center gap-2 rounded-2xl bg-sky-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-sky-700"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+918726856089"
              className="flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:border-sky-600 hover:text-sky-600"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/918726856089"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-green-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-600"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

          {/* Trust Numbers */}

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 md:grid-cols-4">

            <div>
              <h3 className="text-4xl font-bold text-sky-600">
                1500+
              </h3>
              <p className="mt-2 text-gray-500">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-sky-600">
                4+
              </h3>
              <p className="mt-2 text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-sky-600">
                1200+
              </h3>
              <p className="mt-2 text-gray-500">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-sky-600">
                24×7
              </h3>
              <p className="mt-2 text-gray-500">
                Customer Support
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}