import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import backgroundImage from "../images/background.jpg";
import cv from "../Documents/CV.pdf";
import { socials } from "../data/socials";

function Home() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white pt-20 md:pt-24 px-4 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div className="relative max-w-4xl p-6 md:p-12 text-center z-10 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-4 drop-shadow-lg">
          Hello, I’m <span className="text-blue-500">Youssef</span>
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold uppercase tracking-wider mb-4 text-gray-300 drop-shadow-md max-w-3xl">
          Software Engineer &amp; Data Scientist
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            to="/projects"
            className="inline-flex items-center py-3.5 px-8 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg shadow-blue-600/30 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View my projects
          </Link>
          <a
            href={cv}
            download="Youssef_Awadalla_CV.pdf"
            className="inline-flex items-center gap-2 py-3.5 px-8 border border-white/40 hover:border-white hover:bg-white/10 text-white text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Download CV</span>
            <FaDownload className="text-sm" aria-hidden="true" />
          </a>
        </div>

        <div className="flex justify-center items-center gap-4 sm:gap-5">
          {socials
            .map(({ name, url, icon: Icon, color }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                style={{ color }}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-xl sm:text-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;