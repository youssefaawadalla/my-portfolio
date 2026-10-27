import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaJs, FaPython, FaChartBar } from "react-icons/fa";
import ecommerceImage from "../images/e-commerce.jpg";
import rockpaperscissorsImage from "../images/rock-paper-scissors.png";
import todoImage from "../images/to-do.png";
import weatherAppImage from "../images/weather.png";
import loanImage from "../images/loan.jpg"
import fifaImage from "../images/fifa.jpg"
import jobSalaries from "../images/job salaries.jpg"
import smartphones from "../images/smartphones.jpg"

const react = { name: "React", icon: FaReact, color: "text-cyan-400" };
const bootstrap = { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" };
const html = { name: "HTML5", icon: FaHtml5, color: "text-orange-500" };
const css = { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" };
const js = { name: "JavaScript", icon: FaJs, color: "text-yellow-400" };
const python = { name: "Python", icon: FaPython, color: "text-sky-400" };
const powerbi = { name: "Power BI", icon: FaChartBar, color: "text-yellow-400" };

export const categories = [
  { id: "ml", title: "AI & machine learning" },
  { id: "dashboards", title: "Dashboards" },
  { id: "web", title: "Web projects" },
];

export const projects = [
  {
    category: "ml",
    title: "FIFA 2019 Player Value Estimation",
    description: "Machine learning models predict the market value of football players using the FIFA 19 dataset. Two models have been developed and compared: multiple linear regression and second-degree polynomial regression.",
    image: fifaImage,
    link: null,
    code: "https://github.com/youssefaawadalla/FIFA-2019-Player-Value-Estimation",
    technologies: [python],
  },
  {
    category: "ml",
    title: "Loan Prediction",
    description: "Machine learning classification predicts whether a loan application will be approved by using logistic regression, Support Vector Machines (SVM), and the Decision Tree ID3, while comparing their results.",
    image: loanImage,
    link: null,
    code: "https://github.com/youssefaawadalla/Loan-Prediction-Project",
    technologies: [python],
  },

  {
    category: "dashboards",
    title: "Data Engineering Salary Insights Dashboard",
    description: "This interactive Power BI dashboard analyses data engineering salary trends from 2020 to 2025, exploring how salaries vary by experience level, job role, location, company size, and work model. It transforms and standardises raw data using Power Query to deliver clear, data-driven insights for salary benchmarking and global labour market analysis.",
    image: jobSalaries,
    link: null,
    code: "https://github.com/youssefaawadalla/Data-Engineering-Salary-Insights-Dashboard",
    technologies: [powerbi],
  },
  {
    category: "dashboards",
    title: "Smartphones Power BI Dashboard",
    description: "This interactive Power BI dashboard analyses the smartphone market, highlighting pricing trends, brand comparisons, and the impact of performance, display, camera, and connectivity features on price and ratings. It transforms raw smartphone data into meaningful insights through data cleaning, feature extraction, and interactive visualisations to support data-driven analysis.",
    image: smartphones,
    link: null,
    code: "https://github.com/youssefaawadalla/Smartphones-Power-BI-Dashboard",
    technologies: [powerbi],
  },

  {
    category: "web",
    title: "E-commerce App",
    description: "Online store that loads products from the Fake Store API and lets you add them to a shopping cart.",
    image: ecommerceImage,
    link: "https://quick-ecommerce.netlify.app/",
    code: null,
    technologies: [react, bootstrap],
  },
  {
    category: "web",
    title: "Rock Paper Scissors",
    description: "Browser game with live score tracking and a reset button to start a new match.",
    image: rockpaperscissorsImage,
    link: "https://youssefaawadalla.github.io/Rock-Paper-Scissors/",
    code: "https://github.com/youssefaawadalla/Rock-Paper-Scissors",
    technologies: [html, css, js],
  },
  {
    category: "web",
    title: "To-Do List",
    description: "Task manager where you add tasks, mark them done, and clear all completed tasks at once.",
    image: todoImage,
    link: "https://youssefaawadalla.github.io/ToDo-List/",
    code: "https://github.com/youssefaawadalla/ToDo-List",
    technologies: [html, css, js],
  },
  {
    category: "web",
    title: "Weather App",
    description: "Search any city to see current weather, humidity, and wind speed.",
    image: weatherAppImage,
    link: "https://youssefaawadalla.github.io/Weather-App/",
    code: "https://github.com/youssefaawadalla/Weather-App",
    technologies: [html, css, js],
  },
];