const roles = [
  {
    period: "Aug 2026 — Present",
    role: "Graduate Researcher",
    company: "NexSys Lab · Purdue University",
    description:
      "Developing read-locality-aware placement policies for ZNS SSDs in an LLM-assisted storage framework, with NVMeVirt evaluation and planned Cosmos+ OpenSSD validation.",
  },
  {
    period: "Aug 2025 — Present",
    role: "Teaching Assistant",
    company: "Purdue University · ECE 270 & ECE 20875",
    description:
      "Mentoring 120+ students across digital logic, Verilog RTL, finite-state machines, Python, and core machine-learning foundations.",
  },
  {
    period: "Aug 2024 — Apr 2025",
    role: "UVM Verification Engineer",
    company: "SoCET",
    description:
      "Architected modular UVM environments for an AMBA AHB-MUX IP, cutting regression runtime by 25% through TLM-based interfaces and automated coverage reporting.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-shell experience-section">
      <div className="site-container two-column-section">
        <div className="section-heading sticky-heading">
          <p className="section-index">02 / Experience</p>
          <h2>Research, verification, teaching.</h2>
        </div>

        <div className="role-list">
          {roles.map((role) => (
            <article className="role-row" key={`${role.role}-${role.period}`}>
              <p className="role-period">{role.period}</p>
              <div>
                <h3>{role.role}</h3>
                <p className="role-company">{role.company}</p>
                <p className="role-description">{role.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
