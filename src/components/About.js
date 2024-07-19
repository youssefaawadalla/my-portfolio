import myPhoto from "../images/myphoto.jpg";

import bootstrapSvg from "../icons/bootstrap-svgrepo-com.svg";
import dotnetSvg from "../icons/dotnet-svgrepo-com.svg";
import gitSvg from "../icons/git-svgrepo-com.svg";
import mongoSvg from "../icons/mongo-svgrepo-com.svg";
import mySqlSvg from "../icons/mysql-logo-svgrepo-com.svg";
import postgresSvg from "../icons/postgresql-svgrepo-com.svg";
import postmanSvg from "../icons/postman-icon-svgrepo-com.svg";
import reactSvg from "../icons/react-svgrepo-com.svg";
import tailwindSvg from "../icons/tailwind-svgrepo-com.svg";
import visualStudioSvg from "../icons/visual-studio-code-svgrepo-com.svg";

const frameworksTechnologiesTools = [
  { name: "React", icon: reactSvg },
  { name: "Bootstrap", icon: bootstrapSvg },
  { name: "Tailwind CSS", icon: tailwindSvg },
  { name: ".NET Core", icon: dotnetSvg },
  { name: "MySQL", icon: mySqlSvg },
  { name: "MongoDB", icon: mongoSvg },
  { name: "PostgreSQL", icon: postgresSvg },
  { name: "Git", icon: gitSvg },
  { name: "Postman", icon: postmanSvg },
  { name: "Visual Studio", icon: visualStudioSvg },
];

const About = () => (
  <div className="py-10 px-5 sm:px-10 lg:px-20 bg-gray-100">
    <h2 className="text-4xl text-gray-800 text-center mb-10 font-extrabold tracking-wide">
      About Me
    </h2>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <img
          src={myPhoto}
          alt="Youssef Ahmed Awadalla"
          className="max-w-full rounded-full border-4 border-white"
        />
      </div>

      <div className="w-full lg:w-2/3">
        <div className="text-gray-700 mb-8 leading-relaxed">
          <p className="text-lg mb-4">
            I am Youssef Ahmed Awadalla, based in Giza, Egypt. I possess a
            strong background in computer science and a passion for developing
            innovative solutions using modern technologies.
          </p>
          <p className="text-lg mb-4">
            I graduated from the Faculty of Computer and Information Sciences at
            Ain Shams University with a Bachelor's degree in Computer Science.
            My education included coursework in Data Structures, Software
            Engineering, Algorithms Analysis, Database Management, Artificial
            Intelligence, Object-Oriented Programming, Machine Learning, and
            Cyber Security.
          </p>
          <p className="text-lg mb-4">
            I have worked on various academic projects across different fields,
            gaining valuable experience in applying theoretical knowledge to
            practical problems.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl text-gray-800 mb-6 font-bold tracking-wide">
            Frameworks, Technologies, and Tools:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {frameworksTechnologiesTools.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white p-3 rounded-xl transition duration-300 transform hover:scale-105"
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="h-8 w-8"
                />
                <p className="text-base font-semibold text-gray-700">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
