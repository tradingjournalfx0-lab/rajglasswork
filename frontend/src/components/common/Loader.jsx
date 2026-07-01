import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            type: "spring",
          }}
          className="w-24 h-24 rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-5xl font-black text-white shadow-2xl"
        >
          Raj
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
          }}
          className="mt-8 text-3xl font-bold text-white"
        >
            Raj Glass Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="mt-2 text-slate-400"
        >
          Premium Glass Solutions
        </motion.p>

        {/* Loading Bar */}
        <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-400"
          />
        </div>

        <motion.p
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-4 text-sm text-slate-500"
        >
          Loading Experience...
        </motion.p>

      </div>

    </div>
  );
}