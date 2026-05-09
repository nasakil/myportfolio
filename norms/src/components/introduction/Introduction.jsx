import InformationSummary from "./InformationSummary";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import "./introduction.css";

const informationSummaryData = [
  { id: 1, title: "Year Level", description: "3rd." },
  { id: 2, title: "Projects Completed", description: "10+" },
  { id: 3, title: "Key Skill", description: "Frontend" },
];

const TYPED_WORDS = ["Digital Norms", "Frontend Dev", "N. Asakil"];

const Introduction = () => {
  const canvasRef = useRef(null);
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    const currentWord = TYPED_WORDS[wordIndex];
    let timeout;

    if (!isDeleting && displayed.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, 100);
    } else if (!isDeleting && displayed.length === currentWord.length) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
      }, 55);
    } else if (isDeleting && displayed.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPED_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(interval);
  }, []);

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 38 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(69, 104, 130, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center pt-20 pb-36 px-4"
      id="introduction"
    >
      <canvas ref={canvasRef} id="particles-canvas" />
      <div className="intro-content flex flex-col items-center">
       <h1 className="text-5xl sm:text-6xl xl:text-8xl font-semibold leading-tight mb-4 max-w-4xl h-[1.2em] sm:h-[1.2em]">
        {displayed}
        <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-[#456882]`}>|</span>
        </h1>
        <p className="text-sm sm:text-lg text-gray-500 max-w-xl mb-8">
          A personal portfolio by Norman Asakil — a 3rd Year{" "}
          <span className="bg-highlight">BSIT Student</span> from{" "}
          <span className="bg-highlight">Holy Cross of Davao College</span>{" "}
          designing and building web experiences through clean code and
          thoughtful design.
        </p>
        <Link
          className="btn btn-primary btn-lg text-white mb-16"
          to="profile"
          smooth={true}
          duration={900}
          offset={-80}
        >
          See my work
        </Link>
        <div className="grid grid-cols-3 gap-2 w-fit mx-auto">
          {informationSummaryData.map((item) => (
            <InformationSummary key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;