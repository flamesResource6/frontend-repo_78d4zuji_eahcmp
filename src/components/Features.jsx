import { MessagesSquare, CalendarCheck2, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MessagesSquare,
    title: "Greets and qualifies",
    desc: "Welcomes visitors, asks the right questions, and captures contact details automatically.",
  },
  {
    icon: CalendarCheck2,
    title: "Books appointments",
    desc: "Connects to your calendar and lets customers pick a time that works for them.",
  },
  {
    icon: ShieldCheck,
    title: "Trained on your shop",
    desc: "Answers questions using your services, pricing, and policies so replies sound on-brand.",
  },
  {
    icon: Sparkles,
    title: "Instant setup",
    desc: "Drop one line of code on your site. We handle the rest, from hosting to updates.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_20%_80%,rgba(251,146,60,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Purpose-built for auto service</h2>
          <p className="mt-3 text-white/70">From oil changes to complex diagnostics, give your visitors the experience of talking to a seasoned service advisor.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 mb-4">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
