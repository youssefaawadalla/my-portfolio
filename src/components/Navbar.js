import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock page scroll while the menu is open; close on Escape
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md">
      <div className="container mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-xl md:text-2xl font-bold font-serif tracking-wider hover:text-blue-400 transition-colors duration-300"
        >
          Youssef Awadalla
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 text-base font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden p-2 text-gray-300 hover:text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden bg-black/95 border-b border-white/10 px-6 pt-4 pb-6"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-lg py-2.5 px-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-blue-500 bg-blue-500/10 font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;