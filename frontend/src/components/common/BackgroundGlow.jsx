import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          bg-sky-500/20
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          bottom-0
          h-96
          w-96
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

    </div>
  );
}