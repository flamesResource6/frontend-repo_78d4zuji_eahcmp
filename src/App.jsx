import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent)]" />
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} AutoTalk AI. All rights reserved.</p>
          <p>Made with ❤️ for automotive service teams.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
