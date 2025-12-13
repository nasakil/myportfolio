import logo from "../../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Gallery", url: "gallery" },
  { id: 6, name: "Services", url: "services" },
  { id: 7, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (url) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(url.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setActive(url.toLowerCase());
      }, 50);
    } else {
      const el = document.getElementById(url.toLowerCase());
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setActive(url.toLowerCase());
    }
  };

  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <button
          onClick={() => handleScrollLink("introduction")}
          className="flex items-center border-0"
        >
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Digital Norms
          </p>
        </button>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollLink(item.url)}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </button>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} Digital Norms.
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Developed by Norman B. Asakil
      </p>
    </div>
  );
};

export default Footer;
