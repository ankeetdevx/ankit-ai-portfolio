export default function PortfolioWebsite() {
  const projects = [
    {
      title: "AI Resume Analyzer",
      desc: "Smart AI-powered resume analysis platform with ATS scoring, keyword matching and interview suggestions.",
      tech: ["React", "OpenAI", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Tech Hiring Dashboard",
      desc: "Modern recruitment management dashboard for HR teams with live analytics and candidate tracking.",
      tech: ["Next.js", "MongoDB", "Express", "Chart.js"]
    },
    {
      title: "Smart E-Commerce Platform",
      desc: "Responsive e-commerce website with AI product recommendations and secure payment integration.",
      tech: ["React", "Firebase", "Stripe", "AI APIs"]
    },
    {
      title: "AI Voice Assistant",
      desc: "Real-time AI assistant with voice interaction to guide recruiters about skills and projects.",
      tech: ["OpenAI", "Speech Recognition", "Text To Speech"]
    }
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "SQL",
    "Data Analysis",
    "Data Science",
    "Machine Learning",
    "Power BI",
    "Excel",
    "Tally ERP",
    "Accounting",
    "AI Integration",
    "UI/UX Design",
    "Responsive Design",
    "Git & GitHub",
    "REST APIs",
    "OpenAI API"
  ];

  const speakMessage = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  };

  const handleAIResponse = () => {
    const text = "Hello recruiter. I am Ankit Kumar Singh. I am skilled in web development, data science, AI integration and accounting. I build modern responsive websites with advanced UI and real time AI features.";
    speakMessage(text);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            ANKIT.
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-sm tracking-wide">
              🚀 Web Developer • AI Enthusiast • Data Analyst
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Hi, I'm
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Ankit Kumar Singh
                </span>
              </h1>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
                Passionate full-stack developer and AI enthusiast creating modern,
                futuristic and highly interactive digital experiences with advanced
                animations, voice AI integration and premium UI/UX.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => speakMessage('Welcome to my AI powered portfolio website.')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/30"
              >
                🎤 Voice Intro
              </button>

              <button
                onClick={handleAIResponse}
                className="px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-xl hover:bg-white/10 transition duration-300"
              >
                🤖 Ask AI About Me
              </button>
            </div>

            <div className="flex gap-8 pt-4 text-gray-400 text-sm">
              <div>
                <h3 className="text-3xl font-bold text-white">15+</h3>
                <p>Skills</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">4+</h3>
                <p>Live Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">AI</h3>
                <p>Powered</p>
              </div>
            </div>
          </div>

          {/* Glass Card */}
          <div className="relative">
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[40px] p-8 shadow-2xl shadow-cyan-500/20 hover:scale-[1.02] transition duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold">Profile Overview</h2>
                    <p className="text-gray-400 mt-1">AI Integrated Portfolio</p>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-3xl font-bold">
                    AK
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-2xl p-4 border border-white/10">
                    <h3 className="text-gray-400 text-sm">Education</h3>
                    <p className="mt-2 font-semibold">BA English Hons.</p>
                  </div>

                  <div className="bg-black/30 rounded-2xl p-4 border border-white/10">
                    <h3 className="text-gray-400 text-sm">Experience</h3>
                    <p className="mt-2 font-semibold">Web & AI Projects</p>
                  </div>

                  <div className="bg-black/30 rounded-2xl p-4 border border-white/10">
                    <h3 className="text-gray-400 text-sm">Focus</h3>
                    <p className="mt-2 font-semibold">UI / UX & AI</p>
                  </div>

                  <div className="bg-black/30 rounded-2xl p-4 border border-white/10">
                    <h3 className="text-gray-400 text-sm">Availability</h3>
                    <p className="mt-2 font-semibold">Open To Work</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-3xl p-6">
                  <h3 className="text-xl font-bold">🔥 AI Recruiter Assistant</h3>
                  <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                    Interactive AI chatbot with voice support that explains skills,
                    certifications, projects and technical abilities in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">About Me</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-500">
              <h3 className="text-2xl font-bold mb-6">Education</h3>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">Matriculation - CBSE</h4>
                  <p>75%</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Intermediate - BSEB</h4>
                  <p>53.8%</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Currently Pursuing</h4>
                  <p>BA English Hons.</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-500">
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>

              <div className="space-y-4">
                {[
                  'Data Scientist',
                  'Data Analyst',
                  'Web Development',
                  'Accounting in Tally',
                  'AI Tools & Automation'
                ].map((cert, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 rounded-2xl bg-black/30 border border-white/10 hover:border-cyan-400 transition"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">Skills & Technologies</h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Modern technologies and tools used for building scalable,
              interactive and AI-powered applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 text-center hover:scale-105 hover:border-cyan-400 transition duration-300"
              >
                <div className="text-lg font-semibold group-hover:text-cyan-400 transition">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">Featured Projects</h2>
            <p className="text-gray-400 mt-6">
              Real-world projects focused on AI, tech recruitment, automation and web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-8 hover:-translate-y-3 hover:border-cyan-400 transition duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-2xl">
                    🚀
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-black/30 border border-white/10 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-28 px-6 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 backdrop-blur-2xl bg-white/5 p-10 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>

            <div className="relative z-10">
              <div className="text-7xl mb-6">🤖</div>
              <h2 className="text-5xl font-black">AI Recruiter Assistant</h2>

              <p className="text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed text-lg">
                This portfolio includes a futuristic AI assistant that can answer recruiter questions,
                explain projects, guide employers through technical skills and even speak with real-time voice responses.
              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-10">
                <button
                  onClick={() => speakMessage('I specialize in AI integration, web development, UI UX design and data analysis.')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 font-semibold"
                >
                  🎙️ Hear My Skills
                </button>

                <button
                  onClick={() => speakMessage('I have worked on AI resume analyzers, recruitment dashboards and modern responsive websites.')}
                  className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
                >
                  📂 Explain Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black">Let's Connect</h2>
          <p className="text-gray-400 mt-6 text-lg">
            Ready to collaborate on modern tech projects and AI-powered solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-gray-400 mt-2">9241930806</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-400 mt-2 break-all">codexankeet@gmail.com</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold">Status</h3>
              <p className="text-gray-400 mt-2">Open For Opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        © 2026 Ankit Kumar Singh • AI Powered Portfolio Website
      </footer>
    </div>
  );
}
