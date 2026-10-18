import React from "react";

function Footer() {
  return (
    <footer className="bg-black py-3 text-center">
      <p className="text-white text-base">&copy; 2024 - Youssef Awadalla</p>

      <div className="mt-2 flex justify-center">
        <a
          href="https://www.facebook.com/yousefahmedawadalla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="mx-2 text-white text-xl transition-colors duration-300 hover:text-blue-600"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/youssefaawadalla/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="mx-2 text-white text-xl transition-colors duration-300 hover:text-pink-600"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/youssef-ahmed-9a8308269/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="mx-2 text-white text-xl transition-colors duration-300 hover:text-blue-500"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/youssefaawadalla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="mx-2 text-white text-xl transition-colors duration-300 hover:text-gray-800"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="mailto:youssef.ahmed.awadalla@gmail.com"
          aria-label="Mail"
          className="mx-2 text-white text-xl transition-colors duration-300 hover:text-red-600"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
