import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, Code2, FileText, PlayCircle } from "lucide-react";
import pcieImage from "../../../legacy/assets/pcie_uvm_env.png";
import riscvImage from "../../../legacy/assets/riscv_rtl.png";
import usbImage from "../../../legacy/assets/usb_modelsim.png";

type EvidenceLink = {
  label: string;
  href: string;
  kind: "Source" | "Walkthrough" | "Demo" | "Diagram";
};

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
  repository?: {
    href: string;
    name: string;
    description?: string;
    folders?: string[];
  };
  links?: EvidenceLink[];
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
    repository: {
      href: "https://github.com/mishr195/pcie3-genpoint",
      name: "mishr195/pcie3-genpoint",
    },
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
    proof: "SMT fairness verification source",
    repository: {
      href: "https://github.com/mishr195/smt-ml-fairness",
      name: "mishr195/smt-ml-fairness",
      description:
        "ONNX and JSON models compiled into Z3 constraints for individual-fairness proofs and counterexamples.",
      folders: ["src", "tests", "models", "docs"],
    },
  },
  {
    index: "04",
    name: "Intelligent Bike Safety System",
    category: "Embedded systems · Team lead",
    period: "Aug 2025 — Jan 2026",
    summary:
      "An embedded safety platform integrating LiDAR, IMU, GPS, and BLE for collision detection, crash notification, and rider assistance, delivered through a complete hardware–software co-design cycle.",
    metrics: [
      { value: "500 ms", label: "BLE telemetry interval" },
      { value: "ESP32", label: "embedded platform" },
      { value: "Winner", label: "Spark Challenge" },
    ],
    technologies: ["ESP32", "Zephyr RTOS", "BLE GATT", "LiDAR", "Flutter"],
    proof: "Firmware and mobile prototype",
    links: [
      {
        label: "Browse embedded source",
        href: "https://github.com/arya1106/intelligent-biking-system/tree/twillio-broken-laptop",
        kind: "Source",
      },
      {
        label: "View app walkthrough",
        href: "https://drive.google.com/file/d/1oz-FELO0thZps7BGzQjAqKDcgwUJn6Z4/view?usp=sharing",
        kind: "Walkthrough",
      },
    ],
  },
  {
    index: "05",
    name: "USB 1.1 Data Communication Controller",
    category: "ASIC / RTL design",
    period: "Mar 2025 — May 2025",
    summary:
      "A compliant transmit and buffering subsystem with NRZI encoding, FIFO staging, and a modular verification testbench covering reset recovery and packet-timing edge cases.",
    image: usbImage,
    imageAlt: "ModelSim waveform verifying the USB 1.1 transmitter RTL",
    metrics: [
      { value: "100%", label: "protocol coverage" },
      { value: "50+", label: "stress scenarios" },
      { value: "USB 1.1", label: "protocol target" },
    ],
    technologies: ["SystemVerilog", "Quartus", "ModelSim", "NRZI", "ASIC design"],
    proof: "ModelSim transmitter waveform",
    links: [
      {
        label: "View block diagram",
        href: "https://drive.google.com/file/d/1eb5uXpNUHcoF6VkRyFqBSnrwlIvQbAlO/view?usp=sharing",
        kind: "Diagram",
      },
    ],
  },
  {
    index: "06",
    name: "Dynoco Go-Kart Telemetry",
    category: "Embedded systems lead",
    period: "Jan 2023 — Present",
    summary:
      "STM32-based vehicle telemetry integrating IMU, RPM, temperature, and load sensors, with real-time sensor fusion and low-level CAN and SPI communication between subsystems.",
    metrics: [
      { value: "25%", label: "higher data reliability" },
      { value: "30%", label: "lower system latency" },
      { value: "STM32", label: "control platform" },
    ],
    technologies: ["STM32", "Embedded C", "CAN", "SPI", "Kalman filtering"],
    proof: "Vehicle telemetry demonstration",
    links: [
      {
        label: "Watch telemetry demo",
        href: "https://drive.google.com/file/d/1f3RC99kUlp4dB3SW_twjNMzRJcC-dyYj/view?usp=sharing",
        kind: "Demo",
      },
    ],
  },
];

function LinkIcon({ kind }: { kind: EvidenceLink["kind"] }) {
  if (kind === "Source") return <Code2 size={18} />;
  if (kind === "Diagram") return <FileText size={18} />;
  return <PlayCircle size={18} />;
}

function ProjectProof({ project }: { project: Project }) {
  if (project.image) {
    const directLink = project.repository?.href ?? (project.links?.length === 1 ? project.links[0].href : undefined);
    const actionLabel = project.repository
      ? "Open repository"
      : project.links?.length === 1
        ? project.links[0].label
        : undefined;

    const figure = (
      <figure className="proof-figure">
        <Image
          src={project.image}
          alt={project.imageAlt ?? ""}
          sizes="(max-width: 900px) 100vw, 38vw"
          placeholder="blur"
        />
        <figcaption>
          <span>{project.proof}</span>
          {actionLabel && (
            <span className="proof-caption-action">
              {actionLabel} <ArrowUpRight size={14} />
            </span>
          )}
        </figcaption>
      </figure>
    );

    return directLink ? (
      <a
        className="proof-link"
        href={directLink}
        target="_blank"
        rel="noreferrer"
        aria-label={actionLabel}
      >
        {figure}
      </a>
    ) : (
      figure
    );
  }

  if (project.repository) {
    return (
      <a
        className="repository-card"
        href={project.repository.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.repository.name} on GitHub`}
      >
        <div className="repository-card-topline">
          <span>
            <Code2 size={18} /> Public repository
          </span>
          <ArrowUpRight size={18} />
        </div>
        <div>
          <p className="repository-name">{project.repository.name}</p>
          <p className="repository-description">{project.repository.description}</p>
        </div>
        {project.repository.folders && (
          <ul className="repository-folders" aria-label="Repository folders">
            {project.repository.folders.map((folder) => (
              <li key={folder}>{folder}/</li>
            ))}
          </ul>
        )}
      </a>
    );
  }

  if (project.links) {
    return (
      <div className="resource-card">
        <div className="resource-card-heading">
          <span>{project.proof}</span>
          <Code2 size={18} />
        </div>
        <ul className="resource-links">
          {project.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <span>
                  <LinkIcon kind={link.kind} />
                  <small>{link.kind}</small>
                  {link.label}
                </span>
                <ArrowUpRight size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

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
                <ProjectProof project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
