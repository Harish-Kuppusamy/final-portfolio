import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center px-6 space-y-8">
      {/* Circular Profile Image */}
      <img
        src="/img.webp"
        alt="Harish profile"
        className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-lg "
      />

      {/* Hero Text */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Hey, I'm <span className="text-blue-600">Harish</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          A passionate Full Stack Developer building beautiful and functional
          websites with React, Node.js & MongoDB.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects <ArrowRight size={20} />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-100 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
