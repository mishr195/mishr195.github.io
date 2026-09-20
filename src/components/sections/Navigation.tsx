import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Profile", href: "#profile" },
];

export function Navigation() {
  return (
    <header className="site-header">
      <div className="site-container nav-inner">
        <a href="#home" className="wordmark" aria-label="Yash Mishra, home">
          Y/M
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="nav-contact" href="mailto:yashsanghamitra@gmail.com">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
