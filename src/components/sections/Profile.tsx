const skillGroups = [
  {
    label: "Verification",
    skills: ["UVM", "SVA", "Constrained-random", "Coverage", "TLM", "Formal verification"],
  },
  {
    label: "Digital design",
    skills: ["SystemVerilog", "RTL", "RISC-V", "Pipelined CPUs", "FSMs", "FPGA implementation"],
  },
  {
    label: "Software",
    skills: ["Python", "C", "C++", "MATLAB", "Git", "Linux"],
  },
  {
    label: "Embedded",
    skills: ["STM32", "ESP32", "Zephyr RTOS", "BLE", "Sensor integration", "Interrupts"],
  },
];

export function Profile() {
  return (
    <section id="profile" className="section-shell profile-section">
      <div className="site-container profile-grid">
        <div className="profile-copy">
          <p className="section-index">03 / Profile</p>
          <h2>Engineer across the hardware–software boundary.</h2>
          <p>
            I work best where correctness is measurable: a protocol assertion
            passes, a coverage gap closes, a processor survives a stress test,
            or an embedded system keeps behaving under real constraints.
          </p>

          <div className="education-block">
            <p className="education-label">Education</p>
            <h3>Purdue University</h3>
            <p>M.S. Computer Engineering · Aug 2026 — Dec 2027</p>
            <p>B.S. Computer Engineering · Aug 2023 — May 2026</p>
            <p className="education-note">3.67 GPA · Dean&apos;s List · Semester Honors</p>
          </div>
        </div>

        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div className="skill-row" key={group.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{group.label}</h3>
                <p>{group.skills.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
