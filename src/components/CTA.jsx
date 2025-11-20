function CTA() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Start greeting visitors in 10 minutes</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">We set up your shop profile, train the assistant, and give you a copy‑paste code snippet to add to your site.</p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <code className="text-white/80 text-sm">&lt;script src="https://cdn.autotalk.ai/widget.js" data-shop="YOUR_SHOP" async&gt;&lt;/script&gt;</code>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 shadow-lg shadow-orange-500/20 transition">
              Get started
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition">
              See a live demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
