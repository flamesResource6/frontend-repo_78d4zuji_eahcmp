import { Menu, Bot, PhoneCall } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-10">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">AutoTalk AI</p>
            <p className="text-xs text-white/60 -mt-1">By Flames</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#demo" className="text-white/80 hover:text-white transition">Live Demo</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
          >
            <PhoneCall className="h-4 w-4" />
            Get a demo
          </a>
          <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/90">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
