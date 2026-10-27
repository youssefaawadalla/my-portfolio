import { FaEnvelope } from "react-icons/fa";
import { socials, EMAIL } from "../data/socials";

function Footer() {
  const year = new Date().getFullYear();
  const linkClass =
    "text-white text-lg sm:text-xl transition-all duration-300 hover:-translate-y-1 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded";

  return (
    <footer className="bg-black py-6 text-center text-gray-400">
      <div className="container mx-auto px-4 flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-5">
          {socials.map(({ name, url, icon: Icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className={linkClass}>
              <Icon aria-hidden="true" />
            </a>
          ))}
          <a href={`mailto:${EMAIL}`} aria-label="Email" className={linkClass}>
            <FaEnvelope aria-hidden="true" />
          </a>
        </div>
        <p className="text-sm font-light">
          &copy; {year} <span className="font-semibold text-white">Youssef Awadalla</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;