import ecommerceImage from '../images/e-commerce.jpg';
import rockpaperscissorsImage from '../images/rock-paper-scissors.png';
import todoImage from '../images/to-do.png';
import weatherAppImage from '../images/weather.png';

function Projects() {
  const projects = [
    {
      title: 'E-commerce App',
      description: 'Developed an e-commerce application using a fake store API to display products and add products to the cart.',
      image: ecommerceImage,
      link: 'https://quick-ecommerce.netlify.app/',
      technologies: ['fab fa-react', 'fab fa-bootstrap'],
    },
    {
      title: 'Rock Paper Scissors',
      description: 'Developed a Rock Paper Scissors game using HTML, CSS, and JavaScript. This project includes interactive buttons and logic to play the game, as well as a reset button to restart the score.',
      image: rockpaperscissorsImage,
      link: 'https://youssefaawadalla.github.io/Rock-Paper-Scissors/',
      technologies: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js'],
    },
    {
      title: 'To-Do List',
      description: 'Created a To-Do List application with features to add new tasks and clear completed ones. The app includes a dynamic list where tasks can be managed effectively.',
      image: todoImage,
      link: 'https://youssefaawadalla.github.io/ToDo-List/',
      technologies: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js'],
    },
    {
      title: 'Weather App',
      description: 'Developed a Weather App that provides the latest weather information for a specified city. Includes features for searching cities, displaying weather conditions, humidity, and wind speed.',
      image: weatherAppImage,
      link: 'https://youssefaawadalla.github.io/Weather-App/',
      technologies: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js'],
    },
  ];

  return (
    <div className="py-10 px-5 sm:px-10 lg:px-20 bg-gray-100">
      <h2 className="text-4xl text-gray-800 text-center mb-10 font-extrabold tracking-wide">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl text-gray-800 font-bold mb-4">{project.title}</h3>
              <div className="flex space-x-4 mb-4">
                {project.technologies.map((tech, idx) => (
                  <i key={idx} className={`${tech} text-2xl`} aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                <i className="fas fa-external-link-alt mr-2" aria-hidden="true"></i> View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="https://github.com/youssefaawadalla" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center justify-center">
          <i className="fab fa-github mr-2" aria-hidden="true"></i> Explore more projects on my GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
