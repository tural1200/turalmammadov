import Image from "next/image";
import { Project } from "@/data/models";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] p-4 border border-gray-100">
      {/* Image Container */}
      <Link
        href={project.link}
        target="_blank"
        className="block relative h-48 overflow-hidden rounded-2xl mb-4 w-full aspect-video"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {/* Content */}

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {project.title}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
