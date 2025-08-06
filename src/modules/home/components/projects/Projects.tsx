import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section className="w-full max-w-6xl animate-fade-in-up delay-1000">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Public projects I&apos;ve contributed to
      </h2>
      <ProjectList />
    </section>
  );
};

export default Projects;
