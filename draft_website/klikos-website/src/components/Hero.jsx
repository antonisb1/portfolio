import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useLang()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-grain" />
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-pulse" />
          <span>{t.heroBadge}</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title__line hero-title__line--1">{t.heroTitle1}</span>
          <span className="hero-title__line hero-title__line--2">{t.heroTitle2}</span>
          <em className="hero-title__accent">{t.heroAccent}</em>
        </h1>

        <p className="hero-sub">{t.heroSub}</p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('menu')}>
            {t.heroMenu}
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            {t.heroVisit}
          </button>
        </div>

        <div className="hero-rating">
          <div className="stars">
            {'★★★★'.split('').map((s, i) => <span key={i} className="star-full">{s}</span>)}
            <span className="star-half">★</span>
          </div>
          <span className="rating-text">{t.heroRating}</span>
        </div>
      </div>

      <button className="hero-scroll" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
      </button>
    </section>
  )
}
