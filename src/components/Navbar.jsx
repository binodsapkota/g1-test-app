import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Quiz", path: "/quiz" },
    { label: "About", path: "/about" },
    { label: "Support", path: "/support" }
  ];

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-indigo-600">
          G1 Practice App
        </Link>
        <div className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-indigo-600 ${
                pathname === item.path ? "text-indigo-600 font-medium" : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
