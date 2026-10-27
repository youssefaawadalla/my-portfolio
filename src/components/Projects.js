import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects, categories } from "../data/projects";
import { GITHUB_URL } from "../data/socials";

const actionLink =
  "inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400";

function ProjectCard({ project }) {
  const { title, description, image, link, code, technologies } = project;
  return (
    <article className="group bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg transition-colors duration-300 hover:border-blue-500/50 flex flex-col">
      {image ? (
        <div className="overflow-hidden h-48 sm:h-56 bg-zinc-950">
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        // Shown until you add a screenshot
        <div className="h-24 bg-gradient-to-br from-zinc-900 to-blue-950/40 border-b border-zinc-800" aria-hidden="true" />
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold mb-3">{title}</h4>

        {technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-4">
            {technologies.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="inline-flex items-center gap-1.5 text-xs text-gray-300 bg-zinc-950 border border-zinc-800 rounded-full px-2.5 py-1"
              >
                <Icon className={color} aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        )}

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

        {(link || code) && (
          <div className="flex items-center gap-6 pt-4 border-t border-zinc-800">
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className={actionLink}>
                Live demo <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel="noopener noreferrer" className={actionLink}>
                Code <FaGithub aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="min-h-screen bg-black text-white pt-28 pb-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Jump links to each category */}
        <nav aria-label="Project categories" className="flex flex-wrap justify-center gap-3 mb-14">
          {categories
            .filter((c) => projects.some((p) => p.category === c.id))
            .map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="text-sm font-medium text-gray-300 hover:text-white border border-zinc-700 hover:border-blue-500 rounded-full px-4 py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                {c.title}
              </a>
            ))}
        </nav>

        <div className="space-y-16">
          {categories.map((category) => {
            const items = projects.filter((p) => p.category === category.id);
            if (items.length === 0) return null;
            return (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-zinc-800">
                  {category.title} <span className="text-gray-500 text-base font-medium">({items.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {items.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-3 px-8 bg-zinc-900 border border-zinc-700 hover:border-blue-500 hover:bg-zinc-800 text-white font-medium rounded-full transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
          >
            <FaGithub className="text-xl" aria-hidden="true" />
            <span>See more on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;