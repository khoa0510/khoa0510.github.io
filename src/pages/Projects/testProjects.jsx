import {CodeWindow} from "@/components/code-window.jsx";
import {projects} from "@/constant/data.jsx";

export default function Projects1() {

  return (
    <section className="text-white w-full bg-slate-950">
      <h2
        className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center py-20">
        Projects
      </h2>
      {projects.map((project, i) => {
        return (
          <Card
            key={`p_${i}`}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </section>
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

  return (
    <div
      className="flex items-center justify-center"
    >
      <div
        className="relative -top-[25%] h-auto md:max-w-4xl max-w-2xl origin-top bg-slate-950"
      >
        <CodeWindow title={title}>{description}</CodeWindow>
      </div>
    </div>
  );
}
