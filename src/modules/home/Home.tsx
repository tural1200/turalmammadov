import { Hero, Projects } from "./components";

const Home = () => {
  return (
    <main className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <Hero />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
