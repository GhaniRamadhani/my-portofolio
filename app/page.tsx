import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Ghani Ramadhani | Industrial IoT Developer Portfolio',
  description: 'Official portfolio of Ghani Trie Aqeela Ramadhani. Computer Engineering graduate from IPB University and Industrial IoT Developer specializing in PTC ThingWorx, Laravel, and Embedded Systems.',
  keywords: [
    'Ghani Ramadhani', 
    'Ghani Trie Aqeela Ramadhani', 
    'Ghani Trie Aqeela Ramadhani IPB', 
    'IoT Developer Intern', 
    'Portofolio Ghani Ramadhani'
  ],
  authors: [{ name: 'Ghani Trie Aqeela Ramadhani' }],
  openGraph: {
    title: 'Ghani Ramadhani | Industrial IoT Portfolio',
    description: 'Explore industrial monitoring solutions, full-stack dashboards, and IoT architectures built by Ghani Ramadhani.',
    url: 'https://ghani-portfolio.vercel.app', // Ganti dengan domain custom Anda jika sudah diubah
    siteName: 'Ghani Ramadhani Portfolio',
    type: 'profile',
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 scroll-smooth relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM6 48c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM30 24c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM6 0c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM54 0c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z' fill='%232563eb' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
        </div>
        <div className="absolute top-[10%] left-[5%] w-12 h-12 border-4 border-blue-200/30 rounded-xl rotate-12 animate-bounce transition-all duration-[5000ms]"></div>
        <div className="absolute top-[60%] right-[10%] w-20 h-20 border-4 border-slate-200/40 rounded-full animate-pulse"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-extrabold text-xl tracking-tighter text-blue-600 uppercase">
            Ghani Ramadhani <span className="text-black text-md ml-2 font-black">| PORTFOLIO</span>
          </span>
          <div className="hidden md:flex gap-8 text-xs font-bold text-slate-900 uppercase tracking-widest">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#publications" className="hover:text-blue-600 transition">Publications</a>
            <a href="#activities" className="hover:text-blue-600 transition">Activities</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO / PROFILE SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto bg-transparent relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-64 md:w-64 md:h-64 relative flex-shrink-0">
            <div className="w-full h-full bg-blue-100 rounded-3xl rotate-3 absolute inset-0 -z-10 border-2 border-blue-200 animate-pulse"></div>
            <div className="w-full h-full bg-slate-200 rounded-3xl overflow-hidden border-2 border-white shadow-xl">
              <img src="/images/profile/profile.JPG" alt="Ghani Trie Aqeela Ramadhani" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase leading-tight">
              Ghani Trie Aqeela Ramadhani
            </h1>
            <p className="text-lg font-bold text-slate-500 uppercase tracking-widest mt-2">
              <span className="text-blue-600 italic">IoT & IT Enthusiast |</span> <br className="md:hidden" /> Computer Engineering
            </p>
            <div className="mt-6 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
              <h2 className="text-sm font-black text-blue-600 uppercase mb-2">Professional Summary</h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                Computer Engineering graduate from IPB University with a 3.76 GPA, currently excelling as an <strong>
                IoT Developer Intern at PT Mitra Integrasi Informatika.</strong> Proficient in the <strong>PTC ThingWorx ecosystem,</strong>  where I actively engineer server-side Services using JavaScript, design interactive Mashups, and manage database integrity with 
                PostgreSQL to enhance industrial monitoring. Previously, at <strong>PT IoT Kreasi Indonesia,</strong> I demonstrated technical 
                precision by conducting quality assurance on 1,000+ sensor units and optimizing LoRa gateway protocols.
                I am skilled at bridging the gap between client operational needs and technical execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKING EXPERIENCE SECTION --- */}
      <section id="experience" className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Working Experience</h2>
          <div className="space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-blue-600 font-bold text-xs">DEC 2025 - JUNE 2026</span>
                <h3 className="text-2xl font-black mt-1 uppercase">PT Mitra Integrasi Informatika</h3>
                <p className="font-bold text-slate-500 mb-6 uppercase text-sm tracking-widest">IoT Developer Intern</p>
                <ul className="text-sm text-slate-600 space-y-3 list-disc ml-5 text-justify">
                  <li>Maintained IoT dashboards and fixed client bugs to ensure smooth data monitoring.</li>
                  <li>Built ThingWorx dashboard pages for industrial PLC machines, including Login, Shift, and OEE charts</li>
                  <li>Wrote JavaScript for server-side logic and managed PostgreSQL database tables via Navicat.</li>
                  <li>Took notes in client meetings to list technical requirements and coordinate tasks with mentors</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden border-2 border-white shadow-lg">
                  <img src="/images/work/mii/mii1.jpeg" alt="Dashboard Monitoring" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden border-2 border-white shadow-lg">
                  <img src="/images/work/mii/mii2.jpeg" alt="Me in Work" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-blue-600 font-bold text-xs">AUG 2024 - DEC 2024</span>
                <h3 className="text-2xl font-black mt-1 uppercase">PT IoT Kreasi Indonesia</h3>
                <p className="font-bold text-slate-500 mb-6 uppercase text-sm tracking-widest">R&D Intern</p>
                <ul className="text-sm text-slate-600 space-y-3 list-disc ml-5 text-justify">
                  <li>Executed quality assurance testing on 1,000+ Cyble Non-Magnetic sensor units, identifying critical defects.</li>
                  <li>Configured and optimized LoRa Kerlink Gateway protocols for industrial IoT applications.</li>
                  <li>Designed and prototyped an end-to-end gas leak detection system using MQ-6 sensors and ESP32.</li>
                  <li>Documented technical specifications and troubleshooting guides for IoT integration.</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden border-2 border-white shadow-lg">
                  <img src="/images/work/iki/iki1.jpg" alt="QA Testing" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden border-2 border-white shadow-lg">
                  <img src="/images/work/iki/iki2.jpg" alt="Team IoT Kreasi" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter text-white">Project Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            {/* FINAL PROJECT */}
            <div className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col h-[450px]">
              <div className="h-56 w-full overflow-hidden relative flex-shrink-0">
                <img src="/images/project/final-project/fp1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Final Project" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Dec 2024 - Jul 2025</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black uppercase leading-tight min-h-[3rem] text-white group-hover:text-blue-400 transition-colors">IoT Gas Leak Detection</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase mt-2 mb-4 line-clamp-3 leading-relaxed">
                  Development of IoT-Based Gas Leak Detection with MQ-6 Sensor and Telegram Notification for Security
                </p>
                <div className="mt-auto space-y-6">
                  <Link href="/projects/finalproject">                  
                    <button className="w-full py-3 bg-white text-slate-900 text-xs font-black uppercase rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl active:scale-95">
                      View Project Details
                    </button>
                  </Link>        
                </div>
              </div>
            </div>
            {/* SIMONAIR */}
            <div className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col h-[450px]">
              <div className="h-56 w-full overflow-hidden relative flex-shrink-0">
                <img src="/images/project/simonair-project/s1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Simonair Project" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Jan 2024 - Jul 2024</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black uppercase leading-tight min-h-[3rem] text-white group-hover:text-blue-400 transition-colors">SIMONAIR 3.0 – Water Quality</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase mt-2 mb-4 line-clamp-3 leading-relaxed">
                  IoT Based Multi-monitoring water quality for Red Tilapia, Silver Arowana, and Discus Fish Species
                </p>
                <div className="mt-auto space-y-6">
                  <Link href="/projects/simonairproject">
                    <button className="w-full py-3 bg-white text-slate-900 text-xs font-black uppercase rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl active:scale-95">
                      View Project Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* CURUG PROJECT */}
            <div className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col h-[450px]">
              <div className="h-56 w-full overflow-hidden relative flex-shrink-0">
                <img src="/images/project/curug-project/c1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Curug Project" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Aug 2023 - Dec 2023</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black uppercase leading-tight min-h-[3rem] text-white group-hover:text-blue-400 transition-colors">Automatic Lighting & Voice</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase mt-2 mb-4 line-clamp-3 leading-relaxed">
                  Voice Recording and Motion-Based Automatic Lighting Solution for Curug Cikoneng Hospitality
                </p>
                <div className="mt-auto space-y-6">
                  <Link href="/projects/curugproject">
                    <button className="w-full py-3 bg-white text-slate-900 text-xs font-black uppercase rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl active:scale-95">
                      View Project Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- PUBLICATIONS SECTION --- */}
      <section id="publications" className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Publications</h2>
            <div className="h-[2px] flex-1 bg-slate-100 ml-4"></div>          
          </div>
          <div className="space-y-6">
            <div className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-600 hover:bg-white transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest italic">14 July, 2025</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Final Project</span>
                  </div>
                  <a href="https://repository.ipb.ac.id/handle/123456789/163998" target="_blank" rel="noopener noreferrer" className="block group-hover:text-blue-600 transition-colors">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
                      Development of IoT-Based Gas Leak Detection Tool with MQ-6 Sensor and Telegram Notification for Security
                    </h3>
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <a href="https://repository.ipb.ac.id/handle/123456789/163998" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-600 hover:bg-white transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest italic">28 April, 2024</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Journal</span>
                  </div>
                  <a href="https://pdfs.semanticscholar.org/18de/a3a572d79fef628148a690b9ba08b2ed7fe3.pdf" target="_blank" rel="noopener noreferrer" className="block group-hover:text-blue-600 transition-colors">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
                      SOUND RECORD“SELAMAT DATANG DI CURUG CIKONENG” DAN LAMPU OTOMATIS BERBASIS MOTION GESTURE
                    </h3>
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <a href="https://pdfs.semanticscholar.org/18de/a3a572d79fef628148a690b9ba08b2ed7fe3.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-600 hover:bg-white transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest italic">09 June, 2024</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Journal</span>
                  </div>
                  <a href="https://journal.pubmedia.id/index.php/pjise/article/view/2613" target="_blank" rel="noopener noreferrer" className="block group-hover:text-blue-600 transition-colors">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
                      Analisis Kerentanan WordPress dengan WPScan dan Teknik Mitigasi
                    </h3>
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <a href="https://journal.pubmedia.id/index.php/pjise/article/view/2613" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-12 bg-slate-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter text-center">Skills Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors text-blue-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
                </svg>
              </div>
              <h3 className="text-white font-black uppercase text-xs mb-4 tracking-widest">IoT & Industrial</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['PTC ThingWorx', 'ESP32', 'Node-RED', 'MQTT', 'Arduino IDE'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-slate-900/50 text-[9px] text-slate-400 border border-slate-700 rounded font-bold uppercase italic tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors text-blue-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-white font-black uppercase text-xs mb-4 tracking-widest">Web Development</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Laravel', 'JavaScript', 'Node.js', 'PostgreSQL', 'MySQL', 'PHP', 'RESTful API','HTML CSS','Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-slate-900/50 text-[9px] text-slate-400 border border-slate-700 rounded font-bold uppercase italic tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors text-blue-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.5 1.5" /><path d="M14 11l7-7" />
                </svg>
              </div>
              <h3 className="text-white font-black uppercase text-xs mb-4 tracking-widest">Design</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Figma', 'Canva', 'MS Office'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-slate-900/50 text-[9px] text-slate-400 border border-slate-700 rounded font-bold uppercase italic tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACTIVITIES SECTION --- */}
      <section id="activities" className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Recent Activities</h2>
            <div className="h-[2px] flex-1 bg-slate-100 ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <a href="https://www.linkedin.com/learning/certificates/7c2ce87402a8b53d92abee369d6bc809ceffc1e5a19b7c855d202e3c98f74f21" target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-600 hover:bg-white transition-all duration-300 flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0 flex items-center justify-center w-12 h-12">
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" stroke="#155dfc"><path d="M0 0h256v256H0V0z" fill="#155dfc"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></svg>
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase italic">License</span>
                <h3 className="text-md font-black uppercase tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">Learning the JavaScript Language</h3>
                <p className="text-xs text-slate-500 font-medium">Linkedin Learning by Joe Chellman</p>
                <div className="pt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider underline flex items-center gap-1">
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/learning/certificates/55e779a01ec2e61aa3a9ecf42a9f73865f7e9f44da12cbab8d2d07a9a7bf6008" target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-600 hover:bg-white transition-all duration-300 flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z" fill="#155dfc"/><path d="M6.82154 14.1563C5.81185 14.1563 5 14.9865 5 16.0035C5 17.0205 5.81867 17.8507 6.82154 17.8507C7.82442 17.8507 8.64309 17.0205 8.64309 16.0035C8.64309 14.9795 7.82442 14.1563 6.82154 14.1563ZM10.7785 16.0035C10.7785 14.177 11.6722 12.565 13.0434 11.5896L11.7131 9.32725C10.1167 10.4065 8.93645 12.06 8.43842 13.9902C9.01149 14.4676 9.37989 15.194 9.37989 16.0035C9.37989 16.8129 9.01149 17.5393 8.43842 18.0167C8.92962 19.9469 10.1167 21.6004 11.7131 22.6797L13.0434 20.4174C11.6722 19.4419 10.7785 17.8299 10.7785 16.0035ZM16.0998 10.6071C18.8833 10.6071 21.1619 12.7657 21.4007 15.5261L24 15.4846C23.8704 13.4506 22.9971 11.6241 21.6463 10.282C20.9504 10.5449 20.1522 10.5034 19.4632 10.1021C18.7673 9.69393 18.3375 9.01593 18.2147 8.26875C17.5393 8.08195 16.8298 7.97817 16.0998 7.97817C14.8377 7.97817 13.6506 8.27566 12.5932 8.80838L13.8621 11.1053C14.5375 10.787 15.3016 10.6071 16.0998 10.6071ZM16.0998 21.3998C15.3016 21.3998 14.5375 21.2199 13.8553 20.9017L12.5864 23.1985C13.6438 23.7313 14.8377 24.0287 16.093 24.0287C16.823 24.0287 17.5325 23.925 18.2079 23.7382C18.3239 22.9979 18.7605 22.313 19.4564 21.9048C20.1454 21.4966 20.9504 21.462 21.6395 21.7249C22.9835 20.3828 23.8636 18.5563 23.9932 16.5223L21.3939 16.4808C21.1619 19.2343 18.8833 21.3998 16.0998 21.3998ZM19.8248 9.45178C20.698 9.96374 21.8101 9.65933 22.3149 8.77378C22.8197 7.88824 22.5196 6.76054 21.6463 6.24859C20.7731 5.73663 19.661 6.04104 19.1562 6.92659C18.6582 7.81213 18.9583 8.93983 19.8248 9.45178ZM19.8316 22.5482C18.9583 23.0602 18.665 24.1879 19.163 25.0734C19.6679 25.959 20.7799 26.2634 21.6531 25.7514C22.5264 25.2395 22.8197 24.1118 22.3217 23.2262C21.8101 22.3476 20.698 22.0432 19.8316 22.5482Z" fill="white"/></svg>
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase italic">License</span>
                <h3 className="text-md font-black uppercase tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">Learning Linux Command Line</h3>
                <p className="text-xs text-slate-500 font-medium">Linkedin Learning by Scott Simpson</p>
                <div className="pt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider underline flex items-center gap-1">
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/learning/certificates/4a7aa25e487073f689d3fea4352a6a996d28c9c0b2261b8cbdc6f85c47238d40" target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-600 hover:bg-white transition-all duration-300 flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z" fill="#155dfc"/><path d="M6.82154 14.1563C5.81185 14.1563 5 14.9865 5 16.0035C5 17.0205 5.81867 17.8507 6.82154 17.8507C7.82442 17.8507 8.64309 17.0205 8.64309 16.0035C8.64309 14.9795 7.82442 14.1563 6.82154 14.1563ZM10.7785 16.0035C10.7785 14.177 11.6722 12.565 13.0434 11.5896L11.7131 9.32725C10.1167 10.4065 8.93645 12.06 8.43842 13.9902C9.01149 14.4676 9.37989 15.194 9.37989 16.0035C9.37989 16.8129 9.01149 17.5393 8.43842 18.0167C8.92962 19.9469 10.1167 21.6004 11.7131 22.6797L13.0434 20.4174C11.6722 19.4419 10.7785 17.8299 10.7785 16.0035ZM16.0998 10.6071C18.8833 10.6071 21.1619 12.7657 21.4007 15.5261L24 15.4846C23.8704 13.4506 22.9971 11.6241 21.6463 10.282C20.9504 10.5449 20.1522 10.5034 19.4632 10.1021C18.7673 9.69393 18.3375 9.01593 18.2147 8.26875C17.5393 8.08195 16.8298 7.97817 16.0998 7.97817C14.8377 7.97817 13.6506 8.27566 12.5932 8.80838L13.8621 11.1053C14.5375 10.787 15.3016 10.6071 16.0998 10.6071ZM16.0998 21.3998C15.3016 21.3998 14.5375 21.2199 13.8553 20.9017L12.5864 23.1985C13.6438 23.7313 14.8377 24.0287 16.093 24.0287C16.823 24.0287 17.5325 23.925 18.2079 23.7382C18.3239 22.9979 18.7605 22.313 19.4564 21.9048C20.1454 21.4966 20.9504 21.462 21.6395 21.7249C22.9835 20.3828 23.8636 18.5563 23.9932 16.5223L21.3939 16.4808C21.1619 19.2343 18.8833 21.3998 16.0998 21.3998ZM19.8248 9.45178C20.698 9.96374 21.8101 9.65933 22.3149 8.77378C22.8197 7.88824 22.5196 6.76054 21.6463 6.24859C20.7731 5.73663 19.661 6.04104 19.1562 6.92659C18.6582 7.81213 18.9583 8.93983 19.8248 9.45178ZM19.8316 22.5482C18.9583 23.0602 18.665 24.1879 19.163 25.0734C19.6679 25.959 20.7799 26.2634 21.6531 25.7514C22.5264 25.2395 22.8197 24.1118 22.3217 23.2262Z" fill="white"/></svg>
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase italic">License</span>
                <h3 className="text-md font-black uppercase tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">Introduction to Linux</h3>
                <p className="text-xs text-slate-500 font-medium">Linkedin Learning by Scott Simpson</p>
                <div className="pt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider underline flex items-center gap-1">
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 bg-slate-900 px-6 border-t border-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-white font-black uppercase tracking-tighter mb-4">Contact Me</h2>
          <p className="text-slate-500 mb-12 font-medium">
            I'm Always Available for any Open Collaboration or Discussion in IoT Projects, Development, or any other Technologies.<br /> Feel Free to contact Me
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="mailto:ghanitrie1211@gmail.com" className="shadow-md group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-600 transition-all duration-300">
              <div className="flex justify-center mb-4 text-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <div className="uppercase font-black text-xs text-slate-900 group-hover:text-white transition-colors">Google Mail</div>
            </a>
            <a href="https://www.linkedin.com/in/ghani-ramadhani/" target="_blank" className="shadow-md group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-700 transition-all duration-300">
              <div className="flex justify-center mb-4 text-blue-700 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div className="uppercase font-black text-xs text-slate-900 group-hover:text-white transition-colors">LinkedIn</div>
            </a>
            <a href="https://wa.me/6285179843562" target="_blank" className="shadow-md group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-green-600 transition-all duration-300">
              <div className="flex justify-center mb-4 text-green-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.883 1.027 4.009 1.57 6.173 1.57h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <div className="uppercase font-black text-xs text-slate-900 group-hover:text-white transition-colors">WhatsApp</div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-slate-900 text-white border-t border-slate-800 text-center">
        <p className="px-48 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
          © 2026 Ghani Ramadhani Portofolio
        </p>
      </footer>
      
    </div>
  );
}