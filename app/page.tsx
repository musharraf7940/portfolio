import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "@/data/projects";
import { Nav, Footer, EM, GH, LI } from "@/components/Shell";
import { Arrow, GitHub, LinkedIn } from "@/components/Icons";

const i = (n: number) => ({ "--i": n }) as CSSProperties;
const cats: Record<string, string> = {
  "workshop-registration": "Full-stack web app",
  lankataxmind: "AI and RAG application",
  "anm-audit-tool": "Client project",
};
const stats = [
  ["5,600+", "legal text chunks searchable in LankaTaxMind"],
  ["0 overbooked", "after 30 simultaneous requests on a 5-seat workshop"],
  ["3 access levels", "enforced in the database for the ANM audit tool"],
];
const skills: [string, string][] = [
  ["Languages", "Python, JavaScript, TypeScript, Java, PHP, SQL"],
  ["Backend and AI", "FastAPI, REST APIs, retrieval-augmented generation, Pinecone, Hugging Face, prompt engineering"],
  ["Data and cloud", "Firebase, Supabase, PostgreSQL, SQLite, Vercel, Render"],
  ["Frontend", "React, Next.js, HTML5, CSS3, Progressive Web Apps"],
  ["Tools", "Git, GitHub, Figma"],
];
const education: [string, string, string, string][] = [
  ["2024 - Present", "BSc (Hons) Computer Science and Software Engineering", "SLIIT City University", "Modules include Web Application Development, Operating Systems, Data Communications and Networks, and Probability and Statistics."],
  ["March - June 2026", "Artificial Intelligence course", "SLIIT City University", "Python, machine learning, data preprocessing, neural networks, NLP, generative AI, Hugging Face models, explainable AI, model deployment and AI ethics. LankaTaxMind was my evaluation project."],
  ["2021 - 2023", "Advanced Level Examination", "AS-Siraj Maha Vidyalaya, Akkaraipattu", "Ordinary Level Examination completed in 2018."],
];
const approach: [string, string][] = [
  ["Enforce rules on the server", "In the workshop service, every permission is checked in the API on each request, not just hidden in the interface."],
  ["Test the rule that matters most", "I wrote a script that sends 30 simultaneous registrations at a 5-seat workshop, and exactly 5 succeeded."],
  ["Document the decisions", "The workshop service ships with setup steps, seeded demo logins and a short design note on trade-offs."],
  ["Say what is not done", "The design note lists what I skipped, such as the waitlist and an audit log viewer."],
];
const more = [
  { title: "E-Commerce Web Application", sub: "Full-stack CRUD application", points: ["User login, product catalog, shopping cart and order management.", "Admin panel for adding, editing and deleting products, users, orders and FAQs.", "Front end in HTML, CSS, JavaScript and AJAX; back end in PHP and MySQL."], tech: ["HTML", "CSS", "JavaScript", "AJAX", "PHP", "MySQL"] },
  { title: "Inventory Management System", sub: "CRUD application", points: ["Product management, user authentication, shopping cart and order handling."], tech: ["Java", "PHP", "MySQL"] },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="wrap">
        <div className="hero">
          <div>
            <span className="pill rise" style={i(0)}><span className="dot" aria-hidden="true" />Open to internships</span>
            <h1 className="display rise" style={i(1)}>Full-stack and AI apps, built end to end.</h1>
            <p className="lead rise" style={i(2)}>
              I&apos;m a software engineering student at SLIIT City University in Colombo. I take projects from the first
              requirement to a deployed app on my own, including a document system for an accounting firm.
            </p>
            <div className="btns rise" style={i(3)}>
              <a className="btn pri" href="#projects">View projects</a>
              <a className="btn" href="/Musharraf_Mohamed_CV.pdf">Download CV</a>
              <a className="btn" href={GH} aria-label="GitHub"><GitHub />GitHub</a>
              <a className="btn" href={LI} aria-label="LinkedIn"><LinkedIn />LinkedIn</a>
            </div>
          </div>
          <div className="photo rise" style={i(2)}>
            <img src="/images/photo.jpg" alt="Photo of Musharraf Mohamed" width={800} height={1000} />
          </div>
        </div>

        <div className="stats">
          {stats.map(([n, t]) => (<div className="stat" key={n}><b>{n}</b><span>{t}</span></div>))}
        </div>

        <section id="projects">
          <div className="head"><p className="eyebrow">Selected work</p><h2 className="h2">Projects</h2></div>
          <div className="work">
            {projects.map((p) => (
              <Link className="card" href={`/projects/${p.slug}`} key={p.slug}>
                <div>
                  <p className="eyebrow">{cats[p.slug]}</p>
                  <h3>{p.title}</h3>
                  <p>{p.tagline}</p>
                  <ul className="tags">{p.stack.slice(0, 5).map((s) => <li key={s}>{s}</li>)}</ul>
                  <span className="more">Read the case study <Arrow /></span>
                </div>
                <div className="shot"><img src={p.image} alt={`${p.title} screenshot`} width={1920} height={860} loading="lazy" /></div>
              </Link>
            ))}
          </div>
        </section>

        <section id="more">
          <div className="head"><p className="eyebrow">Earlier work</p><h2 className="h2">More projects</h2></div>
          <div className="g2">
            {more.map((m) => (
              <div className="mini" key={m.title}>
                <p className="eyebrow">{m.sub}</p>
                <h3>{m.title}</h3>
                <ul>{m.points.map((x) => <li key={x}>{x}</li>)}</ul>
                <ul className="tags">{m.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="approach">
          <div className="head"><p className="eyebrow">How I work</p><h2 className="h2">Habits I bring to a project</h2></div>
          <div className="g2">
            {approach.map(([t, d]) => (<div className="mini" key={t}><h3>{t}</h3><p>{d}</p></div>))}
          </div>
        </section>

        <section id="skills">
          <div className="head"><p className="eyebrow">What I work with</p><h2 className="h2">Skills</h2></div>
          <dl className="dl">{skills.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}</dl>
        </section>

        <section id="about">
          <div className="two">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="h2">I like owning a project from start to finish.</h2>
              <p className="lead">I&apos;m a Computer Science and Software Engineering undergraduate at SLIIT City University in Colombo. Python is my strongest backend language, and I build frontends in React.</p>
              <p className="muted">Alongside my degree I take on real projects: a document review system for an accounting and tax firm, an AI legal research assistant for Sri Lankan tax law, and a workshop registration service that stays correct when requests arrive at the same moment.</p>
              <p className="muted">I work with SQL databases (PostgreSQL, MySQL and SQLite) and cloud services such as Firebase, Supabase, Vercel and Render. I&apos;m looking for a 6 to 12 month software engineering internship where I can learn from a team and ship real features.</p>
              <dl className="dl sm" style={{ marginTop: "1.5rem" }}>
                <div><dt>Languages</dt><dd>English (fluent), Tamil (fluent), Sinhala (basic)</dd></div>
                <div><dt>Based in</dt><dd>Dehiwala, Colombo, Sri Lanka</dd></div>
                <div><dt>Looking for</dt><dd>Software engineering internship, 6 to 12 months</dd></div>
              </dl>
            </div>
            <div>
              <p className="eyebrow">Education</p>
              <ul className="tl">{education.map(([y, t, s, d]) => (<li key={t}><small>{y}</small><b>{t}</b><span>{s}</span><p className="muted">{d}</p></li>))}</ul>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="cta">
            <h2 className="h2">Looking for a software engineering internship.</h2>
            <p>I&apos;m available for a 6 to 12 month placement. Send me an email and I&apos;ll reply quickly.</p>
            <div className="btns">
              <a className="btn pri" href={`mailto:${EM}`}>Email me</a>
              <a className="btn" href={LI}>LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
