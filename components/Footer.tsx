export default function Footer() {
  return (
    <footer className="bg-[#09090B] border-t border-zinc-900 px-6 py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-zinc-500 font-medium">
          Abdul Manan Malik, Senior Front-End Developer
        </p>
        <p className="text-xs text-zinc-600">
          Built with{" "}
          <span className="text-zinc-400">Next.js, TypeScript, Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
