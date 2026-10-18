import backgroundImage from "../images/background.jpg";
import cv from "../Documents/CV.pdf";

function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white pt-18"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-5xl p-8 md:p-12 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4 md:mb-6 text-white drop-shadow-md">
          Hello, I'm Youssef
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide mb-8 text-gray-300 drop-shadow-md">
          Data Science & Artificial Intelligence Engineer
        </h2>

        <div className="flex justify-center items-center mb-8 space-x-4">
          <a
            href="https://www.facebook.com/yousefahmedawadalla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-600 text-3xl rounded-full bg-white p-4 shadow-lg hover:bg-blue-100 transition-colors duration-300"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/youssefaawadalla/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-600 text-3xl rounded-full bg-white p-4 shadow-lg hover:bg-pink-100 transition-colors duration-300"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-ahmed-9a8308269/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-500 text-3xl rounded-full bg-white p-4 shadow-lg hover:bg-blue-100 transition-colors duration-300"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/youssefaawadalla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-800 text-3xl rounded-full bg-white p-4 shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
            <span className="sr-only">GitHub</span>
          </a>
        </div>

        <a
          href={cv}
          className="inline-block py-3 px-8 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Home;
