// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// const stats = [
//   {
//     number: 1500,
//     suffix: "+",
//     title: "Projects Completed",
//   },
//   {
//     number: 1200,
//     suffix: "+",
//     title: "Happy Clients",
//   },
//   {
//     number: 12,
//     suffix: "+",
//     title: "Years Experience",
//   },
//   {
//     number: 24,
//     suffix: "/7",
//     title: "Customer Support",
//   },
// ];

// export default function Stats() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
//       <div className="max-w-7xl mx-auto px-6">

//         <div
//           ref={ref}
//           className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {stats.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: index * 0.15,
//                 duration: 0.5,
//               }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.03,
//               }}
//               className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center shadow-xl"
//             >
//               <h2 className="text-5xl font-black text-sky-400">
//                 {inView && (
//                   <CountUp
//                     end={item.number}
//                     duration={2.5}
//                   />
//                 )}
//                 {item.suffix}
//               </h2>

//               <p className="mt-5 text-slate-300 text-lg">
//                 {item.title}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }