import logo from "../../../assets/plswork.png";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Tech Stack", url: "tech-stack" },
  { id: 4, name: "What I Do", url: "profession" },
  { id: 5, name: "Portfolio", url: "portfolio" },
  { id: 6, name: "Gallery", url: "gallery" },
  { id: 7, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const NAVBAR_HEIGHT = 90;

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (url) => {
  const scrollToSection = () => {
    const el = document.getElementById(url.toLowerCase());

    if (el) {
      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_HEIGHT;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  if (location.pathname !== "/") {
    navigate("/", { replace: false });

    setTimeout(() => {
      scrollToSection();
    }, 100);
  } else {
    scrollToSection();
  }
};

  return (
    <div className="content max-2xl:px-3 pt-20 md:pt-32">

      {/* Top section */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-10 border-b border-white/20 text-center md:text-left"
        data-aos="fade-up"
      >

        {/* Brand + tagline */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <button
            onClick={() => handleScrollLink("introduction")}
            className="flex items-center border-0 w-fit"
          >
            <img src={logo} className="h-10 rounded-full" alt="logo" />

            <p className="text-2xl my-auto ms-3 font-semibold text-white">
              Digital Norms
            </p>
          </button>

          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Designing and building user-centered web experiences — one project at a time.
          </p>
        </div>

       {/* Nav links */}
        <div
          className="flex flex-col items-center md:items-start gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
            Navigation
          </p>

          <div className="flex flex-wrap md:flex-col justify-center md:justify-start items-center md:items-start gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollLink(item.url)}
                className="text-white/70 hover:text-white text-sm transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div
          className="flex flex-col items-center md:items-start gap-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
            Contact
          </p>

          <p className="text-white/70 text-sm">
            Davao City, Philippines
          </p>

          <p className="text-white/70 text-sm">
            Holy Cross of Davao College
          </p>

          <button
            onClick={() => handleScrollLink("contact")}
            className="mt-2 btn btn-sm btn-primary text-white"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col md:flex-row justify-between items-center py-6 gap-2 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="text-white/40 text-xs">
          &copy; {copyrightYear} Digital Norms. All rights reserved.
        </p>

        <p className="text-white/40 text-xs">
          Developed by Norman B. Asakil
        </p>
      </div>
    </div>
  );
};

export default Footer;