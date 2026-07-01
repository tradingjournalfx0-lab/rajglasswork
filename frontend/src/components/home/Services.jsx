import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import services from "../../data/services";

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-sky-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Premium Glass Solutions
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600">
            We provide modern glass installation services with
            premium quality, elegant design, and professional finishing.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-3xl
                  bg-white
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  border
                  border-slate-100
                "
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className=" object-contain rounded-2xl  mb-6"
                />


                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-sky-100
                  text-sky-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-sky-600
                  group-hover:text-white
                  transition
                ">
                   
                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>

                <button
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-sky-600
                    group-hover:gap-4
                    transition-all
                  "
                >
                  Learn More

                  <ArrowRight size={18} />

                </button>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}