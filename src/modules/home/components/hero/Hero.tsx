import Profile from "@/modules/home/components/profile";
import ButtonLink from "@/components/button-link";
import DownloadIcon from "@/components/icons/DownloadIcon";
import { socialLinks } from "./data";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-[10.75rem]">
      <Profile
        image="/images/profile.png"
        className="mb-[1.25rem] animate-fade-in-up"
      />
      <p className="text-2xl font-normal mb-[1.875rem] animate-fade-in-up delay-200">
        Hi! I&apos;m Tural 👋🏻
      </p>
      <p className="text-[2rem] font-semibold max-w-[26.75rem] mb-[1.875rem] animate-fade-in-up delay-400">
        Frontend Developer based in Baku, Azerbaijan
      </p>
      <p className="text-[1rem] leading-[1.5] font-normal max-w-[26.75rem] mb-[1.5rem] animate-fade-in-up delay-600">
        Experienced front-end developer with a passion for crafting elegant and
        efficient user interfaces. Over three years of hands-on experience in
        web development.
      </p>
      <div className="flex self-start gap-[0.75rem] mb-[1.5rem] animate-fade-in-up delay-600">
        {socialLinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            target="_blank"
            className="w-6 h-6 flex items-center justify-center"
          >
            <link.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center gap-[1.25rem] [@media(max-width:48rem)]:flex-wrap animate-fade-in-up delay-800">
        <ButtonLink href="mailto:info@turalmammadov.dev" className="w-full">
          Contact Me
        </ButtonLink>
        <ButtonLink
          href="/pdf/Tural-Mammadov-CV.pdf"
          variant="secondary"
          download
          className="w-full"
        >
          <span className="font-normal text-base flex justify-center items-center gap-[0.5rem] ">
            Download CV
            <DownloadIcon />
          </span>
        </ButtonLink>
      </div>
    </section>
  );
};

export default Hero;
