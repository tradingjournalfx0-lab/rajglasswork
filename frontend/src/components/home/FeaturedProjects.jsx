import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

          <div>
            <span className="text-sky-400 uppercase tracking-[4px] font-semibold">
              Our Projects
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Featured Installations
            </h2>

            <p className="mt-5 text-slate-400 max-w-2xl">
              Explore some of our latest residential and commercial
              glass installation projects.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 hover:bg-sky-700 transition"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div> */}

                <span className="absolute top-5 left-5 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-sm">
                  {project.category}
                </span>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <button className="mt-6 flex items-center gap-2 text-sky-400 group-hover:gap-4 transition-all">
                  View Project
                  <ArrowRight size={18} />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}