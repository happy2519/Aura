export default function AuraPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-100 text-slate-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/40 border-b border-white/30 sticky top-0 z-50">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">AURA</h1>
          <p className="text-sm text-slate-500">AI Unified Reality Assistant</p>
        </div>

        <button className="px-5 py-2 rounded-full bg-violet-500 text-white shadow-lg hover:scale-105 transition">
          Launch Sage
        </button>
      </header>

      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20 py-16">
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-sm shadow mb-6">
            Emotionally Intelligent Wellness AI
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Protect Your Mental Space In A Hyperconnected World.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            AURA quietly senses stress, distraction, and cognitive overload using behavioral signals and adapts your digital environment to help you stay calm and focused.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-2xl bg-violet-600 text-white shadow-xl hover:scale-105 transition">
              Try Focus Mode
            </button>

            <button className="px-6 py-3 rounded-2xl border border-slate-300 bg-white/70 backdrop-blur-md hover:bg-white transition">
              View Dashboard
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold">Daily Wellness Overview</h3>
              <p className="text-sm text-slate-500">Good Evening — Sage is monitoring your digital balance.</p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-blue-400 flex items-center justify-center text-white text-xl font-bold shadow-lg">
              S
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/70 rounded-2xl p-5 shadow-md">
              <p className="text-sm text-slate-500 mb-2">Stress Level</p>
              <h4 className="text-3xl font-bold mb-2">Moderate</h4>
              <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                <div className="w-2/3 h-full bg-gradient-to-r from-orange-300 to-violet-400"></div>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-5 shadow-md">
              <p className="text-sm text-slate-500 mb-2">Focus Score</p>
              <h4 className="text-3xl font-bold mb-2">82%</h4>
              <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                <div className="w-4/5 h-full bg-gradient-to-r from-blue-300 to-violet-500"></div>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-5 shadow-md md:col-span-2">
              <p className="text-sm text-slate-500 mb-2">Sage Suggestion</p>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-200 flex items-center justify-center text-violet-700 font-bold">
                  ✦
                </div>

                <div>
                  <p className="text-slate-700 leading-relaxed">
                    “You’ve been switching apps frequently for the past hour. Shall I activate Calm Focus Mode and reduce unnecessary notifications?”
                  </p>

                  <button className="mt-4 px-5 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 transition">
                    Enable Focus Mode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">How AURA Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            AURA quietly understands your digital behavior and adapts your environment to reduce burnout and mental fatigue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
            <div className="text-4xl mb-5">🧠</div>
            <h3 className="text-2xl font-semibold mb-3">Sense</h3>
            <p className="text-slate-600 leading-relaxed">
              Detect stress using typing behavior, notification overload, screen time, and rapid app switching.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
            <div className="text-4xl mb-5">✨</div>
            <h3 className="text-2xl font-semibold mb-3">Think</h3>
            <p className="text-slate-600 leading-relaxed">
              Sage analyzes emotional overload patterns and provides calm contextual support.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
            <div className="text-4xl mb-5">🌿</div>
            <h3 className="text-2xl font-semibold mb-3">Act</h3>
            <p className="text-slate-600 leading-relaxed">
              Automatically enable focus mode, filter distractions, and create a peaceful digital environment.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-white/20 bg-white/20 backdrop-blur-md">
        <p className="text-slate-600">
          AURA — Your emotionally intelligent digital sanctuary.
        </p>
      </footer>
    </div>
  );
}
