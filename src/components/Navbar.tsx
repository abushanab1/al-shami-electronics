import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["Home", "Services", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [atTop, setAtTop] = useState(true);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu on scroll
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setAtTop(scrollY < 10);

      for (const id of sections.map((s) => s.toLowerCase())) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { offsetTop, offsetHeight } = el;
        if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLinks = (isMobile = false) =>
    sections.map((section) => {
      const id = section.toLowerCase();
      const isActive = active === id;

      return (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`transition-colors ${
            isActive
              ? "text-black font-semibold underline"
              : "hover:text-black"
          } ${isMobile ? "text-left text-lg" : ""}`}
        >
          {section}
        </button>
      );
    });

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white text-primary z-50 transition-all duration-300 ${
        atTop ? "" : "shadow-md border-b border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Al Shami Electronics</h1>

        <div className="hidden md:flex space-x-6">{renderLinks()}</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col space-y-4">
          {renderLinks(true)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
