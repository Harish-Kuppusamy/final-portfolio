import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Left - Copyright */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Harish K. All rights reserved.
        </p>

        {/* Center - Navigation Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/Harish-Kuppusamy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harish-k-121735250/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ksharishcs20@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
