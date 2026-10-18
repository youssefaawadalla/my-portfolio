import myPhoto from "../images/myphoto.jpg";
import { 
  SiPython, 
  SiTensorflow, 
  SiPytorch, 
  SiPandas, 
  SiScikitlearn, 
  SiJupyter,
  SiApachespark,
  SiDocker,
  SiGit,
  SiTableau,
  SiPostgresql,
  SiGooglecloud,
  SiAmazon,
  SiFastapi
} from "react-icons/si";
import { FaChartLine, FaDatabase, FaChartBar, FaCloud } from "react-icons/fa";

const dataScienceStack = [
  { name: "Python", icon: <SiPython className="text-[#3776AB]" />, category: "Programming" },
  { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" />, category: "ML/DL" },
  { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" />, category: "ML/DL" },
  { name: "Pandas", icon: <SiPandas className="text-[#150458]" />, category: "Data Manipulation" },
  { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" />, category: "ML/DL" },
  { name: "Apache Spark", icon: <SiApachespark className="text-[#E25A1C]" />, category: "Big Data" },
  { name: "Jupyter", icon: <SiJupyter className="text-[#F37626]" />, category: "Tools" },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, category: "DevOps" },
  { name: "Git", icon: <SiGit className="text-[#F05032]" />, category: "Version Control" },
  { name: "Tableau", icon: <SiTableau className="text-[#E97627]" />, category: "Visualization" },
  { name: "Power BI", icon: <FaChartBar className="text-[#F2C811]" />, category: "Visualization" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, category: "Database" },
  { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" />, category: "Cloud" },
  { name: "AWS", icon: <SiAmazon className="text-[#FF9900]" />, category: "Cloud" },
  { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" />, category: "API" },
];

const About = () => (
  <div className="py-12 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <h2 className="text-4xl text-gray-900 text-center mb-12 font-bold tracking-tight">
      About Me
    </h2>

    <div className="flex flex-col lg:flex-row justify-center items-start gap-12 max-w-6xl mx-auto">
      <div className="w-full lg:w-2/5 text-center lg:text-left">
        <div className="relative inline-block">
          <img
            src={myPhoto}
            alt="Youssef Ahmed Awadalla - Data Scientist"
            className="w-64 h-64 md:w-72 md:h-72 rounded-2xl border-4 border-white shadow-xl object-cover"
          />
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <FaChartLine className="inline mr-2" />
            <span className="font-semibold">Data Scientist</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/5 space-y-8">
        <div className="space-y-6">
          <h3 className="text-3xl text-gray-900 font-bold">
            Transforming Data into Actionable Insights
          </h3>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              I'm <strong>Youssef Ahmed Awadalla</strong>, a passionate Data Scientist based in Giza, Egypt. 
              With a strong foundation in computer science from Ain Shams University, I specialize in 
              bridging the gap between complex data and strategic business decisions.
            </p>
            
            <p className="text-lg">
              My expertise encompasses the entire data lifecycle—from <strong>data collection and cleaning</strong> 
              to <strong>advanced statistical analysis, machine learning model development,</strong> and 
              <strong> intuitive dashboard creation</strong>. I thrive on solving challenging problems 
              through data-driven approaches and building scalable AI solutions.
            </p>
            
            <p className="text-lg">
              I'm particularly skilled in <strong>predictive analytics, natural language processing,</strong> 
              and <strong>computer vision applications</strong>, with experience deploying models in 
              production environments. My work focuses on delivering measurable business impact 
              through rigorous analysis and innovative machine learning techniques.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-2xl text-gray-900 mb-8 font-bold flex items-center gap-3">
            <FaDatabase className="text-blue-600" />
            Data Science & Analytics Stack
          </h3>
          
          <div className="space-y-6">
            {["Programming", "ML/DL", "Data Manipulation", "Big Data", "Visualization", "Database", "Cloud", "Tools", "DevOps"].map(category => (
              <div key={category} className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {dataScienceStack
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <span className="text-xl">
                          {item.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-800">
                          {item.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <p className="text-gray-700 text-sm italic">
              🎯 <strong>Current Focus:</strong> Building end-to-end machine learning pipelines, 
              implementing MLOps practices, and developing interactive data visualization tools 
              that empower data-driven decision making.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;