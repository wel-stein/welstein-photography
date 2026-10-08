import { FACEBOOK_URL } from '../data/contact'

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface">
      <div className="flex flex-col items-center gap-stack-sm w-full py-stack-md px-margin-x max-w-container-max mx-auto">
        <div className="font-label-sm text-label-sm text-on-surface tracking-widest uppercase">
          WELSTEIN PHOTOGRAPHY
        </div>

        <div className="flex gap-8">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-sm text-label-sm text-on-surface/40 hover:text-on-surface transition-colors duration-500"
          >
            FACEBOOK
          </a>
        </div>

        <p className="font-label-sm text-label-sm text-on-surface/40 text-center uppercase mt-4">
          COPYRIGHT © {new Date().getFullYear()} WELSTEIN PHOTOGRAPHY. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}
