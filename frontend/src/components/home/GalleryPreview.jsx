import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import gallery from "../../data/gallery";

export default function GalleryPreview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

          <div>

            <span className="uppercase tracking-[4px] text-sky-600 font-semibold">
              Gallery
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Our Recent Work
            </h2>

            <p className="mt-5 max-w-2xl text-slate-600 leading-8">
              Browse our latest glass fitting projects completed
              for homes, offices and commercial spaces.
            </p>

          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-3 hover:bg-slate-800 transition"
          >
            View Gallery

            <ArrowRight size={18} />

          </Link>

        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {gallery.map((item, index) => (

            <motion.div

              key={item.id}

              initial={{ opacity: 0, scale: .9 }}

              whileInView={{ opacity: 1, scale: 1 }}

              transition={{
                delay: index * .05,
                duration: .4,
              }}

              viewport={{ once: true }}

              className="group relative overflow-hidden rounded-3xl"

            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/30
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              " />

              <div className="
                absolute
                bottom-6
                left-6
                right-6
                translate-y-8
                opacity-0
                group-hover:translate-y-0
                group-hover:opacity-100
                transition
              ">

                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>

                <button
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-sky-300
                  "
                >
                  <Eye size={18} />

                  View

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}