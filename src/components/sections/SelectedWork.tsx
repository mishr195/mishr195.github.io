import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, Check, Code2, FileImage, PlayCircle } from "lucide-react";
import pcieImage from "../../../legacy/assets/pcie_uvm_env.png";
import riscvImage from "../../../legacy/assets/riscv_rtl.png";
import usbImage from "../../../legacy/assets/usb_modelsim.png";

type Project = {
  index: string;
  name: string;
  category: string;
  period: string;
  summary: string;
  image?: StaticImageData;
  imageAlt?: string;
  metrics: Array<{ value: string; label: string }>;
  technologies: string[];
  proof: string;
};

const projects: Project[] = [
  {
    index: "01",
    name: "PCIe Gen3 Endpoint Verification Environment",
    category: "Verification architecture",
    period: "May 2026 — Present",
    summary:
      "A reusable UVM environment for a simplified PCIe endpoint, built around constrained-random stimulus, coverage closure, protocol assertions, and automated regression reporting.",
    image: pcieImage,
    imageAlt:
      "SystemVerilog source for a PCIe endpoint with the UVM environment visible in the project tree",
    metrics: [
      { value: "96%", label: "functional coverage" },
      { value: "60+", label: "constrained-random tests" },
      { value: "42", label: "protocol assertions" },
    ],
    technologies: ["SystemVerilog", "UVM", "SVA", "Python", "ModelSim"],
    proof: "RTL and UVM source structure",
  },
  {
    index: "02",
    name: "5-Stage RISC-V Processor",
    category: "Computer architecture",
    period: "Jan 2026 — May 2026",
    summary:
      "An FPGA-deployed, five-stage pipelined processor with hazard control, forwarding, branch prediction, private caches, and MSI coherence for multicore workloads.",
    image: riscvImage,
    imageAlt:
      "Repository view showing SystemVerilog modules for the RISC-V processor datapath, caches, control, and forwarding logic",
    metrics: [
      { value: "180+", label: "directed and stress tests" },
      { value: "100%", label: "ISA compliance" },
      { value: "3.8×", label: "peak speedup" },
    ],
    technologies: ["SystemVerilog", "RISC-V", "Vivado", "FPGA", "MSI"],
    proof: "RTL module tree",
  },
  {
    index: "03",
    name: "Neural Network Formal Verification Engine",
    category: "Formal methods",
    period: "Apr 2026 — Jul 2026",
    summary:
      "An SMT-backed pipeline that translates ONNX neural networks into Z3 constraints, verifies individual fairness properties, and returns counterexamples for violations.",
    metrics: [
      { value: "25", label: "benchmark networks" },
      { value: "40+", label: "SMT assertions" },
      { value: "Z3", label: "solver backend" },
    ],
    technologies: ["Python", "Z3", "SMT", "ONNX"],
    proof: "Repository or short walkthrough requested",
  },
];

const evidenceLinks = [
  {
    label: "Bike safety system — source",
    href: "https://github.com/arya1106/intelligent-biking-system/tree/twillio-broken-laptop",
    icon: Code2,
  },
  {
    label: "Bike safety system — app walkthrough",
    href: "https://drive.google.com/file/d/1oz-FELO0thZps7BGzQjAqKDcgwUJn6Z4/view?usp=sharing",
    icon: PlayCircle,
  },
  {
    label: "Go-kart telemetry — demo",
    href: "https://drive.google.com/file/d/1f3RC99kUlp4dB3SW_twjNMzRJcC-dyYj/view?usp=sharing",
    icon: PlayCircle,
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="section-shell work-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-index">01 / Selected work</p>
          <h2>Claims backed by artifacts.</h2>
          <p>
            The work matters. The waveform, coverage model, testbench, or demo
            that supports it matters too.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.name}>
              <div className="project-meta">
                <span>{project.index}</span>
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>

              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <dl className="metric-grid">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>

              <div className="project-proof">
                {project.image ? (
                  <figure className="proof-figure">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? ""}
                      sizes="(max-width: 900px) 100vw, 38vw"
                      placeholder="blur"
                    />
                    <figcaption>
                      <Check size={14} /> Verified artifact · {project.proof}
                    </figcaption>
                  </figure>
                ) : (
                  <div className="proof-placeholder" id="proof-request">
                    <div>
                      <FileImage size={22} />
                      <span>Proof slot {project.index}</span>
                    </div>
                    <p>{project.proof}</p>
                    <small>GitHub · YouTube · image · report</small>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="evidence-grid">
          <figure className="evidence-image">
            <Image
              src={usbImage}
              alt="ModelSim waveform verifying the USB 1.1 transmitter RTL"
              sizes="(max-width: 900px) 100vw, 50vw"
              placeholder="blur"
            />
            <figcaption>
              USB 1.1 transmitter · ModelSim waveform
              <a
                href="https://drive.google.com/file/d/1eb5uXpNUHcoF6VkRyFqBSnrwlIvQbAlO/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View block diagram <ArrowUpRight size={14} />
              </a>
            </figcaption>
          </figure>

          <div className="evidence-ledger">
            <p className="ledger-kicker">Additional evidence</p>
            <h3>More builds, with links.</h3>
            <ul>
              {evidenceLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <span>
                        <Icon size={17} /> {link.label}
                      </span>
                      <ArrowUpRight size={16} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
