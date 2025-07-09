import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extralight text-gray-800">Harish</h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-semibold">
          {["Home", "Projects", "BlogDetail", "Contact"].map((item, idx) => (
            <li key={idx}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={toggleNav}>
          {navOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden bg-white/90 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-semibold">
            {["Home", "Projects","BlogDetail", "Contact"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={toggleNav}
                  className="block py-1 cursor-pointer border-gray-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
