import { motion } from 'framer-motion';

const works = [
  {
    title: 'SaaS Landing Redesign',
    role: 'Custom theme + animations',
    result: '34% higher conversion',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Boutique Storefront',
    role: 'WooCommerce + performance',
    result: '98 Lighthouse score',
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Agency Portfolio',
    role: 'Gutenberg blocks + SEO',
    result: '3x organic traffic',
    color: 'from-violet-500 to-indigo-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">A snapshot of recent builds. Each project blends thoughtful UX with robust WordPress architecture.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-gray-400 transition-colors">Start a project</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm hover:shadow-md">
              <div className={`h-40 bg-gradient-to-br ${w.color}`} />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{w.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{w.role}</p>
                <div className="mt-4 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">{w.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
