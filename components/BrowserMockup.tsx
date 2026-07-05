import Image from "next/image";

export default function BrowserMockup() {
  return (
    <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20">

      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-5 py-3">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="rounded-full bg-slate-700 px-5 py-1 text-xs text-slate-300">
          cv-architect-ai.netlify.app
        </div>

        <div className="w-16"></div>

      </div>

      <Image
        src="/projects/cv-architect.png"
        alt="CV Architect AI"
        width={1600}
        height={900}
        className="w-full h-auto transition duration-700 group-hover:scale-[1.02]"
      />

    </div>
  );
}