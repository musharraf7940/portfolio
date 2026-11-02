import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Nav, Footer } from "@/components/Shell";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function Row({ title, children }: { title: string; children: ReactNode }) {
  return (<div className="rowx"><h2>{title}</h2><div>{children}</div></div>);
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <>
      <Nav />
      <main id="main" className="wrap" style={{ paddingBottom: "5rem" }}>
        <Link className="back" href="/#projects">Back to projects</Link>
        <h1 className="display" style={{ fontSize: "clamp(2.25rem,6vw,3.75rem)" }}>{p.title}</h1>
        <p className="lead">{p.tagline}</p>
        <div className="btns">
          {p.links.map((l, n) => (<a key={l.href} className={n === 0 ? "btn pri" : "btn"} href={l.href}>{l.label}</a>))}
        </div>
        <div className="big"><img src={p.image} alt={`${p.title} screenshot`} width={1920} height={860} /></div>
        <ul className="tags" style={{ marginBottom: "2.5rem" }}>{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>

        <Row title="The problem"><p>{p.problem}</p></Row>
        <Row title="What I built"><ul>{p.built.map((b) => <li key={b}>{b}</li>)}</ul></Row>
        <Row title="How it works"><ul>{p.how.map((h) => <li key={h}>{h}</li>)}</ul></Row>
        {p.matrix && (
          <Row title="Who can do what">
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead><tr>{p.matrix[0].map((h) => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>{p.matrix.slice(1).map((r) => (<tr key={r[0]}>{r.map((c, n) => <td key={n}>{c}</td>)}</tr>))}</tbody>
              </table>
            </div>
          </Row>
        )}
        <Row title="A decision I made"><p>{p.decision}</p></Row>
        <Row title="Result"><p>{p.result}</p></Row>
        <Row title="What I would improve"><p>{p.improve}</p></Row>
      </main>
      <Footer />
    </>
  );
}
