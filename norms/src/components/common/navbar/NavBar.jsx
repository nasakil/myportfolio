import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/plswork.png";

const navItems = [
  { id: 1, name: "Home",      url: "introduction" },
  { id: 2, name: "About",     url: "profile" },
  { id: 3, name: "Tech Stack",url: "tech-stack" },
  { id: 4, name: "What I Do", url: "profession" },
  { id: 5, name: "Portfolio", url: "portfolio" },
  { id: 6, name: "Gallery",   url: "gallery" },
];

const NAVBAR_HEIGHT = 90; // adjust this if your navbar is taller or shorter

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [active, setActive] = useState("introduction");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
      navItems.forEach((item) => {
        const el = document.getElementById(item.url.toLowerCase());
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 150 && top + el.offsetHeight > 150) {
            setActive(item.url.toLowerCase());
          }
        }
      });

      // clear active when reaching contact section
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        const top = contactEl.getBoundingClientRect().top;
        if (top <= 150) {
          setActive("");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (url) => {
    const el = document.getElementById(url.toLowerCase());
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(url.toLowerCase());
    }
  };

  const handleScrollLink = (url) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection(url), 100);
    } else {
      scrollToSection(url);
    }
  };

  const menu = navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <button
        onClick={() => handleScrollLink(item.url)}
        className={`px-5 py-3 mx-1 font-medium ${
          active === item.url.toLowerCase()
            ? "bg-[#456882] text-white rounded"
            : "hover:text-picto-primary"
        }`}
      >
        {item.name}
      </button>
    </li>
  ));

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content rounded-box z-1 mt-3 w-42 p-2   shadow font-semibold flex-nowrap bg-white text-black"
            >
              {menu}
            </ul>
          </div>

          <button
            onClick={() => handleScrollLink("introduction")}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <img src={logo} className="h-7 sm:h-10 md:h-14 lg:h-18 rounded-full mr-5" alt="logo" />
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Digital Norms
            </p>
          </button>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <button
            className="btn btn-sm xs:btn-md sm:btn-lg btn-primary ms-4"
            onClick={() => handleScrollLink("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;