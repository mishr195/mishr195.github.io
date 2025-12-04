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
            title: "Intelligent Bike Safety System",
            description: "Integrated safety platform with car detection, crash detection, and rider communication using ESP32/NRF52 and LiDAR.",
            tags: ["Embedded Systems", "LiDAR", "ESP32", "C++"],
            icon: "fa-bicycle",
            links: [
                { text: "App Design", url: "https://drive.google.com/file/d/1oz-FELO0thZps7BGzQjAqKDcgwUJn6Z4/view?usp=sharing", type: "primary" },
                { text: "View Code", url: "https://github.com/arya1106/intelligent-biking-system/tree/twillio-broken-laptop", type: "secondary" }
            ]
        },
        {
            title: "USB Data Communication System",
            description: "Implemented USB TX and Data Buffer modules for USB 1.1 packet transmission using NRZI encoding and FIFO buffering.",
            tags: ["SystemVerilog", "FPGA", "Quartus"],
            icon: "fa-usb",
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
        },
        {
            title: "AI-Powered Inventory Planner",
            description: "OCR + Generative AI pipeline to classify receipt items and update inventory automatically.",
            tags: ["Python", "AI", "OCR", "Gemini API"],
            icon: "fa-robot",
            links: []
        },
        {
            title: "Image Processing Pipeline",
            description: "Python-based pipeline for grayscale conversion, Gaussian filtering, and image blending.",
            tags: ["Python", "NumPy", "Matplotlib"],
            icon: "fa-image",
            links: [
                { text: "View Code", url: "https://github.com/mishr195/Personal-Projects-/tree/main/Image%20Blender", type: "secondary" }
            ]
        }
    ];

    // Experience Data
    const experience = [
        {
            role: "Teaching Assistant",
            company: "Purdue University",
            location: "West Lafayette, Indiana",
            period: "August 2025 – Present",
            details: [
                "Guiding 120+ students in Python, MATLAB, Excel, and circuit analysis, and helping them increase their lab completion and course performance.",
                "Organized review sessions and developed supplemental materials bridging theory and hardware applications."
            ]
        },
        {
            role: "UVM Verification",
            company: "SoCET",
            location: "West Lafayette, Indiana",
            period: "August 2024 – April 2025",
            details: [
                "Designed and implemented UVM testbenches for AHB-MUX, covering drivers, monitors, sequences, predictors, and scoreboard, reducing functional bugs by 30–40% pre-synthesis.",
                "Developed TLM interfaces and coverage-driven verification strategies, improving verification efficiency and reducing regression runtime by 25%."
            ]
        },
        {
            role: "Research and Development Lead",
            company: "Dynoco, Purdue Grand Prix",
            location: "West Lafayette, Indiana",
            period: "January 2023 – Present",
            details: [
                "Integrated advanced go-kart sensors for real-time telemetry, improving lap times by 15–20% and vehicle stability.",
                "Engineered a custom wheel and axle system, enhancing load distribution and cornering precision, resulting in 10% increase in cornering efficiency."
            ]
        },
        {
            role: "Software Engineering Intern - Data Science Team",
            company: "SPARC Pvt. Ltd",
            location: "India",
            period: "Sep. 2022 – October 2022",
            details: [
                "Conducted comprehensive research for the ”Stellar Radius and its Space Applications” project, employing Python and SQL to create and manage geospatial databases.",
                "Generated thematic geo-spatial layers at a 1:10K scale, producing detailed resource inventories (e.g., water sources, road networks) from high-resolution satellite images, enhancing data accuracy by 60%.",
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

            card.innerHTML = `
                <div class="project-header">
                    <div class="project-icon"><i class="fas ${iconClass}"></i></div>
                    <div class="project-title">${project.title}</div>
                </div>
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
