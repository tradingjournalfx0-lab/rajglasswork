import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import faq from "../../data/faq";

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-sky-600 font-semibold">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our glass fitting
            services.
          </p>

        </div>

        <div className="space-y-5">

          {faq.map((item, index) => {

            const isOpen = active === index;

            return (

              <motion.div
                key={item.id}
                layout
                className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >

                <button
                  onClick={() =>
                    setActive(isOpen ? -1 : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >

                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                    {item.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                  >
                    <ChevronDown />
                  </motion.div>

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: .25,
                      }}
                    >

                      <p className="px-6 pb-6 text-slate-600 leading-8">
                        {item.answer}
                      </p>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}