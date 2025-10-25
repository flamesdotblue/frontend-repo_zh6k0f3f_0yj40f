import { Code, Layout, Wrench, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom WordPress Development',
    icon: Code,
    desc: 'From bespoke themes to advanced functionality with ACF, CPTs, and Gutenberg blocks built for scale.',
  },
  {
    title: 'Pixel-Perfect UI & Animations',
    icon: Layout,
    desc: 'Modern, animated interfaces with Framer Motion and GSAP-like micro-interactions that feel alive.',
  },
  {
    title: 'Performance & SEO',
    icon: Wrench,
    desc: 'Lighthouse-optimized, Core Web Vitals friendly builds with clean markup and structured data.',
  },
  {
    title: 'E‑commerce & Integrations',
    icon: Globe,
    desc: 'WooCommerce, payment gateways, headless setups, and integrations that grow with your business.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">End‑to‑end WordPress solutions—from discovery to launch—with a focus on speed, maintainability, and brand fidelity.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-fuchsia-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 mb-4 group-hover:scale-105 transition-transform">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
