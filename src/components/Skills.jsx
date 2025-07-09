const skills = [
  { name: "HTML", icon: "/logos/html-logo.webp" },
  { name: "CSS", icon: "/logos/css-logo.webp" },
  { name: "JavaScript", icon: "/logos/javascript-logo.webp" },
  { name: "React", icon: "/logos/react-logo.webp" },
  { name: "Tailwind CSS", icon: "/logos/Tailwind CSS.png" },
  { name: "Node.js", icon: "/logos/node-logo.webp" },
  { name: "Express.js", icon: "/logos/ep.png" },
  { name: "MongoDB", icon: "/logos/md.png" },
  { name: "Firebase", icon: "/logos/fb.png" },
  { name: "Git", icon: "/logos/Git.png" },
  { name: "GitHub", icon: "/logos/GitHub.png" },
  { name: "vs Code", icon: "/logos/vs.png" },
  { name: "Vercel", icon: "/logos/vc.png" },
];

const Skills = () => {
  return (
    <section className="bg-blue-50 py-16 px-6" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Skills</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <p className="text-sm text-gray-700 mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
