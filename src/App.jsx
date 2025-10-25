import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      <Navbar />
      <main>
        <Hero3D />
        <Services />
        <Projects />
        <section id="contact" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-fuchsia-600 p-[1px] shadow-lg">
              <div className="rounded-3xl bg-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s build something remarkable.</h3>
                  <p className="mt-2 text-gray-600">Tell me about your idea, timeline, and goals. I’ll reply within 24 hours.</p>
                </div>
                <div className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
                  <a href="mailto:m.ar3eb@gmail.com" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors">Email Me</a>
                  <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 hover:border-gray-400 transition-colors">WhatsApp</a>
                </div>
              </div>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Muhammad Areeb Anwar — WordPress Developer</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
