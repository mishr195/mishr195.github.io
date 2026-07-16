document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectsModal');
    const btn = document.getElementById('myProjectsBtn');
    const closeBtn = document.querySelector('.close-modal');
    const projectsGrid = document.querySelector('.projects-grid');
    const contactBtn = document.querySelector('.contact-note');

    // Contact Interaction
    contactBtn.addEventListener('click', () => {
        window.location.href = "mailto:mishr195@purdue.edu";
    });

    // Project Data
    const projects = [
        {
            title: "PCIe Gen3 Endpoint Verification Environment",
            description: "<strong>UVM Verification Environment Source Structure</strong><br>Project repository illustrating the modular UVM verification environment for a PCIe Gen3 endpoint. The implementation includes reusable agents, drivers, sequencers, monitors, scoreboards, predictors, assertions, functional coverage, and constrained-random test sequences, alongside the RTL design under verification.<br><br><ul><li>Developed a reusable UVM verification environment for a simplified PCIe endpoint, implementing drivers, monitors, sequencers, scoreboards, and predictors.</li><li>Created 60+ constrained-random testcases and 12 functional covergroups, achieving 96% functional coverage across configuration, memory, and completion transactions.</li><li>Implemented 42 SystemVerilog Assertions (SVA) to verify protocol timing, packet ordering, flow control, and LTSSM transitions.</li><li>Automated regression execution and coverage reporting using Python, reducing verification turnaround by 30% while validating 10,000+ transactions per regression.</li></ul>",
            tags: ["SystemVerilog", "UVM", "SVA", "Python", "ModelSim", "RTL Verification"],
            icon: "fa-microchip",
            image: "assets/pcie_uvm_env.png",
            links: []
        },
        {
            title: "FPGA-Implemented Cache-Coherent Multicore RISC-V System",
            description: "<strong>RTL Source Code Repository</strong><br>GitHub repository containing the SystemVerilog implementation of the pipelined RISCV processor, including datapath, control unit, hazard detection, forwarding logic, caches, memory controller, and multicore support modules.<br><br><ul><li>Designed and implemented a fully pipelined FPGA-based 5-stage RISC-V processor featuring hazard detection, forwarding, stall/flush control, a 2-bit saturating branch predictor, and Branch Target Buffer (BTB).</li><li>Extended the processor with instruction/data caches and an MSI cache-coherent multicore architecture, achieving up to 1.50× speedup for dual-threaded workloads and up to 3.78× improvement over the baseline single-cycle design on memory-intensive benchmarks.</li><li>Verified the design using 180+ directed and stress test cases, including single- and dual-threaded merge sort, achieving 100% ISA compliance through cycle-accurate simulation, differential memory trace comparison, and waveform analysis.</li><li>Synthesized and deployed the processor on FPGA using Vivado, resolving timing violations and validating functionality on hardware through on-board execution and signal inspection.</li><li>Developed a parameterized RTL verification framework for cache and interconnect behavior, validating cache fills, evictions, writebacks, invalidations, snoop transactions, and coherence state transitions across multiple cores.</li></ul>",
            tags: ["Computer Architecture", "SystemVerilog", "RISC-V", "FPGA", "Vivado"],
            icon: "fa-memory",
            image: "assets/riscv_rtl.png",
            links: []
        },
        {
            title: "Intelligent Bike Safety System (Senior Design)",
            description: "<strong>Spark Challenge Second Place Award & Final Presentation</strong><br>Second Place in Purdue ECE's Senior Design Spark Challenge, judged and sponsored by Caterpillar, recognizing outstanding achievement in the design, implementation, and demonstration of the embedded bike safety platform.<br><br><ul><li>Architected embedded safety platform combining IMU-based crash detection, GPS localization, and BLE mobile alerting.</li><li>Designed custom BLE GATT service enabling deterministic 500ms telemetry streaming in multi-threaded RTOS environment.</li><li>Optimized SRAM usage through circular LiDAR buffers and scan-age tracking for stable object detection.</li><li>Led full hardware–software co-design cycle: PCB design, firmware architecture, and mobile application development.</li><li>Winner, Spark Challenge (Senior Design) – Recognized by Caterpillar for system-level reliability.</li></ul>",
            tags: ["Embedded Systems", "ESP32 Microcontrollers", "LiDAR", "RTOS", "BLE"],
            icon: "fa-bicycle",
            image: "assets/bike_safety.png",
            links: [
                { text: "App Design", url: "https://drive.google.com/file/d/1oz-FELO0thZps7BGzQjAqKDcgwUJn6Z4/view?usp=sharing", type: "primary" },
                { text: "View Code", url: "https://github.com/arya1106/intelligent-biking-system/tree/twillio-broken-laptop", type: "secondary" }
            ]
        },
        {
            title: "USB 1.1 Data Communication Controller",
            description: "<strong>ModelSim Verification of USB 1.1 Transmitter RTL</strong><br>ModelSim simulation validating the USB 1.1 transmitter finite state machine, NRZI encoding, packet transmission, CRC generation, and timing behavior.<br><br><ul><li>Designed compliant USB 1.1 transmit and buffering subsystem including NRZI encoding and FIFO staging.</li><li>Built modular verification testbench validating reset recovery and packet timing edge cases.</li><li>Achieved 100% protocol-conformance coverage across 50+ stress scenarios.</li></ul>",
            tags: ["Hardware Verification", "SystemVerilog", "ModelSim", "ASIC Design", "USB"],
            icon: "fa-usb",
            image: "assets/usb_modelsim.png",
            links: [
                { text: "View Diagram", url: "https://drive.google.com/file/d/1eb5uXpNUHcoF6VkRyFqBSnrwlIvQbAlO/view?usp=sharing", type: "primary" }
            ]
        },
        {
            title: "Dynoco Go-Kart Telemetry",
            description: "Real-time telemetry system for go-karts, improving lap times and vehicle stability.",
            tags: ["Sensors", "Data Analysis", "Hardware"],
            icon: "fa-car",
            links: [
                { text: "Watch Video", url: "https://drive.google.com/file/d/1f3RC99kUlp4dB3SW_twjNMzRJcC-dyYj/view?usp=sharing", type: "primary" }
            ]
        },
        {
            title: "32x32 RGB Matrix Memory Game",
            description: "Memory game on a 32x32 RGB matrix with real-time updates, joystick inputs, and SPI OLED display.",
            tags: ["STM32", "C", "Embedded"],
            icon: "fa-gamepad",
            links: [
                { text: "Watch Video", url: "https://drive.google.com/file/d/1pmPkGVYDaDEXkmWJkXsV-NJUuC_oTuMp/view?usp=sharing", type: "primary" }
            ]
        }
    ];

    // Experience Data
    const experience = [
        {
            role: "Teaching Assistant",
            company: "Purdue University",
            location: "West Lafayette, IN",
            period: "Aug 2025 – Present",
            details: [
                "Mentored 120+ students in digital logic design, Verilog-based RTL implementation, FSM design, and sequential circuit analysis, reinforcing theoretical concepts through lab problem-solving.",
                "Led office hours for ECE 20875, explaining core machine learning concepts including Z-score normalization, stochastic gradient descent (SGD), loss functions, and statistical foundations, while guiding Python-based algorithm implementations."
            ]
        },
        {
            role: "UVM Verification Engineer",
            company: "SoCET",
            location: "West Lafayette, IN",
            period: "Aug 2024 – Apr 2025",
            details: [
                "Architected modular UVM verification environments for AHB-MUX IP, implementing drivers, monitors, sequencers, and predictors.",
                "Designed coverage-driven verification strategy reducing pre-silicon escape defects by ~35%.",
                "Developed TLM-based interfaces and constrained-random stimulus generation, cutting regression runtime by 25%.",
                "Automated waveform debugging workflows and coverage reporting pipelines to accelerate root-cause analysis."
            ]
        },
        {
            role: "Software Lead",
            company: "Dynoco – Purdue Grand Prix",
            location: "West Lafayette, IN",
            period: "Jan 2023 – Present",
            details: [
                "Integrated embedded telemetry (IMU, RPM, temp, load sensors) on microcontrollers for a go-kart, improving real-time monitoring accuracy by 20%.",
                "Developed firmware for sensor fusion combining IMU, RPM, temperature, and load data, applied complementary and Kalman filtering, and implemented logging routines, increasing data reliability by 25%.",
                "Optimized microcontroller resources and real-time scheduling, reducing latency and maintaining system stability by 30%."
            ]
        },
        {
            role: "Software Engineering Intern - Data Science Team",
            company: "SPARC Pvt. Ltd",
            location: "India",
            period: "Sep. 2022 – Oct 2022",
            details: [
                "Conducted comprehensive research for the 'Stellar Radius and its Space Applications' project, employing Python and SQL to create and manage geospatial databases.",
                "Generated thematic geo-spatial layers at a 1:10K scale, producing detailed resource inventories from high-resolution satellite images, enhancing data accuracy by 60%.",
                "Enhanced data management and analysis for the SIS-DP project, leveraging Python and SQL to improve data processing speed by 40%."
            ]
        },
        {
            role: "3D Printing Research Intern",
            company: "Anrich3D",
            location: "Singapore",
            period: "May 2022 – June 2022",
            details: [
                "Developed complex 3D printing applications using C++, enhancing the precision and efficiency of the printing process.",
                "Improvised the code files by streamlining 3D printing operations with minimized rapid movements and optimized cutting paths, resulting in a 50% reduction in print time.",
                "Designed and implemented parametric geometric shapes and patterns using mathematical algorithms in C++, significantly improving the complexity and accuracy of printed objects."
            ]
        },
        {
            role: "Engineering Intern - Data Science Team",
            company: "Indira Gandhi Atomic Research Centre",
            location: "India",
            period: "May 2021 – June 2021",
            details: [
                "Gained practical experience with experimental sodium loops used for testing fast reactor components, contributing to the Electromagnetic Design and Analysis section.",
                "Analyzed the performance of liquid sodium as a coolant in fast reactors, leading to a 20% improvement in coolant system efficiency.",
                "Utilized Python and R for data analysis and simulation, integrating findings with hardware testing to optimize reactor design, improving system performance by 25%."
            ]
        },
        {
            role: "Software Engineering Intern - Data Analysis Team",
            company: "Odisha Space Application Center (ORSAC)",
            location: "India",
            period: "March 2021 – June 2021",
            details: [
                "Analyzed spectral signatures of various objects (e.g., vegetation, water bodies) using a spectral radiometer and Python, improving data accuracy by 55%.",
                "Compared field spectral signatures with high-resolution satellite data (e.g., LISS-IV from Resourcesat) using Python for data analysis and visualization, enhancing comparative analysis by 45%.",
                "Managed and analyzed spectral and satellite data, contributing to spatial planning and resource management insights with a 30% increase in data processing efficiency."
            ]
        }
    ];

    // Render Projects
    function renderProjects() {
        projectsGrid.innerHTML = '';
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';

            // Icon mapping (using FontAwesome classes)
            let iconClass = 'fa-code'; // default
            if (project.icon) iconClass = project.icon;

            // Generate links HTML
            let linksHtml = '';
            if (project.links && project.links.length > 0) {
                linksHtml = `<div class="project-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" target="_blank" class="btn-link btn-${link.type}">
                            ${link.type === 'primary' ? '<i class="fas fa-external-link-alt"></i>' : '<i class="fab fa-github"></i>'}
                            ${link.text}
                        </a>
                    `).join('')}
                </div>`;
            }

            let imageHtml = '';
            if (project.image) {
                imageHtml = `<div class="project-image-container" style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
                                <img src="${project.image}" alt="${project.title}" style="max-width: 100%; border-radius: 8px;">
                             </div>`;
            }

            card.innerHTML = `
                <div class="project-header">
                    <div class="project-icon"><i class="fas ${iconClass}"></i></div>
                    <div class="project-title">${project.title}</div>
                </div>
                ${imageHtml}
                <div class="project-desc">${project.description}</div>
                ${linksHtml}
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    // Render Timeline with Scroll Animation
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer) {
        experience.forEach((exp, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item hidden'; // Start hidden
            item.style.transitionDelay = `${index * 100}ms`; // Staggered delay
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-date">${exp.period}</div>
                <div class="timeline-content">
                    <h3>${exp.role}</h3>
                    <h4>${exp.company} <span class="location">| ${exp.location}</span></h4>
                    <ul>
                        ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            `;
            timelineContainer.appendChild(item);
        });

        // Intersection Observer for Scroll Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });
    }

    // My Projects Modal Interaction
    btn.addEventListener('click', () => {
        renderProjects();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Resume Modal Interaction
    const resumeModal = document.getElementById('resumeModal');
    const resumeBtn = document.querySelector('.resume-note');
    const closeResumeBtn = document.querySelector('.close-resume');

    resumeBtn.addEventListener('click', () => {
        resumeModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeResumeBtn.addEventListener('click', () => {
        resumeModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Stats Modal Interaction
    const statsModal = document.getElementById('statsModal');
    const statsBtn = document.getElementById('statsBtn');
    const closeStatsBtn = document.querySelector('.close-stats');

    statsBtn.addEventListener('click', () => {
        statsModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeStatsBtn.addEventListener('click', () => {
        statsModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        if (event.target === resumeModal) {
            resumeModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        if (event.target === statsModal) {
            statsModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    themeToggle.addEventListener('click', () => {
        let theme = 'light';
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            theme = 'dark';
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', theme);
    });
});
