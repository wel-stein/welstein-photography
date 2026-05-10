export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface">
      <div className="flex flex-col items-center gap-stack-sm w-full py-stack-md px-margin-x max-w-container-max mx-auto">
        <div className="font-label-sm text-label-sm text-on-surface tracking-widest uppercase">
          WELSTEIN PHOTOGRAPHY
        </div>

        <div className="flex gap-8">
          <a
            href="#"
            className="font-label-sm text-label-sm text-on-surface/40 hover:text-on-surface transition-colors duration-500"
          >
            INSTAGRAM
          </a>
          <a
            href="#"
            className="font-label-sm text-label-sm text-on-surface/40 hover:text-on-surface transition-colors duration-500"
          >
            FACEBOOK
          </a>
          <a
            href="#"
            className="font-label-sm text-label-sm text-on-surface/40 hover:text-on-surface transition-colors duration-500"
          >
            PINTEREST
          </a>
        </div>

        <p className="font-label-sm text-label-sm text-on-surface/40 text-center uppercase mt-4">
          COPYRIGHT © 2024 WELSTEIN PHOTOGRAPHY. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}
