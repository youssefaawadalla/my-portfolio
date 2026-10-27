import myPhoto from "../images/myphoto.jpg";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiApachespark,
  SiDocker,
  SiGit,
  SiTableau,
  SiPostgresql,
  SiGooglecloud,
  SiFastapi,
  SiTailwindcss,
} from "react-icons/si";

import {
  FaGraduationCap,
  FaDatabase,
  FaChartBar,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaCode,
  FaFlask,
  FaLinux,
  FaServer,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Web development & software engineering",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: FaFlask, color: "#FFFFFF" },
      { name: "REST APIs", icon: FaServer, color: "#8B5CF6" },
      { name: "OOP", icon: FaCode, color: "#60A5FA" },
    ],
  },
  {
    title: "Data science & machine learning",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Pandas", icon: SiPandas, color: "#E70488" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
    ],
  },
  {
    title: "Data engineering, databases & analytics",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "SQL", icon: FaDatabase, color: "#38BDF8" },
      { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
      { name: "Tableau", icon: SiTableau, color: "#E97627" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
    ],
  },
  {
    title: "Cloud, DevOps & tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
    ],
  },
];

const About = () => (
  <section className="min-h-screen bg-black text-white pt-28 pb-16 px-6 sm:px-10 lg:px-20">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mb-16">
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500" />
            <img
              src={myPhoto}
              alt="Youssef Ahmed Awadalla"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-zinc-700 object-cover shadow-2xl"
            />
          </div>
        </div>

       
        <div className="w-full lg:w-3/5 space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg max-w-prose">
          <p>
            I’m Youssef Ahmed Awadalla, and I’m based in Giza, Egypt. 
            I have a strong passion for creating innovative digital solutions.
          </p>
          <p>
            I enjoy transforming complex challenges into streamlined, user-focused applications. 
            Whether I'm designing scalable software or exploring data-driven models, 
            I am passionate about continuous learning and developing technology that creates a meaningful impact.
          </p>

          <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl flex items-start gap-4 text-sm sm:text-base shadow-md">
            <FaGraduationCap className="text-2xl text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-white font-bold mb-0.5">Bachelor's Degree in Computer Science</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Faculty of Computer and Information Sciences, Ain Shams University
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-xl">
        <h3 className="text-2xl mb-8 font-bold flex items-center gap-3 border-b border-zinc-800 pb-4">
          <FaDatabase className="text-blue-500" aria-hidden="true" />
          Skills
        </h3>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-gray-400 mb-3">{group.title}</h4>
              <ul className="flex flex-wrap gap-3">
                {group.items.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5 bg-zinc-950/80 px-4 py-2.5 rounded-xl border border-zinc-800"
                  >
                    <Icon className="text-xl" style={{ color }} aria-hidden="true" />
                    <span className="text-sm font-medium text-gray-200">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;