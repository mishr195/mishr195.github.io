export type TimelineEventType = "experience" | "education" | "project";

export interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  date: string;
  title: string;
  organization: string;
  technologies: string[];
  summary: string;
  details?: {
    problem?: string;
    architecture?: string;
    challenges?: string;
    results?: string;
    github?: string;
  };
}

export const timelineData: TimelineEvent[] = [
  {
    id: "ms-purdue",
    type: "education",
    date: "Aug 2026 – May 2027",
    title: "Master of Science in Computer Engineering",
    organization: "Purdue University",
    technologies: ["AI", "Compilers", "Advanced Computer Architecture"],
    summary: "Pursuing advanced studies focused on AI, Compilers, and Architecture.",
  },
  {
    id: "smt-nn-verification",
    type: "project",
    date: "Apr 2026 – Jul 2026",
    title: "SMT-Based Neural Network Formal Verification Engine",
    organization: "Project",
    technologies: ["Python", "Z3", "SMT", "ONNX"],
    summary: "Developed an SMT-backed verification engine translating ONNX models to Z3 constraints.",
    details: {
      problem: "Neural networks lack formal guarantees, making them unpredictable in critical applications.",
      architecture: "Translates ONNX computational graphs into SMT constraints solved via Z3.",
      challenges: "Handling the state-space explosion for deep networks and modeling non-linear activations.",
      results: "Evaluated across 25 benchmark networks, successfully verifying individual fairness properties and generating counterexamples."
    }
  },
  {
    id: "pcie-gen3-endpoint",
    type: "project",
    date: "May 2026 – Present",
    title: "PCIe Gen3 Endpoint Verification Environment",
    organization: "Project",
    technologies: ["SystemVerilog", "UVM", "SVA", "Python", "ModelSim"],
    summary: "Developed a reusable UVM environment for a simplified PCIe endpoint.",
    details: {
      problem: "Validating PCIe endpoint functionality against strict protocol requirements.",
      architecture: "UVM topology with drivers, monitors, sequencers, scoreboards, and predictors.",
      challenges: "Ensuring 100% compliance with LTSSM transitions and packet ordering.",
      results: "Achieved 96% functional coverage across configuration, memory, and completion transactions with 60+ constrained-random testcases."
    }
  },
  {
    id: "riscv-processor",
    type: "project",
    date: "Jan 2026 – May 2026",
    title: "FPGA-Implemented 5-Stage RISC-V Processor",
    organization: "Project",
    technologies: ["SystemVerilog", "Vivado", "ModelSim", "FPGA Design"],
    summary: "Designed an FPGA-based 5-stage pipelined RISC-V processor with MSI cache coherence.",
    details: {
      problem: "Building a fully functional, pipelined processor from scratch capable of running complex workloads.",
      architecture: "5-stage pipeline with hazard detection, forwarding, BTB, and private caches.",
      challenges: "Resolving timing violations during FPGA synthesis and implementing MSI cache coherence.",
      results: "Achieved 100% ISA compliance and a 3.8× speedup over a baseline single-cycle design."
    }
  },
  {
    id: "teaching-assistant",
    type: "experience",
    date: "Aug 2025 – Present",
    title: "Teaching Assistant (ECE 270 & ECE 20875)",
    organization: "Purdue University",
    technologies: ["Verilog", "RTL Design", "Python", "Machine Learning"],
    summary: "Mentoring 120+ students in digital logic design and Python-based machine learning.",
    details: {
      problem: "Helping students grasp foundational hardware and data science concepts.",
      results: "Guided implementations of FSMs in Verilog and ML algorithms like SGD in Python."
    }
  },
  {
    id: "usb-controller",
    type: "project",
    date: "Mar 2025 – May 2025",
    title: "USB 1.1 RTL Controller",
    organization: "Project",
    technologies: ["SystemVerilog", "Quartus", "ModelSim", "ASIC Design"],
    summary: "Designed RTL FSMs and control logic for a USB 1.1 controller.",
    details: {
      architecture: "Transmit subsystem with NRZI encoding, bit stuffing, CRC generation, and FIFO buffering.",
      challenges: "Debugging protocol/timing issues to meet strict USB specifications.",
      results: "Achieved 100% protocol-conformance coverage across 50+ scenarios."
    }
  },
  {
    id: "socet-uvm",
    type: "experience",
    date: "Aug 2024 – Apr 2025",
    title: "UVM Verification Engineer",
    organization: "SoCET",
    technologies: ["UVM", "SystemVerilog", "TLM"],
    summary: "Architected modular UVM verification environments for an AMBA AHB-MUX IP.",
    details: {
      problem: "Reducing pre-silicon escape defects in complex IP cores.",
      architecture: "Coverage-driven verification using TLM-based interfaces and constrained-random stimulus.",
      results: "Cut regression runtime by 25% and reduced pre-silicon escape defects by ~35%."
    }
  },
  {
    id: "ai-inventory",
    type: "project",
    date: "Dec 2024 – Present",
    title: "AI-Powered Inventory and Food Planner",
    organization: "Project",
    technologies: ["Python", "OCR", "Generative AI", "Gemini-1.5"],
    summary: "Automated inventory management and recipe generation using OCR and Gemini.",
    details: {
      architecture: "Extracts text via pytesseract and classifies items using Google's Generative AI.",
      results: "Enabled real-time updates and smart recipe recommendations based on scanned receipts."
    }
  },
  {
    id: "bike-safety",
    type: "project",
    date: "Aug 2024 – Jan 2025",
    title: "Intelligent Bike Safety System",
    organization: "Senior Design",
    technologies: ["ESP32", "Zephyr RTOS", "BLE", "Flutter"],
    summary: "Architected embedded safety platform combining IMU crash detection and BLE alerts.",
    details: {
      architecture: "Custom BLE GATT service for 500ms telemetry streaming in a multi-threaded RTOS.",
      challenges: "Optimizing SRAM usage for stable object detection via circular LiDAR buffers.",
      results: "Winner of the Spark Challenge; recognized by Caterpillar for system-level reliability."
    }
  },
  {
    id: "bs-purdue",
    type: "education",
    date: "Aug 2023 – May 2026",
    title: "Bachelor of Science in Computer Engineering",
    organization: "Purdue University",
    technologies: ["ASIC Design", "UVM", "Computer Architecture", "C/C++"],
    summary: "GPA: 3.67/4.00, Dean’s List, Semester Honors.",
  },
  {
    id: "dynoco-lead",
    type: "experience",
    date: "Jan 2023 – Present",
    title: "Software Lead",
    organization: "Dynoco - Purdue Grand Prix",
    technologies: ["Embedded C", "Sensor Fusion", "Kalman Filtering"],
    summary: "Integrated embedded telemetry for a go-kart, improving monitoring accuracy by 20%.",
    details: {
      architecture: "Firmware for sensor fusion combining IMU, RPM, and load data using complementary filters.",
      results: "Optimized real-time scheduling, reducing latency by 30%."
    }
  },
  {
    id: "sparc-intern",
    type: "experience",
    date: "Sep 2022 – Oct 2022",
    title: "Software Engineering Intern - Data Science",
    organization: "SPARC",
    technologies: ["Python", "SQL", "Geospatial Data"],
    summary: "Created and managed geospatial databases for the 'Stellar Radius' project.",
    details: {
      results: "Improved data processing speed by 40% and enhanced resource inventory accuracy by 60%."
    }
  },
  {
    id: "igcar-intern",
    type: "experience",
    date: "May 2022 – Jun 2022",
    title: "Engineering Intern - Data Science",
    organization: "Indira Gandhi Atomic Research Centre",
    technologies: ["Python", "R", "Simulation"],
    summary: "Analyzed performance of liquid sodium as a coolant in fast reactors.",
    details: {
      results: "Led to a 20% improvement in coolant system efficiency via data analysis and simulation."
    }
  },
  {
    id: "orsac-intern",
    type: "experience",
    date: "Mar 2021 – Jun 2021",
    title: "Software Engineering Intern - Data Analysis",
    organization: "ORSAC",
    technologies: ["Python", "Data Visualization"],
    summary: "Analyzed spectral signatures of various objects using high-resolution satellite data.",
    details: {
      results: "Enhanced comparative analysis by 45% and improved processing efficiency by 30%."
    }
  }
];
