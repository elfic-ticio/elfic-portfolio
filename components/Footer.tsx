export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="#"
          className="font-mono text-sm text-accent hover:opacity-70 transition-opacity tracking-widest"
        >
          elfic.dev
        </a>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/elfic-ticio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-fg transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:omarjunior11@gmail.com"
            className="font-mono text-xs text-muted hover:text-fg transition-colors"
          >
            Email
          </a>
        </div>

        <span className="font-mono text-xs text-muted">
          © 2026 — Next.js 14 + TypeScript
        </span>
      </div>
    </footer>
  )
}
