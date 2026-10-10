'use client'

import { useEffect, useRef, useState } from 'react'

import { ArrowUpRight, Check, GitBranch, Mail, Menu, UserRound, X } from 'lucide-react'

import Image from 'next/image'

// Replace with your Formspree form ID (see https://formspree.io) so the
// contact form actually delivers submissions to your inbox.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrpeklwk'

const CONTACT_EMAIL = 'zaidalmomani4110@gmail.com'

const SOCIALS = {
  github: 'https://github.com/Zaidzezo/',
  linkedin: 'https://www.linkedin.com/in/zaid-almomani-936013325',
  email: `mailto:${CONTACT_EMAIL}`,
}

const certificates = [
  {
    title: 'DevOps Capstone Project',
    issuer: 'IBM',
    year: '2026',
    color: 'yellow',
    number: '01',
    image: '/certificates/devops.png',
    url: 'https://www.coursera.org/account/accomplishments/verify/R44H9I3YRZPP',
  },
  {
    title: 'Application Development using Microservices and Serverless',
    issuer: 'IBM',
    year: '2026',
    color: 'pink',
    number: '02',
    image: '/certificates/microservices.png',
    url: 'https://www.coursera.org/account/accomplishments/verify/RJFSWJNWLQUA',
  },
  {
    title: 'MongoDB Credential',
    issuer: 'MongoDB',
    year: '2026',
    color: 'blue',
    number: '03',
    image: '/certificates/data.jpg',
    url: 'https://learn.mongodb.com/c/P9dY4WnJQ0CBrbzQQzQ2DA',
  },
]

const projects = [

  { 

    title: 'Locker', 

    type: 'distributed systems project', 

    description: 'A secure, distributed file storage system that allows users to store and retrieve files across multiple nodes.', 

    tags: ['TypeScript', 'MongoDB', 'React', 'Node.js','Express.js'], 

    color: 'yellow', 

    number: '01',

    image: '/work/locker.png',
    url: 'https://github.com/Zaidzezo/distributed-file-locker'

  },

  { 

    title: 'Triage', 

    type: 'open-source issues finder', 

    description: 'An AI-assisted GitHub issue finder that helps developers discover and prioritize open-source issues.', 

    tags: ['Next.js', 'PostgreSQL', 'TypeScript', 'Node.js'], 

    color: 'pink', 

    number: '02',

    image: '/work/triage.png',
    url: 'https://triage-ewhp.onrender.com/'

  },

  { 

    title: 'Nexus', 

    type: 'simple social media app', 

    description: 'Publishing tools that help small teams make big ideas easier to find.', 

    tags: ['Express.js','MongoDB', 'React', 'Node.js'], 

    color: 'blue', 

    number: '03',

    image: '/work/nexus.png',
    url: 'https://nexus-frontend-o7lc.onrender.com/'

  },

]

const skills = [

  'TypeScript',

  'Node.js',

  'PostgreSQL',

  'MongoDB',

  'Docker',

  'GraphQL',

  'Prisma',

  'Next.js',

  'Python',

  'Git',

]

const terminalHistory = [

  { command: 'whoami', output: 'Zaid Almomani / Full-Stack Developer' },

  { command: 'cat profile.txt', output: '16 yrs old • Backend & systems engineering focus' },

  { command: 'node stack.js', output: 'Node.js, PostgreSQL, Cloudinary, Git / GitHub' },

  { command: 'git status', output: 'Building high-performance apps & open-source triage' },

]

function ToolkitTerminal() {

  const terminalRef = useRef<HTMLDivElement>(null)

  const [started, setStarted] = useState(false)

  useEffect(() => {

    const element = terminalRef.current

    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

      setStarted(true)

      return

    }

    const observer = new IntersectionObserver(([entry]) => {

      if (entry.isIntersecting) {

        setStarted(true)

        observer.disconnect()

      }

    }, { threshold: 0.35 })

    observer.observe(element)

    return () => observer.disconnect()

  }, [])

  return (

    <div className={`toolkit-terminal ${started ? 'is-started' : ''}`} ref={terminalRef} aria-label="Toolkit install log">

      <div className="terminal-titlebar">

        <span className="terminal-dots"><i /><i /><i /></span>

        <span>toolkit.sh</span>

        <span className="terminal-status">● online</span>

      </div>

      <div className="terminal-body" style={{ minHeight: '300px', opacity: 1 }}>

        {terminalHistory.map((item) => (

          <div key={item.command} style={{ marginBottom: '14px', opacity: 1 }}>

            <p style={{ margin: 0, color: '#f7f3eb', fontWeight: 500 }}>

              <span style={{ color: 'var(--yellow)', marginRight: '8px' }}>$</span>

              {item.command}

            </p>

            <p style={{ margin: '2px 0 0 16px', color: '#a9a49b', fontSize: '0.88rem' }}>

              {item.output}

            </p>

          </div>

        ))}

        <p className="terminal-ready" style={{ opacity: 1, marginTop: '20px' }}>

          <span>✓</span> Ready to build <b className="terminal-cursor" aria-hidden="true" />

        </p>

      </div>

    </div>

  )

}

export default function Page() {

  const [menuOpen, setMenuOpen] = useState(false)

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (

    <main>

      {/* ── Nav ── */}

      <nav className="nav shell" aria-label="Primary navigation">

        <a className="brand" href="#top" aria-label="Zaid Almomani home">

          <span className="brand-mark">ZA</span>

          <span>Zaid Almomani</span>

        </a>

        <button

          className="menu-toggle"

          onClick={() => setMenuOpen(!menuOpen)}

          aria-expanded={menuOpen}

          aria-label={menuOpen ? 'Close menu' : 'Open menu'}

        >

          {menuOpen ? <X /> : <Menu />}

        </button>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>

          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>

          <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>

          <a href="#contact" className="button button-small" onClick={() => setMenuOpen(false)}>

            Let's talk <ArrowUpRight size={16} />

          </a>

        </div>

      </nav>

      {/* ── Hero ── */}

      <section className="hero shell" id="top">

        <div className="hero-copy">

          <div className="status">

            <span className="status-dot" /> Available for select projects <span className="mono">/ 2026</span>

          </div>

          <p className="eyebrow">Product-minded engineer <span className="slash">/</span> human interface</p>

          <h1>I build digital things <em>people actually want to use.</em></h1>

          <p className="hero-text">I'm Zaid — a software developer and design-leaning problem solver. I turn fuzzy ideas into useful, well-loved products.</p>

          <div className="hero-actions">

            <a href="#work" className="button button-dark">See my work <ArrowUpRight size={18} /></a>

            <a href="#contact" className="text-link">Start a conversation <span>↗</span></a>

          </div>

        </div>

        <div className="hero-art" aria-label="A colorful abstract illustration">

          <div className="art-sun" />

          <div className="art-star">✳</div>

          <div className="art-card">

            <span className="mono">CURRENTLY</span>

            <strong><span>making good</span><span>software</span></strong>

            <span className="art-arrow">↗</span>

          </div>

          <div className="art-caption mono">42° 21' 07" N<br />71° 03' 41" W</div>

        </div>

      </section>

      {/* ── Marquee ── */}

      <div className="marquee" aria-label="Skills marquee">

        <div className="marquee-track" aria-hidden="true">

          <span>PRODUCT THINKING <b>✳</b> FRONTEND CRAFT <b>✳</b> KIND INTERFACES <b>✳</b> GOOD QUESTIONS <b>✳</b></span>

          <span>PRODUCT THINKING <b>✳</b> FRONTEND CRAFT <b>✳</b> KIND INTERFACES <b>✳</b> GOOD QUESTIONS <b>✳</b></span>

          <span>PRODUCT THINKING <b>✳</b> FRONTEND CRAFT <b>✳</b> KIND INTERFACES <b>✳</b> GOOD QUESTIONS <b>✳</b></span>

          <span>PRODUCT THINKING <b>✳</b> FRONTEND CRAFT <b>✳</b> KIND INTERFACES <b>✳</b> GOOD QUESTIONS <b>✳</b></span>

        </div>

      </div>

      {/* ── About ── */}

      <section className="section shell about" id="about">

        <div className="section-label">

          <span>01</span>

          <span>About me</span>

        </div>

        <div className="about-heading">

          <h2>Curious by default.<br /><span>Useful on purpose.</span></h2>

        </div>

        <div className="about-grid">

          <div className="about-card">

            <span className="mono">I LIKE SOFTWARE THAT IS</span>

            <strong>simple<br />& solid.</strong>

            <span className="mono">COMPLEX UNDERNEATH. CLEAR ON TOP.</span>

          </div>

          <div className="about-body">

            <p className="large-copy">I'm a student and software developer interested in backend engineering, systems, and building software that solves real problems. Most of what I learn comes from building — designing APIs, working with databases, deploying applications, and figuring out how everything fits together behind the interface.</p>

            <p>I care about <mark>understanding how things work</mark>, not just making them work. My goal is to keep getting better at building reliable, well-structured software while taking on harder problems and learning the systems underneath the code.</p>

            <div className="facts">

              <div><strong>16 years</strong><span>student developer</span></div>

              <div><strong>Full-stack</strong><span>projects built & deployed</span></div>

              <div><strong>Backend /<br />systems</strong><span>current focus</span></div>

            </div>

          </div>

        </div>

      </section>

      {/* ── Stack / Toolkit ── */}

      <section className="section shell stack">

        <div className="section-label">

          <span>02</span>

          <span>My toolkit</span>

        </div>

        <div className="stack-content">

          <h2>Tools are just tools.<br /><span>But these are my favorites.</span></h2>

          <p className="toolkit-intro">A small, reliable set of tools for turning fuzzy ideas into products that feel obvious in the hand.</p>

          <div className="tags">

            {skills.map((skill, i) => (

              <span className={`tag tag-${i % 4}`} key={skill}>{skill}</span>

            ))}

          </div>

        </div>

        <div className="stack-spacer" aria-hidden="true" />

        <ToolkitTerminal />

      </section>

      {/* ── Work ── */}

      <section className="section shell" id="work">

        <div className="section-label">

          <span>03</span>

          <span>Selected work</span>

        </div>

        <div className="work-heading">

          <h2>A few things<br /><span>I've made.</span></h2>

          <p>Small selection, big opinions. Every project starts with a problem worth solving.</p>

        </div>

        <div className="projects">

          {projects.map((project, index) => (

            <article 

              className={`project-card project-${project.color} ${index === 2 ? 'project-card-center' : ''}`} 

              key={project.title}

            >

              <div className="project-visual">

                <span className="project-number mono">{project.number}</span>

                {project.image ? (

                  <Image

                    src={project.image}

                    alt={`${project.title} screenshot`}

                    fill

                    className="project-image-full"

                    sizes="(max-width: 800px) 100vw, 50vw"

                  />

                ) : (

                  <div className="project-placeholder">

                    <span>YOUR PROJECT IMAGE</span>

                    <small>Replace this placeholder with your own picture</small>

                  </div>

                )}

              </div>

              <div className="project-info">

                <div>

                  <span className="eyebrow">{project.type}</span>

                  <h3>{project.title}</h3>

                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} (opens in a new tab)`}
                >
                  <ArrowUpRight />
                </a>

                <p>{project.description}</p>

                <div className="project-tags">

                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* ── Certificates ── */}

      <section className="section shell certificates" id="certificates">

        <div className="section-label">

          <span>04</span>

          <span>Certificates</span>

        </div>

        <div className="work-heading">

          <h2>Proof of<br /><span>the practice.</span></h2>

          <p>A place for the certificates, courses, and milestones you want to share.</p>

        </div>

        <div className="certificate-grid">

          {certificates.map((certificate) => (

            <article

              className={`certificate-card certificate-${certificate.color}`}

              key={certificate.title}

            >
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${certificate.title} certificate (opens in a new tab)`}
                style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}
              >
                <div className="certificate-visual">

                  <span className="project-number mono">{certificate.number}</span>

                  <div className="certificate-frame">

                    <Image

                      src={certificate.image}

                      alt={`${certificate.title} certificate`}

                      fill

                      className="certificate-image"

                      sizes="(max-width: 800px) 100vw, 33vw"

                    />

                  </div>

                </div>

                <div className="certificate-info">

                  <div>

                    <span className="eyebrow">{certificate.year}</span>

                    <h3>{certificate.title}</h3>

                    <p>{certificate.issuer}</p>

                  </div>

                  <ArrowUpRight />

                </div>
              </a>

            </article>

          ))}

        </div>

      </section>

      {/* ── Contact ── */}

      <section className="shell" id="contact" style={{ paddingTop: '130px', paddingBottom: '40px', borderBottom: 'none' }}>

        <div className="section-label">

          <span>05</span>

          <span>Get in touch</span>

        </div>

        <div className="contact" style={{ marginTop: 0, marginBottom: 0 }}>

          <div className="contact-copy">

            <h2>Have a good idea?<br /><em>Let's make it real.</em></h2>

            <p>Tell me a little about what you're working on. I'll get back to you within a couple of days — usually with too many questions.</p>

            <a className="email-link" href={SOCIALS.email}>

              {CONTACT_EMAIL} <ArrowUpRight size={18} />

            </a>

          </div>

          <form

            className="contact-form"

            onSubmit={handleSubmit}

          >

            <label>Name<input required name="name" placeholder="Your name" /></label>

            <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>

            <label>What are you making?<textarea required name="message" placeholder="A sentence or two is perfect..." rows={4} /></label>

            <button className="button button-yellow" type="submit" disabled={status === 'sending'}>

              {status === 'sent' ? (
                <><Check size={18} /> Message sent</>
              ) : status === 'sending' ? (
                <>Sending…</>
              ) : status === 'error' ? (
                <>Couldn't send — try again</>
              ) : (
                <>Send it over <ArrowUpRight size={18} /></>
              )}

            </button>

            {status === 'error' && (
              <p className="form-note" role="alert">
                Something went wrong. You can also email me directly at{' '}
                <a href={SOCIALS.email}>{CONTACT_EMAIL}</a>.
              </p>
            )}

          </form>

        </div>

      </section>

      {/* ── Footer ── */}

      <footer className="footer shell">

        <a className="brand" href="#top"><span className="brand-mark">ZA</span></a>

        <span className="footer-note">Designed, developed, and occasionally overthought by Zaid Almomani.</span>

        <div className="socials">

          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="Github"><GitBranch size={19} /></a>

          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><UserRound size={19} /></a>

          <a href={SOCIALS.email} aria-label="Email"><Mail size={19} /></a>

          <a href="#top" className="top-link" aria-label="Back to top">↑</a>

        </div>

      </footer>

    </main>

  )

}