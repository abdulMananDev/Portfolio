import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { SOCIAL_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#09090B] border-t border-zinc-900 px-6 py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-zinc-500 font-medium">
          Abdul Manan Malik, Senior Front-End Developer
        </p>
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
          >
            <GitHubIcon size={16} />
          </a>
        </div>
        <p className="text-xs text-zinc-600">
          Built with{" "}
          <span className="text-zinc-400">Next.js, TypeScript, Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
