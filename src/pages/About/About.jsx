import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-16">
                About me
              </h2>
              <p className="text-white">
                Hello! I&#39;m Nguyen Huy Khoa, a Software Engineer with experience in developing and maintaining enterprise
                Java applications (Spring, Struts, Oracle) and building full-stack web solutions using React, Node.js
                (NestJS), and various databases.
              </p>
              <p className="text-white">
                My short-term goal is to make websites faster, more stable, and more beautiful.
                Currently, I&#39;m focus on Database Optimization because this is the best way
                to improve application performance. In the future, I&#39;ll be diving into system design
                and architecture to build scalable and maintainable systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
