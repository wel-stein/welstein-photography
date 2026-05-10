import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'GALLERY',    to: '/' },
  { label: 'INVESTMENT', to: '/services' },
  { label: 'CONTACT',    to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl transition-all ease-in-out duration-500 border-b border-white/5">
      <div className="flex justify-between items-center w-full px-margin-x py-8 max-w-container-max mx-auto">
        <NavLink
          to="/"
          className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-on-surface"
        >
          WELSTEIN PHOTOGRAPHY
        </NavLink>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary border-b border-secondary pb-1 font-label-sm text-label-sm transition-colors duration-500'
                  : 'text-on-surface/60 hover:text-primary font-label-sm text-label-sm transition-colors duration-500'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/5 px-margin-x py-6 flex flex-col gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary border-b border-secondary pb-1 font-label-sm text-label-sm w-fit'
                  : 'text-on-surface/60 font-label-sm text-label-sm'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
