import { Link } from "react-router-dom";

const JOBS = [
  {
    title: "AI Job 1",
    rate: "$90–$120 / hr",
    href: "https://t.mercor.com/PZPAg",
  },
  {
    title: "AI Job 2",
    rate: "$70–$100 / hr",
    href: "https://t.mercor.com/dLn4H",
  },
  {
    title: "AI Job 3",
    rate: "$70 / hr",
    href: "https://t.mercor.com/nt7z8",
  },
];

export default function USAIJobsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-xl mx-auto px-5 py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
          </svg>
          Back
        </Link>

        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Opportunities</p>
        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-3 leading-tight">US AI Jobs</h1>
        <p className="text-muted-foreground text-sm mb-10 max-w-md">
          Curated AI roles in the United States. Click any listing to apply via the referral link.
        </p>

        <div className="flex flex-col gap-5">
          {JOBS.map((job) => (
            <a
              key={job.href}
              href={job.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full rounded-2xl border border-border bg-card px-6 py-5 hover:border-primary hover:shadow-md transition-all"
            >
              <div>
                <p className="font-black text-foreground text-base group-hover:text-primary transition-colors">{job.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{job.rate}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
