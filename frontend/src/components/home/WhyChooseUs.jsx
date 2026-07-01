import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "We use only certified toughened glass and premium hardware.",
  },
  {
    icon: BadgeCheck,
    title: "Expert Installation",
    desc: "Experienced professionals with clean and precise installation.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    desc: "Projects completed within the promised timeline.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    desc: "Trusted by hundreds of residential and commercial clients.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <span className="text-sky-600 font-semibold uppercase tracking-[4px]">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            We Build Beautiful Glass Spaces
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            From homes to commercial buildings, our expert team delivers
            premium glass solutions with modern design, safety, and
            long-lasting quality.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-slate-200 p-6 hover:border-sky-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/images/why-choose-us.jpg"
            alt="Glass Installation"
            className="rounded-3xl object-cover w-full h-[650px] shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-64">
            <h3 className="text-5xl font-bold text-sky-600">
              12+
            </h3>

            <p className="mt-2 text-slate-700 font-medium">
              Years of Experience
            </p>

            <div className="mt-5 border-t pt-4 flex justify-between">
              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  1500+
                </h4>
                <span className="text-slate-500 text-sm">
                  Projects
                </span>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  98%
                </h4>
                <span className="text-slate-500 text-sm">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}