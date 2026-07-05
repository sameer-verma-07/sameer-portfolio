export default function FeaturedProject() {
  return (
    <section className="bg-slate-950 text-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Featured Project
        </p>

        <h2 className="text-5xl font-bold mt-4">
          AI Career Assistant
        </h2>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-8">
          An AI-powered career platform that helps users improve resumes,
          calculate ATS scores, match jobs, prepare for interviews,
          and build professional resumes using Generative AI.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Left */}

          <div>

            <div className="space-y-5">

              <div>✅ ATS Resume Score</div>

              <div>✅ AI Resume Builder</div>

              <div>✅ Resume Improver</div>

              <div>✅ Job Matcher</div>

              <div>✅ Interview Preparation</div>

            </div>

            <div className="flex gap-5 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl">
                🚀 Live Demo
              </button>

              <button className="border border-slate-700 hover:border-blue-500 px-7 py-4 rounded-xl">
                💻 GitHub
              </button>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 h-[350px] flex items-center justify-center">

              <p className="text-gray-500">
                Project Screenshot
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}