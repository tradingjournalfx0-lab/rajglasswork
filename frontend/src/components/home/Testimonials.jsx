import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import testimonials from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-sky-400 font-semibold">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>

        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-slate-900 border border-slate-800 p-8 h-full"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>

                    <h3 className="font-bold text-xl">
                      {item.name}
                    </h3>

                    <p className="text-slate-400">
                      {item.city}
                    </p>

                  </div>

                </div>

                <div className="flex gap-1 mt-6">

                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

                <p className="mt-6 leading-8 text-slate-300">
                  "{item.review}"
                </p>

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}