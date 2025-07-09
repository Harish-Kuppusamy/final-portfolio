{/* Importing Icons from React */}

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
   
    SiJavascript,
    SiExpress,
    SiReactrouter

} from "react-icons/si";

const Projects = () => {
  {/* data for listing */}
  const projectList = [
    {
      title: "Bulk Email Sender",
      image: "/bulkmail.png",
      techIcons: [FaReact, FaNodeJs, SiMongodb, SiExpress],
      live: "https://bulkmailapp-flame.vercel.app",
      github: "https://github.com/Harish-Kuppusamy/bulkmailapp",
    },

    {
      title: "Car Rental Platform",
      image: "/cr.png",
      techIcons: [
        FaReact,
        FaNodeJs,
        SiExpress,
        SiMongodb,
        SiReactrouter,
        SiFirebase,
        SiTailwindcss,
        FaGithub,
      ],
      live: "https://carrental-ecommerce.vercel.app",
      github: "https://github.com/Harish-Kuppusamy/carrental-ecommerce",
    },

    {
      title: "Nostra E-Commerce",
      image: "/Nt.png",
      techIcons: [FaHtml5, FaCss3Alt, SiJavascript],
      live: "https://harish-kuppusamy.github.io/Nostra/",
      github: "https://github.com/Harish-Kuppusamy/Nostra",
    },
    {
      title: "Weather Forecast App",
      image: "/wapp.png",
      techIcons: [FaReact, SiTailwindcss],
      live: "https://wapp-self.vercel.app",
      github: "https://github.com/Harish-Kuppusamy/wapp",
    },
  ];

  return (
    <section className="bg-white py-16 px-6" id="projects">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Projects</h2>
{/* Outer Div */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col justify-between"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-300 rounded-2xl"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <div className="flex gap-2 flex-wrap justify-center">
                  {project.techIcons?.map((Icon, i) => (
                    <Icon
                      key={i}
                      className="text-xl text-blue-600"
                      title={Icon.displayName}
                    />
                  ))}
                </div>
{/* links div */}
                <div className="flex justify-between text-sm text-blue-600 font-medium">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
