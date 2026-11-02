import Link from "next/link";
import { GitHub, LinkedIn, Mail } from "./Icons";

export const EM = "mohammedmsm2002@gmail.com";
export const GH = "https://github.com/musharraf7940";
export const LI = "https://www.linkedin.com/in/msm-mohamed/";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link className="brand" href="/">Musharraf Mohamed</Link>
        <nav className="nav-links" aria-label="Sections">
          <a href="/#projects">Projects</a>
          <a href="/#skills">Skills</a>
          <a href="/#about">About</a>
          <a className="keep" href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="wrap foot">
      <span>Musharraf Mohamed, Colombo, Sri Lanka</span>
      <span style={{ display: "flex", gap: "1rem" }}>
        <a href={GH} aria-label="GitHub"><GitHub /></a>
        <a href={LI} aria-label="LinkedIn"><LinkedIn /></a>
        <a href={`mailto:${EM}`} aria-label="Email"><Mail /></a>
      </span>
    </footer>
  );
}
