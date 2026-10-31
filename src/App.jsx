import React, { useEffect, useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    // Smooth live progress bar counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 3;
      });
    }, 40);

    // Phase 1: Trigger expand and blur transition
    const expandTimer = setTimeout(() => {
      setIsExpanding(true);
    }, 2500);

    // Phase 2: Complete loading state
    const doneTimer = setTimeout(() => {
      setLoading(false);
    }, 3300);

    const linkAos = document.createElement('link');
    linkAos.rel = 'stylesheet';
    linkAos.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(linkAos);

    const scriptAos = document.createElement('script');
    scriptAos.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    scriptAos.async = true;
    scriptAos.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: false,
          easing: 'ease-out-cubic',
        });
      }
    };
    document.body.appendChild(scriptAos);

    return () => {
      clearInterval(interval);
      clearTimeout(expandTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const projects = [
    {
      id: 1,
      category: 'Digital Marketing',
      title: 'Marketing Strategy & Ad Copy Concept',
      subtitle: 'Digital Marketing Campaign Mockup',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      badge: 'Digital Marketing'
    },
    {
      id: 2,
      category: 'Graphic Design',
      title: 'Visual Branding & Icon Design',
      subtitle: 'Graphic Design Asset Concept',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
      badge: 'Graphic Design'
    },
    {
      id: 3,
      category: 'Web Development',
      title: 'Responsive Portfolio & Web UI Layout',
      subtitle: 'React & Tailwind Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
      badge: 'Web Development'
    },
    {
      id: 4,
      category: 'MS Office',
      title: 'Business Data Analysis & Presentation',
      subtitle: 'MS Excel & PowerPoint Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
      badge: 'MS Office'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen selection:bg-sky-400 selection:text-black relative overflow-x-hidden">
      
      {/* ULTRA-ATTRACTIVE CYBERPUNK LUXURY PRELOADER */}
      {loading && (
        <div 
          className={`fixed inset-0 z-[100] bg-slate-950 flex flex-col justify-center items-center px-6 transition-all duration-1000 ease-in-out ${
            isExpanding ? 'opacity-0 scale-125 pointer-events-none backdrop-blur-3xl' : 'opacity-100 scale-100'
          }`}
        >
          {/* Cyberpunk Grid Background & Deep Glow Orbs */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>
          <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1.2s' }}></div>

          <div className="text-center space-y-8 max-w-md w-full relative z-10">
            
            {/* Multi-Layer Spinning Tech Rings & Glowing Emblem */}
            <div className="relative flex justify-center items-center">
              <div className="w-48 h-48 rounded-full border border-sky-500/20 animate-spin-reverse absolute"></div>
              <div className="w-40 h-40 rounded-full border-2 border-dashed border-sky-400/60 animate-spin-slow absolute"></div>
              
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-blue-600 via-sky-400 to-cyan-300 p-1.5 shadow-2xl shadow-blue-500/60 flex items-center justify-center animate-float">
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center border border-sky-400/50 shadow-inner glow-animation">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">MA</span>
                </div>
              </div>
            </div>
            
            {/* Glowing Typography & Live Percentage */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-lg">
                MUHAMMAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">ANS</span>
              </h2>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
                <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                  SYSTEM INITIALIZING... <strong className="text-sky-400 font-mono font-bold">{progress}%</strong>
                </span>
              </div>
            </div>

            {/* Glowing Smooth Working Progress Bar with Shine Effect */}
            <div className="w-full max-w-xs mx-auto h-3 bg-slate-900/90 rounded-full overflow-hidden border border-slate-800 shadow-inner p-0.5 relative">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 rounded-full transition-all duration-100 shadow-lg shadow-sky-400/60 relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Animated Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Header */}
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 transition-all duration-1000 ${loading ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'}`}>
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-sky-400 text-white font-black rounded-xl flex items-center justify-center text-lg shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              MA
            </div>
            <span className="font-bold text-white text-lg tracking-tight hidden sm:inline-block group-hover:text-sky-300 transition-colors">Muhammad Ans</span>
          </a>

          <nav className="hidden md:flex items-center space-x-1 bg-slate-950/60 p-1 rounded-full border border-slate-800 text-sm font-medium">
            <a href="#home" className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition">Home</a>
            <a href="#about" className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition">About</a>
            <a href="#skills" className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition">Skills</a>
            <a href="#work" className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition">Work</a>
            <a href="#education" className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition">Education</a>
          </nav>

          <a href="#contact" className="bg-gradient-to-r from-blue-600 to-sky-400 hover:opacity-90 text-white font-extrabold px-5 py-2 rounded-full text-sm transition shadow-lg shadow-blue-500/25 hover:scale-105 transform duration-300">
            Let's talk
          </a>
        </div>
      </header>

      {/* HERO SECTION WITH SMOOTH MERGED REVEAL */}
      <section id="home" className={`pt-36 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center relative z-10 transition-all duration-1000 ease-out ${loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div data-aos="fade-right">
            <span className="inline-block text-sky-400 font-semibold tracking-wider text-xs uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 animate-bounce">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl sm:text-6xl font-black mt-4 leading-tight tracking-tight" data-aos="fade-up" data-aos-delay="200">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300">Muhammad Ans</span>
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl" data-aos="fade-up" data-aos-delay="400">
              Honest, confident, and highly driven professional skilled in Front-End Web Development, Digital Marketing, Graphics Design, and Business Growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="600">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-sky-400 hover:opacity-90 text-white font-bold px-6 py-3 rounded-full transition shadow-lg shadow-blue-500/25 hover:scale-105 transform duration-300">
                Get In Touch
              </a>
              <a href="#skills" className="border border-slate-800 hover:border-sky-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-full transition hover:scale-105 transform duration-300">
                Explore Skills
              </a>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="300" className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 via-sky-400 to-cyan-300 shadow-2xl shadow-blue-500/25 animate-pulse">
              <img 
                src="/images/ans-profile.jpg" 
                alt="Muhammad Ans" 
                className="w-full h-full object-cover rounded-full border-4 border-slate-950 transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 border-t border-slate-800 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div data-aos="fade-up" className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[2px] bg-sky-400"></div>
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">ABOUT</span>
          </div>

          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            A little <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">about me.</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6" data-aos="fade-right" data-aos-delay="300">
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
                I am an enthusiastic, early-career creative professional skilled in <span className="text-sky-400 font-bold">Front-End Web Development</span>, with a strong interest in <span className="text-sky-400 font-bold">graphic design</span> and <span className="text-sky-400 font-bold">digital marketing</span>.
              </p>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                I am a <span className="text-sky-400 font-bold">quick learner</span> who values clear communication, teamwork, and constructive feedback. I am looking for my first professional opportunity, where I can take on challenges, keep building practical skills, and contribute creatively to digital projects.
              </p>
            </div>

            <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="400">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative min-h-[350px] flex items-center justify-center overflow-hidden shadow-xl">
                <div className="absolute w-80 h-80 border border-slate-800 rounded-full animate-spin"></div>
                <div className="absolute w-52 h-52 border border-slate-800/80 rounded-full animate-pulse"></div>

                <div className="relative z-10 w-24 h-24 bg-gradient-to-r from-blue-600 to-sky-400 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-2xl shadow-blue-500/30 transform hover:scale-110 transition-transform duration-300">
                  MA
                </div>

                <div className="absolute top-10 left-8 bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-20 animate-bounce">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span className="text-xs text-slate-300 font-semibold">Quick learner</span>
                </div>

                <div className="absolute bottom-14 right-8 bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-20 animate-bounce" style={{ animationDelay: '1s' }}>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-xs text-slate-300 font-semibold">Team player</span>
                </div>

                <div className="absolute bottom-6 left-10 bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-20 animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <span className="w-2 h-2 rounded-full bg-cyan-300"></span>
                  <span className="text-xs text-slate-300 font-semibold">Open to feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 border-t border-slate-800 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div data-aos="fade-up" className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[2px] bg-sky-400"></div>
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">SKILLS</span>
          </div>

          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Skills and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">strengths.</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="mt-3 text-slate-400 text-lg">The skills I am building and the strengths I bring to a team.</p>

          <div className="mt-12">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6" data-aos="fade-right">CORE SKILLS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div data-aos="flip-left" data-aos-delay="100" className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-12 h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center text-sky-400 text-xl mb-4 font-bold">
                  📢
                </div>
                <h4 className="text-xl font-bold text-white">Digital Marketing</h4>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">Learning how ideas reach the right audience online effectively.</p>
              </div>

              <div data-aos="flip-left" data-aos-delay="200" className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-sky-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10">
                <div className="w-12 h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center text-blue-400 text-xl mb-4 font-bold">
                  🎨
                </div>
                <h4 className="text-xl font-bold text-white">Graphic Design</h4>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">Learning to turn messages into clear, eye-catching visuals.</p>
              </div>

              <div data-aos="flip-left" data-aos-delay="300" className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-12 h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center text-sky-400 text-xl mb-4 font-bold">
                  &lt;/&gt;
                </div>
                <h4 className="text-xl font-bold text-white">Web Development</h4>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">Learning to build clean, modern, and responsive web layouts.</p>
              </div>

              <div data-aos="flip-left" data-aos-delay="400" className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-sky-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10">
                <div className="w-12 h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center text-blue-400 text-xl mb-4 font-bold">
                  📄
                </div>
                <h4 className="text-xl font-bold text-white">MS Office</h4>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">Everyday documents, spreadsheets, and presentation workflows.</p>
              </div>

            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6" data-aos="fade-right">PROFESSIONAL STRENGTHS</h3>
            <div className="flex flex-wrap gap-3" data-aos="fade-up">
              {['Teamwork', 'Critical Thinking', 'Management', 'Hardworking', 'Responsible', 'Open to Feedback', 'Takes on Challenges'].map((item, idx) => (
                <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 50} className="px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-full flex items-center space-x-2 text-sm font-medium text-slate-200 hover:border-sky-400 transition-colors duration-300">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="py-24 border-t border-slate-800 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div data-aos="fade-up" className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[2px] bg-sky-400"></div>
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">SELECTED WORK</span>
          </div>

          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Practice <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">concepts.</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="mt-3 text-slate-400 text-lg max-w-2xl">These are practice exercises and sample concepts, not client projects. Each one matches a skill I am building.</p>

          <div className="mt-8 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="300">
            {['All', 'Digital Marketing', 'Graphic Design', 'Web Development', 'MS Office'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-sky-400 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-sky-400/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id}
                data-aos="zoom-in-up"
                data-aos-delay={idx * 150}
                className="group bg-slate-900 p-5 rounded-3xl border border-slate-800 hover:border-sky-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="h-64 rounded-2xl overflow-hidden relative border border-slate-800 bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-sky-300 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-400/30">
                      {project.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-xs font-semibold text-white bg-blue-600/90 px-4 py-2 rounded-xl border border-blue-400/40">
                      View Concept
                    </span>
                  </div>
                </div>

                <div className="mt-5 px-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 border-t border-slate-800 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Where I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">learning.</span>
          </h2>

          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-4 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div data-aos="fade-right" data-aos-delay="100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center text-sky-400 text-xs font-bold shadow-lg animate-pulse">
                    ✓
                  </div>
                  <span className="text-xs font-bold text-sky-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    
                  </span>
                </div>
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-blue-500/40 transition hover:-translate-y-1">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center text-sky-400 text-xl mb-4 font-bold">
                    🏫
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">MATRICULATION</span>
                  <h4 className="text-2xl font-bold text-white mt-1">Matric (Bio Science)</h4>
                  <p className="text-slate-400 text-sm mt-2">Board of Intermediate & Secondary Education, Lahore</p>
                </div>
              </div>

              <div data-aos="fade-left" data-aos-delay="200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center text-blue-400 text-xs font-bold shadow-lg animate-pulse">
                    ✓
                  </div>
                  <span className="text-xs font-bold text-blue-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                    
                  </span>
                </div>
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-sky-400/40 transition hover:-translate-y-1">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center text-blue-400 text-xl mb-4 font-bold">
                    🎓
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">INTERMEDIATE</span>
                  <h4 className="text-2xl font-bold text-white mt-1">Intermediate F.A</h4>
                  <p className="text-slate-400 text-sm mt-2">Board of Intermediate & Secondary Education, Lahore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 border-t border-slate-800 bg-slate-900 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center" data-aos="fade-up">
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">GET IN TOUCH</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">Let's build something <span className="text-sky-400">great together.</span></h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right" data-aos-delay="100" className="space-y-4">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-sky-400/40 transition">
                <h4 className="text-sky-400 text-xs font-bold uppercase tracking-wider">Mobile Number</h4>
                <p className="text-lg font-bold text-white mt-1">+92 326-4923950</p>
              </div>
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-blue-400/40 transition">
                <h4 className="text-blue-400 text-xs font-bold uppercase tracking-wider">E-mail</h4>
                <p className="text-lg font-bold text-white mt-1">Ansrajput331@gmail.com</p>
              </div>
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-sky-400/40 transition">
                <h4 className="text-sky-400 text-xs font-bold uppercase tracking-wider">Languages</h4>
                <p className="text-base font-semibold text-white mt-1">Urdu, English, Punjabi</p>
              </div>
            </div>

            <form data-aos="fade-left" data-aos-delay="200" className="space-y-4 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <input type="text" placeholder="Your Name" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-400 text-sm transition" />
              <input type="email" placeholder="Your Email" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-400 text-sm transition" />
              <textarea rows="4" placeholder="Your Message" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-400 text-sm transition"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-sky-400 hover:opacity-90 text-white font-extrabold py-3 rounded-xl transition shadow-lg shadow-blue-500/25 text-sm hover:scale-105 transform duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-slate-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Muhammad Ans. All rights reserved.</p>
      </footer>

    </div>
  );
}
