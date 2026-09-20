import { ArrowUpRight, Code2, FileText, Link, Mail } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "yashsanghamitra@gmail.com",
    href: "mailto:yashsanghamitra@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://linkedin.com/in/yash-mishra-25242a243",
    icon: Link,
  },
  {
    label: "GitHub",
    value: "Browse the code",
    href: "https://github.com/mishr195/Personal-Projects-",
    icon: Code2,
  },
  {
    label: "Résumé",
    value: "Open the current PDF",
    href: "/Yash_Mishra_Resume.pdf",
    icon: FileText,
  },
];

export function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="site-container">
        <div className="contact-heading">
          <p className="section-index">04 / Contact</p>
          <h2>Let&apos;s build something that survives the testbench.</h2>
          <a className="contact-email" href="mailto:yashsanghamitra@gmail.com">
            Start a conversation <ArrowUpRight size={22} />
          </a>
        </div>

        <div className="contact-links">
          {links.map((link) => {
            const Icon = link.icon;
            const external = link.href.startsWith("http");
            return (
              <a
                href={link.href}
                key={link.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                <span className="contact-link-label">
                  <Icon size={17} /> {link.label}
                </span>
                <span>{link.value}</span>
                <ArrowUpRight size={16} />
              </a>
            );
          })}
        </div>

        <div className="footer-line">
          <span>Yash Mishra · Computer Engineer</span>
          <span>West Lafayette, IN</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
