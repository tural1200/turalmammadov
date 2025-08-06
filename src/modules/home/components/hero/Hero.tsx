import ButtonLink from "@/components/button-link";
import DownloadIcon from "@/components/icons/DownloadIcon";
import Profile from "@/components/profile";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-[10.75rem]">
      <Profile
        image="/images/profile.png"
        className="mb-[1.25rem] animate-fade-in-up"
      />
      <p className="text-2xl font-normal mb-[1.875rem] animate-fade-in-up delay-200">
        Hi! I'm Tural 👋🏻
      </p>
      <p className="text-[2rem] font-semibold max-w-[26.75rem] text-center mb-[1.875rem] animate-fade-in-up delay-400">
        I'm a Frontend Developer based in Baku, Azerbaijan
      </p>
      <p className="text-[1rem] leading-[1.5] font-normal max-w-[26.75rem] text-center mb-[2.5rem] animate-fade-in-up delay-600">
        Experienced front-end developer with a passion for crafting elegant and
        efficient user interfaces. Over three years of hands-on experience in
        web development.
      </p>
      <div className="flex flex-wrap justify-center gap-[1.25rem] animate-fade-in-up delay-800">
        <ButtonLink href="mailto:me@turalmammadov.dev">Contact Me</ButtonLink>
        <ButtonLink
          href="/pdf/Tural-Mammadov-CV.pdf"
          variant="secondary"
          download
        >
          <span className="font-normal text-base flex items-center gap-[0.5rem] ">
            Download CV
            <DownloadIcon />
          </span>
        </ButtonLink>
      </div>
    </section>
  );
};

export default Hero;
