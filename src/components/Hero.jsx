import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_10%_10%,rgba(251,146,60,0.15),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 lg:pt-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4">
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            Built for automotive service businesses
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Turn website visitors into booked service appointments
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl">
            A friendly AI service advisor that greets, answers questions, and
            schedules visits 24/7. Increase conversions, capture leads, and free
            up your front desk.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 shadow-lg shadow-orange-500/20 transition">
              Try the widget
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition">
              See pricing
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 max-w-md text-white/80">
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/50">Avg. response time</dt>
              <dd className="text-2xl font-semibold">0.6s</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/50">Shops using AutoTalk</dt>
              <dd className="text-2xl font-semibold">250+</dd>
            </div>
          </dl>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
          <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
