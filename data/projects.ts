export type Project = {
  slug: string; title: string; tagline: string; image: string;
  problem: string; built: string[]; decision: string; result: string; improve: string;
  stack: string[]; how: string[]; matrix?: string[][]; links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "workshop-registration",
    title: "Workshop Registration Service",
    tagline: "Role-based registration system where simultaneous requests can never overbook a workshop.",
    image: "/images/workshop.png",
    problem: "A training centre took registrations by phone into a shared spreadsheet. Two staff promised the last seat at the same moment, and 24 people arrived for 20 seats.",
    built: [
      "FastAPI and SQLAlchemy backend with a React frontend; Admin, Manager and Staff permissions enforced in the API, not just hidden in the interface.",
      "Cancelling never deletes: every registration keeps who registered or cancelled it, and when.",
      "Workshop search by date range, status and free seats, plus an audit log of workshop and account changes.",
    ],
    decision: "The capacity check and the insert are one atomic SQL statement (insert only if active registrations are below capacity), instead of count-then-insert, which lets two requests both take the last seat.",
    result: "A script fires 30 simultaneous registrations at a 5-seat workshop: exactly 5 succeed and 25 are refused with 409.",
    improve: "Add the waitlist, an audit log viewer, and PostgreSQL row locking for higher write volume.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "JWT", "React", "Vercel", "Render"],
    how: [
      "Three tables: users, workshops and registrations. Registrations are never deleted; cancelling records who cancelled and when.",
      "Registering runs one SQL statement that inserts only if active registrations are below capacity, so simultaneous requests cannot take the same last seat.",
      "A partial unique index stops the same email being registered twice for one workshop.",
      "Roles are read from the database on every request, so a role change or a disabled account takes effect immediately.",
      "Workshop search filters by date range, status and seats still available, and workshop and account changes go to an audit log.",
    ],
    matrix: [["Action", "Admin", "Manager", "Staff"], ["Create accounts and set roles", "Yes", "No", "No"], ["Add and edit workshops", "No", "Yes", "No"], ["Register and cancel attendees", "No", "Yes", "Yes"], ["View workshops, registrations and history", "No", "Yes", "Yes"]],
    links: [
      { label: "Live demo (login: staff@centre.test / Staff123!)", href: "https://workshop-registration-service-green.vercel.app" },
      { label: "Source code", href: "https://github.com/musharraf7940/workshop-registration-service" },
    ],
  },
  {
    slug: "lankataxmind",
    title: "LankaTaxMind",
    tagline: "AI legal research assistant that answers Sri Lankan tax law questions with citations.",
    image: "/images/lankataxmind.png",
    problem: "Sri Lankan tax law is spread across many documents, which makes it slow to search and hard to verify.",
    built: [
      "RAG pipeline: PDF, DOCX and XLSX extraction, chunking, Hugging Face embeddings and Pinecone search over 5,600+ chunks from 11 sources, answered by Google Gemini with statutory citations.",
      "Firebase authentication, rate limiting and persistent multi-session chat history.",
      "SHAP-based explainability, AI-assisted document drafting, and English, Sinhala and Tamil support.",
    ],
    decision: "When the private knowledge base has no answer, the system falls back to live web search, and it fails over between Gemini models so it keeps working when the API is unstable.",
    result: "Deployed behind a login, with each answer citing the source passages it was drawn from.",
    improve: "Build an evaluation set of tax questions to measure retrieval accuracy and track improvements.",
    stack: ["Python", "FastAPI", "React", "Pinecone", "Google Gemini", "Firebase", "Hugging Face", "SHAP"],
    how: [
      "PDF, DOCX and XLSX files are extracted, split into chunks and embedded with Hugging Face models, then stored in Pinecone.",
      "A question retrieves the closest chunks, and Google Gemini writes an answer that cites the statute passages it used.",
      "If the knowledge base has no answer, the system falls back to live web search.",
      "Firebase handles sign-in and chat history, and rate limiting protects the API.",
      "SHAP-based explainability covers model outputs, and if one Gemini model fails the system switches to another.",
    ],
    links: [
      { label: "Live app", href: "https://lanka-tax-mind-tulq.vercel.app" },
      { label: "GitHub profile", href: "https://github.com/musharraf7940" },
    ],
  },
  {
    slug: "anm-audit-tool",
    title: "ANM Audit Tool",
    tagline: "Document workflow for a Sri Lankan accounting and tax firm, delivered as freelance work.",
    image: "/images/anm.png",
    problem: "Audit documents moved between teams and partners by manual handoffs, with no clear record of review and approval.",
    built: [
      "Upload, review and approve or reject workflow, with a year-to-month archive and PDF annotation.",
      "Three access levels secured with row-level security in PostgreSQL.",
      "OTP-based password reset with brute-force protection, email notifications and an admin dashboard.",
      "Mobile-friendly PWA with GitHub CI/CD auto-deployment to Vercel.",
    ],
    decision: "Access rules live in the database as row-level security, so a mistake in the interface cannot expose another team's documents.",
    result: "Replaced manual document handoffs with one end-to-end workflow for audit teams and partners.",
    improve: "Add automated tests for the access rules and an activity report for partners.",
    stack: ["JavaScript", "TypeScript", "Supabase", "PostgreSQL", "Deno Edge Functions", "Resend", "Vercel", "GitHub Actions"],
    how: [
      "Audit teams upload documents, and partners review and approve or reject them. Files can be re-uploaded and renamed.",
      "Documents sit in a year-to-month archive, and PDFs can be annotated.",
      "Three user levels are enforced with row-level security in PostgreSQL.",
      "Password reset uses one-time codes with brute-force protection, and email notifications go out through Resend.",
      "An admin dashboard manages users. The app installs as a PWA, and pushes to GitHub deploy to Vercel automatically.",
    ],
    links: [{ label: "GitHub profile", href: "https://github.com/musharraf7940" }],
  },
];
