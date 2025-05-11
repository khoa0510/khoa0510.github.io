import {ReactLenis} from "lenis/react";
import {motion, useScroll} from "framer-motion";
import {useRef} from "react";
import {CodeWindow} from "@/components/code-window.jsx";
import {projects} from "@/constant/data.jsx";

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
                title={project.title}
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

  return (
    <div
      ref={container}
      className="flex items-center justify-center sticky top-24"
    >
      <motion.div
        style={{
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] max-w-2xl origin-top bg-slate-950"
        whileHover={{
          y: -8,
          transition: {duration: 0.3},
        }}
      >
        <CodeWindow title={title}>{description}</CodeWindow>
      </motion.div>
    </div>
  );
}
