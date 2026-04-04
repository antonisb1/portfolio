import { useLang } from '../context/LangContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const { t, lang } = useLang()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <button
              className="nav-logo footer-logo"
              onClick={() => scrollTo('home')}
            >
              Klikos<span className="logo-dot">.</span>
            </button>

            <p className="footer-tagline">{t.footerTagline}</p>

            <div className="footer-socials">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          </div>

          {/* NAVIGATION */}
          <div className="footer-nav">
            <h4 className="footer-nav__title">
              {lang === 'el' ? 'Σελίδες' : 'Pages'}
            </h4>

            {[
              { id: 'home', label: t.navHome },
              { id: 'about', label: t.navAbout },
              { id: 'menu', label: t.navMenu },
              { id: 'services', label: t.navServices },
              { id: 'contact', label: t.navContact },
            ].map((item) => (
              <button
                key={item.id}
                className="footer-nav__link"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h4 className="footer-nav__title">
              {lang === 'el' ? 'Επικοινωνία' : 'Contact'}
            </h4>

            <p>📍 {t.address}</p>

            <p>
              <a href="tel:+302105547352" className="footer-phone">
                📞 {t.phone}
              </a>
            </p>

            <p>🕐 {t.hours}</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>{t.footerRights}</p>
        </div>
      </div>
    </footer>
  )
}