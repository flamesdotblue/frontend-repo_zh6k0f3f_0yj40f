import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradient glow overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-400 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-400 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 shadow">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Available for freelance
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            WordPress Developer crafting fast, modern websites
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            I’m Muhammad Areeb Anwar. I build animated, interactive, conversion‑focused WordPress sites with clean code, scalable blocks, and performance at the core.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-blue-700 transition-colors">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold text-gray-800 hover:border-gray-400 transition-colors">
              Get a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
