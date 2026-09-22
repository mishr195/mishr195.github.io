import { ArrowUpRight, PlayCircle } from "lucide-react";

type Role = {
  period: string;
  role: string;
  company: string;
  description: string;
  evidence?: {
    label: string;
    meta: string;
    href: string;
  };
};

const roles: Role[] = [
  {
    period: "Aug 2026 — Present",
    role: "Graduate Researcher",
    company: "NexSys Lab · Purdue University",
    description:
      "Developing read-locality-aware placement policies for ZNS SSDs in an LLM-assisted storage framework, with NVMeVirt evaluation and planned Cosmos+ OpenSSD validation.",
  },
  {
    period: "Aug 2025 — May 2026",
    role: "Teaching Assistant",
    company: "Purdue University · ECE 270 & ECE 20875",
    description:
      "Mentored students across digital logic, Verilog RTL, finite-state machines, Python, and core machine-learning foundations.",
  },
  {
    period: "Jan 2023 — Present",
    role: "Embedded Systems Lead",
    company: "Dynoco · Purdue Grand Prix",
    description:
      "Designed and integrated STM32 vehicle telemetry spanning IMU, RPM, temperature, and load sensing, real-time sensor fusion, and low-level CAN and SPI communication.",
  },
  {
    period: "Aug 2024 — Apr 2025",
    role: "UVM Verification Engineer",
    company: "SoCET",
    description:
      "Architected a modular UVM environment for an AMBA AHB-MUX IP with drivers, monitors, sequencers, and predictors. Built a 30+ case verification plan spanning reset, arbitration, cache behavior, and system integration; TLM-based interfaces and automated reporting reduced regression runtime by 25%.",
    evidence: {
      label: "Watch my AHB-MUX UVM walkthrough",
      meta: "6:58 · YouTube",
      href: "https://www.youtube.com/watch?v=kSf6jHfj3pY",
    },
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-shell experience-section">
      <div className="site-container two-column-section">
        <div className="section-heading sticky-heading">
          <p className="section-index">02 / Experience</p>
          <h2>Research, verification, embedded systems.</h2>
        </div>

        <div className="role-list">
          {roles.map((role) => (
            <article className="role-row" key={`${role.role}-${role.period}`}>
              <p className="role-period">{role.period}</p>
              <div>
                <h3>{role.role}</h3>
                <p className="role-company">{role.company}</p>
                <p className="role-description">{role.description}</p>
                {role.evidence && (
                  <a
                    className="role-evidence"
                    href={role.evidence.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="role-evidence-icon" aria-hidden="true">
                      <PlayCircle size={18} />
                    </span>
                    <span>
                      <strong>{role.evidence.label}</strong>
                      <small>{role.evidence.meta}</small>
                    </span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
