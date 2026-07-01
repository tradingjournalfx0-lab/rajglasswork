import { motion } from "framer-motion";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={center ? "text-center" : ""}
    >
      <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-sky-600">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-slate-600 leading-8">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}