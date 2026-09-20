import { ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-main">
          <p className="eyebrow">Hardware verification / computer architecture</p>
          <h1>
            I verify the systems
            <span>behind the system.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Yash Mishra, a computer engineer at Purdue building rigorous
            verification environments, processor RTL, and embedded systems.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See selected work <ArrowDownRight size={18} />
            </a>
            <a
              className="button button-secondary"
              href="/Yash_Mishra_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={17} /> Résumé
            </a>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Current focus">
          <div className="status-line">
            <span className="status-dot" aria-hidden="true" />
            Current focus
          </div>
          <h2>Graduate researcher at Purdue&apos;s NexSys Lab.</h2>
          <p>
            Developing placement policies for ZNS SSDs and preparing
            hardware validation on a Cosmos+ OpenSSD platform.
          </p>
          <a href="#experience" className="text-link">
            View experience <ArrowUpRight size={16} />
          </a>
        </aside>
      </div>

      <div className="site-container hero-footer">
        <p className="hero-note">West Lafayette, Indiana · M.S. candidate</p>
      </div>
    </section>
  );
}
