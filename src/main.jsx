import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Car,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Smartphone,
  Sparkles,
  Sun,
  Tv,
  X,
  Zap
} from "lucide-react";
import "./styles.css";

const resumeUrl = import.meta.env.BASE_URL + "resume.pdf";

const contact = {
  email: "sauravbansal447@gmail.com",
  github: "https://github.com/SauravBansal448?tab=repositories",
  linkedin: "https://www.linkedin.com/in/saurav-bansal/"
};

const skills = {
  "Languages": ["Kotlin", "Core Java"],
  "Android": ["Android SDK", "Jetpack Compose", "KMP / CMP", "Coroutines", "Flow", "LiveData"],
  "Architecture": ["MVVM", "MVI", "MVP", "MVC", "Clean Architecture", "SOLID", "OOPS"],
  "Platforms": ["Android Mobile", "Android TV", "Android Automotive OS"],
  "Data & APIs": ["RoomDB", "SQLite", "Retrofit", "REST", "JSON", "Socket.IO"],
  "Testing & Quality": ["JUnit", "Mockito", "Robolectric", "Unit Testing", "App Profiling", "SonarQube"],
  "DevOps & Tools": ["GitHub", "GitLab", "Bitbucket", "Jenkins", "Gradle", "Android Studio"],
  "Services": ["Firebase", "Google Play Services", "Google Location APIs", "Crashlytics", "Analytics"]
};

const experience = [
  {
    company: "Tech Mahindra Limited",
    role: "Senior Software Engineer",
    period: "Nov 2025 — Present",
    intro:
      "Working on production Android experiences for global telecom products, with an emphasis on self-serve journeys, Wi-Fi optimization, platform integrations and engineering quality.",
    bullets: [
      "Delivered self-serve and Wi-Fi optimization features across MyBell Mobile, Lucky Mobile My Account, Virgin Plus My Account and My PC Mobile (Prepaid).",
      "Integrated external APIs with in-house libraries including NMF-UI, NMF-Chat, NMF-Analytics and NMF-NPS.",
      "Built and leveraged AI agents to automate unit testing, increase code coverage and streamline dependency analysis for version upgrades.",
      "Applied AI-assisted solutions to resolve SonarQube issues such as cognitive complexity and excessive function parameters.",
      "Contributed to release activities, Agile sprints, code reviews, debugging and feasibility studies."
    ]
  },
  {
    company: "TO THE NEW",
    role: "Senior Software Engineer",
    period: "Aug 2022 — Nov 2025",
    intro:
      "Designed and developed Android TV and Android Automotive experiences for global OTT, media and automotive clients, with strong focus on scalability and performance.",
    bullets: [
      "Built custom UI components optimized for DPAD navigation and large-screen experiences.",
      "Astro GO: adapted mobile-first design for Android TV, integrated playback for 100+ channels and 110,000+ VOD assets, and implemented cross-device user profiles.",
      "Astro GO: enhanced search for title, actor, director and channel lookup, optimized for remote input.",
      "Astro GO: improved startup latency, memory usage and Leanback compliance for smoother TV UX.",
      "Tata Play Binge: supported an OTT aggregation app on Android Automotive OS with 30+ integrated platforms, live TV, VOD, universal search, recommendations and watchlist.",
      "Mutualink LNK 360: built features for a secure multimedia PTT platform and integrated WebRTC for live audio/video plus Google Maps for real-time location sharing."
    ]
  },
  {
    company: "Mobcoder LLC",
    role: "SDE 2",
    period: "Mar 2020 — Jul 2022",
    intro:
      "Created scalable Android applications using Kotlin and MVVM, including real-time communication, payments and consumer-facing experiences.",
    bullets: [
      "Built CricRadio with live commentary, fast scores, real-time socket updates, multilingual speech commentary, floating PIN views and live chat.",
      "Implemented cricket analytics visualizations including run rate, wagon wheel, partnerships and odds using MP Chart.",
      "Developed Xagon UPSC Flashcards with gamified revision flows, Google OAuth 2.0 and Razorpay payments.",
      "Managed requirements gathering, testing and end-to-end delivery."
    ]
  },
  {
    company: "WebMobril Technologies",
    role: "Android Developer",
    period: "May 2019 — Feb 2020",
    intro:
      "Built Android applications from scratch with REST API integration, social login, payments and real-time location workflows.",
    bullets: [
      "TM Driver / TacoMar: built food ordering and driver applications with real-time GPS tracking.",
      "Integrated Stripe and Braintree payments plus Google login and order management workflows.",
      "Droom - Shoppers Community: built product review and social features with Authorize.net payment integration."
    ]
  }
];

const projects = [
  {
    icon: Smartphone,
    label: "TELECOM",
    title: "Bell & Multi-Brand Self-Serve",
    text:
      "Customer account experiences across MyBell Mobile, Lucky Mobile, Virgin Plus and My PC Mobile, including self-serve and Wi-Fi optimization journeys.",
    tech: ["Kotlin", "Android", "REST", "MVVM", "In-house SDKs"]
  },
  {
    icon: Tv,
    label: "OTT / ANDROID TV",
    title: "Astro GO",
    text:
      "Android TV experience with 100+ live channels, 110,000+ VOD assets, remote-friendly search, profiles, playback and large-screen performance optimizations.",
    tech: ["Kotlin", "Android TV", "DPAD", "EPG / VOD", "Leanback"]
  },
  {
    icon: Car,
    label: "AUTOMOTIVE",
    title: "Tata Play Binge",
    text:
      "OTT aggregation experience for Android Automotive OS with 30+ integrated platforms, live TV, VOD, universal search, recommendations and watchlist.",
    tech: ["Android Automotive", "Kotlin", "OTT", "Search", "Playback"]
  },
  {
    icon: MessageCircle,
    label: "REAL-TIME COMMUNICATION",
    title: "Mutualink LNK 360",
    text:
      "Secure multimedia PTT platform supporting voice, video, data communication, live WebRTC media and real-time location sharing.",
    tech: ["WebRTC", "Maps", "Android", "Realtime", "Multimedia"]
  },
  {
    icon: Code2,
    label: "SPORTS / REAL-TIME",
    title: "CricRadio",
    text:
      "Live cricket experience with socket-driven updates, multilingual commentary, live chat, analytics graphs and interactive animations.",
    tech: ["Kotlin", "Socket.IO", "MP Chart", "Live Data"]
  },
  {
    icon: Sparkles,
    label: "AI / ENGINEERING",
    title: "AI-Assisted Engineering",
    text:
      "Used AI agents and AI-assisted workflows for unit-test automation, code coverage improvements, dependency analysis and SonarQube remediation.",
    tech: ["AI Agents", "Testing", "SonarQube", "Automation"]
  }
];

const achievements = [
  "Star Performer of the Month — May 2025",
  "Star Performer of the Month — Mar 2025",
  "Team Award — Fastest Growing Team, Feb 2023",
  "Client Visit — Tata Motors, Pune for onsite Android Automotive testing and client interaction"
];

const certifications = [
  ["ChatGPT and GPT-4 LLM Guide — Prompt Engineering for Everyone", "Udemy · Sep 2025"],
  ["Advance Android Bootcamp 2023", "Udemy · Aug 2023"],
  ["Android Unit Testing and TDD", "Udemy · Jul 2023"],
  ["Flutter App Development", "Udemy · Nov 2022"],
  ["Android Development From Scratch", "Udemy · Aug 2018"]
];

const publications = [
  { title: "Biometric Authentication in Android Using BiometricManager", url: "https://www.tothenew.com/blog/biometric-authentication-in-android-using-biometricmanager/" },
  { title: "The Future of Mobile App Development: User Experience, Trends and Technologies", url: "https://www.tothenew.com/blog/the-future-of-mobile-app-development-user-experience-trends-and-technologies/" },
  { title: "Jetpack Compose Tutorial For Beginners – Easy-to-Follow Steps", url: "https://example.com/jetpack-compose-tutorial" },
  { title: "Introduction to Ktor Rest API", url: "https://example.com/introduction-to-ktor-rest-api" }
];

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <div className="kicker">{kicker}</div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const close = () => setMobileMenu(false);

  return (
    <div className="app">
      <header className="nav-shell">
        <nav className="nav container">
          <a href="#home" className="brand" onClick={close}>
            <span className="brand-logo">SB</span>
            <span>Saurav<span className="accent">.</span></span>
          </a>

          <div className={`nav-links ${mobileMenu ? "open" : ""}`}>
            {["about", "experience", "projects", "skills", "education", "contact"].map(item => (
              <a key={item} href={`#${item}`} onClick={close}>{item}</a>
            ))}
            <a className="resume-btn" href={resumeUrl} download>
              Resume <Download size={15} />
            </a>
          </div>

          <div className="nav-right">
            <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="icon-button menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="availability"><span /> Senior Android Engineer · Noida, India</div>
            <h1>I build <span>high-quality Android experiences</span> for real-world products.</h1>
            <p className="hero-subtitle">
              7+ years across Android Mobile, Android TV and Android Automotive OS —
              with a Kotlin-first approach to scalable architecture, performance and developer productivity.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
              <a className="button secondary" href={resumeUrl} download>Download resume <Download size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href={contact.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={`mailto:${contact.email}`}><Mail size={17} /> Email</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow glow-a" />
            <div className="glow glow-b" />
            <div className="profile-card">
              <div className="profile-card-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>android_engineer.kt</span>
              </div>
              <div className="code">
                <div><span className="muted">class</span> <span className="purple">AndroidEngineer</span> {`{`}</div>
                <div className="indent"><span className="muted">val</span> focus = listOf(</div>
                <div className="indent2"><span>"Clean Architecture"</span>,</div>
                <div className="indent2"><span>"Jetpack Compose"</span>,</div>
                <div className="indent2"><span>"Scalable Products"</span>,</div>
                <div className="indent2"><span>"AI-assisted Quality"</span></div>
                <div className="indent">)</div>
                <div className="blank" />
                <div className="indent"><span className="muted">fun</span> <span className="purple">deliver</span>() {`{`}</div>
                <div className="indent2">impact + quality + reliability</div>
                <div className="indent">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
            <div className="float-pill one"><Zap size={16} /> Production focused</div>
            <div className="float-pill two"><Layers3 size={16} /> Kotlin first</div>
          </div>
        </section>

        <section className="ticker">
          <div className="ticker-track">
            <span>ANDROID MOBILE</span><b>✦</b><span>ANDROID TV</span><b>✦</b><span>AUTOMOTIVE OS</span><b>✦</b><span>KOTLIN</span><b>✦</b><span>JETPACK COMPOSE</span><b>✦</b><span>KMP / CMP</span><b>✦</b><span>CLEAN ARCHITECTURE</span>
          </div>
        </section>

        <section id="about" className="section container">
          <SectionTitle kicker="ABOUT" title="Engineering with a product mindset." text="A concise look at the experience and principles behind my work." />
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm an Android engineer focused on building maintainable, high-performance applications
                across mobile, TV and automotive environments. My work spans telecom, OTT, media,
                real-time communication and consumer applications.
              </p>
              <p>
                I enjoy solving problems where product needs, platform constraints and engineering quality
                intersect — from DPAD-first TV UI and automotive playback to reusable Android libraries,
                API integration and automated testing.
              </p>
              <p>
                More recently, I've also been using AI-assisted development to reduce repetitive engineering
                work, improve unit-test coverage and accelerate code-quality improvements.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card"><strong>7+</strong><span>Years of Android experience</span></div>
              <div className="stat-card"><strong>3</strong><span>Major Android platforms</span></div>
              <div className="stat-card"><strong>4</strong><span>Core product domains</span></div>
              <div className="stat-card"><strong>2019</strong><span>Started professional journey</span></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-muted">
          <div className="container">
            <SectionTitle kicker="EXPERIENCE" title="Where I've been building." />
            <div className="timeline">
              {experience.map((job, index) => (
                <article className="timeline-item" key={job.company}>
                  <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
                  <div className="timeline-content">
                    <div className="experience-head">
                      <div>
                        <div className="company">{job.company}</div>
                        <h3>{job.role}</h3>
                      </div>
                      <div className="period">{job.period}</div>
                    </div>
                    <p className="job-intro">{job.intro}</p>
                    <div className="bullet-list">
                      {job.bullets.map((item, i) => (
                        <div className="bullet" key={i}><Check size={15} /> <span>{item}</span></div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionTitle kicker="SELECTED WORK" title="Projects worth talking about." text="A portfolio view of the products and technical areas represented in my experience." />
          <div className="project-grid">
            {projects.map(project => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.title}>
                  <div className="project-top">
                    <div className="project-icon"><Icon size={21} /></div>
                    <span>{project.label}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tech-row">
                    {project.tech.map(item => <span key={item}>{item}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="container">
            <SectionTitle kicker="TECH STACK" title="Tools I use to build." />
            <div className="skills-grid">
              {Object.entries(skills).map(([group, list]) => (
                <div className="skill-group" key={group}>
                  <h3>{group}</h3>
                  <div className="skill-tags">
                    {list.map(skill => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container recognition">
          <div className="recognition-grid">
            <div>
              <SectionTitle kicker="RECOGNITION" title="Performance that got noticed." />
              <div className="recognition-list">
                {achievements.map(item => (
                  <div className="recognition-item" key={item}><Award size={18} /><span>{item}</span></div>
                ))}
              </div>
            </div>
            <div className="quote-card">
              <div className="quote-mark">“</div>
              <p>Good engineering is the combination of clean implementation, useful product thinking and a relentless focus on quality.</p>
              <span>— Saurav Bansal</span>
            </div>
          </div>
        </section>

        <section id="education" className="section section-muted">
          <div className="container">
            <SectionTitle kicker="EDUCATION & LEARNING" title="The foundation behind the work." />
            <div className="education-grid">
              <div className="edu-card">
                <GraduationCap size={22} />
                <div><strong>MCA</strong><span>KIET Group of Institutions, Ghaziabad · 2019</span></div>
              </div>
              <div className="edu-card">
                <GraduationCap size={22} />
                <div><strong>BCA</strong><span>Gagan College of Management, Aligarh · 2016</span></div>
              </div>
            </div>

            <div className="sub-block">
              <h3>Certifications</h3>
              <div className="cert-grid">
                {certifications.map(([name, meta]) => (
                  <div className="cert-card" key={name}>
                    <BookOpen size={18} />
                    <div><strong>{name}</strong><span>{meta}</span></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sub-block">
              <h3>Publications / Blogs</h3>
              <div className="pub-grid">
                {publications.map(pub => (
                  <div className="pub-card" key={pub.title}>
                    <ChevronRight size={16} />
                    {pub.url ? (
                      <a href={pub.url} target="_blank" rel="noreferrer">{pub.title}</a>
                    ) : (
                      <span>{pub.title}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-card">
            <div>
              <div className="kicker">LET'S CONNECT</div>
              <h2>Have an Android challenge worth solving?</h2>
              <p>I'm open to conversations around senior Android engineering, platform work, mobile architecture and product engineering.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${contact.email}`}>Email me <Mail size={18} /></a>
              <a className="button secondary dark-compatible" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Saurav Bansal</div>
          <div className="footer-links">
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href={resumeUrl} download><Download size={16} /> Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
