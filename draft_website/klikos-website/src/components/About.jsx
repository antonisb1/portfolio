import { useLang } from '../context/LangContext'

const features = [
  { icon: '🌿', titleKey: 'feat1Title', subKey: 'feat1Sub' },
  { icon: '👨‍🍳', titleKey: 'feat2Title', subKey: 'feat2Sub' },
  { icon: '👥', titleKey: 'feat3Title', subKey: 'feat3Sub' },
]

export default function About() {
  const { t, lang } = useLang()

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-label">{t.aboutLabel}</span>
            <h2 className="section-title">{t.aboutTitle}</h2>
            <p className="about-p">{t.aboutP1}</p>
            <p className="about-p">{t.aboutP2}</p>
            <div className="about-stat-row">
              <div className="about-stat">
                <span className="stat-num">311+</span>
                <span className="stat-label">{lang === 'el' ? 'Κριτικές' : 'Reviews'}</span>
              </div>
              <div className="about-stat">
                <span className="stat-num">4.7</span>
                <span className="stat-label">Google Rating</span>
              </div>
              <div className="about-stat">
                <span className="stat-num">€5–10</span>
                <span className="stat-label">{lang === 'el' ? 'Τιμή/άτομο' : 'Per person'}</span>
              </div>
            </div>
          </div>

          <div className="about-features">
            {features.map(f => (
              <div key={f.titleKey} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3 className="feature-title">{t[f.titleKey]}</h3>
                  <p className="feature-sub">{t[f.subKey]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
