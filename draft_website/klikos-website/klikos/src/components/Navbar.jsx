import { useState } from 'react'
import { useLang } from '../context/LangContext'
import '../index.css'
import { useScrolled, useScrollSpy } from '../hooks/useScroll'

const SECTIONS = ['home', 'about', 'menu', 'services', 'contact']

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const scrolled = useScrolled(50)
  const active = useScrollSpy(SECTIONS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'menu', label: t.navMenu },
    { id: 'services', label: t.navServices },
    { id: 'contact', label: t.navContact },
  ]

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="nav-container">
        <button className="nav-logo" onClick={() => scrollTo('home')}>
          Klikos<span className="logo-dot">.</span>
        </button>

        <nav className={`nav-links${mobileOpen ? ' nav-links--open' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link${active === item.id ? ' nav-link--active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div className="nav-mobile-actions">
            <a href="tel:+302105547352" className="nav-phone-mobile">📞 +30 21 0554 7352</a>
            <button className="btn-order btn-order--mobile" onClick={() => scrollTo('menu')}>
              {t.orderNow}
            </button>
          </div>
        </nav>

        <div className="nav-actions">
          <button className="lang-btn" onClick={toggleLang} aria-label="Toggle language">
            🌐 {lang === 'el' ? 'EN' : 'EL'}
          </button>
          <a href="tel:+302105547352" className="nav-phone">
            <span>📞</span> +30 21 0554 7352
          </a>
          <button className="btn-order" onClick={() => scrollTo('menu')}>
            {t.orderNow}
          </button>
        </div>

        <button
          className={`hamburger${mobileOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
