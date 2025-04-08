import {ReactLenis} from "lenis/react";
import {useTransform, motion, useScroll} from "framer-motion";
import {useRef, useState} from "react";

const projects = [
  {
    title: "Distribution Management System 1.0 (DMS1.0)",
    description:
      "DMS1.0 is a business software that helps manage the\n" +
      "distribution of goods to the market, track activities across distribution channels, including managing salesmen,\n" +
      "automating sales processes, controlling inventory and market fluctuations, managing debts, and more.\n\n",
    src: "rock.jpg",
    color: "#5196fd",
  },
  {
    title: "A sleek portfolio built with React and Tailwind CSS ",
    description:
      "A sleek portfolio built with React and Tailwind CSS to showcase your skills, projects, and experience in a modern design.",
    src: "tree.jpg",
    link: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
    color: "#8f89ff",
    githubLink: "https://github.com/seraprogrammer/portfolio",
    liveLink: "https://codervai.vercel.app",
  },
  {
    title: "🚀 CodeWhisperer",
    description:
      "🚀 CodeWhisperer A powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
    src: "water.jpg",
    link: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
    color: "#fff",
    githubLink: "https://github.com/seraprogrammer/codewhisperer",
    liveLink: "https://codewhisperer.vercel.app/",
  },
  {
    title: "CodeKori 🔥",
    description:
      "CodeKori is a powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
    src: "house.jpg",
    link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    color: "#ed649e",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://codekori.js.org",
  },
];

export default function Projects1() {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          <h2
            className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center py-20">
            Projects
          </h2>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                src={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
                i,
                title,
                description,
                src,
                url,
                color,
                progress,
                range,
                targetScale,
              }) {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] max-w-3xl origin-top"
        whileHover={{
          y: -8,
          transition: {duration: 0.3},
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{backgroundColor: color}}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600"/>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p
                className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-xl">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6"/>

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={projects[i].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{y: -3}}
                  transition={{type: "spring", stiffness: 400}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{color}}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={projects[i].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{y: -3}}
                  transition={{type: "spring", stiffness: 400}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path
                      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{color}}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
