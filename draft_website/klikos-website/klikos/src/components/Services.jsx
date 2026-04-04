import { useLang } from '../context/LangContext'

const SERVICES = [
  {
    icon: '🍝',
    titleKey: 'svc1Title',
    subKey: 'svc1Sub',
    gradient: 'linear-gradient(135deg, #fef9ef 0%, #fdf0d0 100%)',
  },
  {
    icon: '🥡',
    titleKey: 'svc2Title',
    subKey: 'svc2Sub',
    gradient: 'linear-gradient(135deg, #fef9ef 0%, #fde8b0 100%)',
  },
  {
    icon: '🚚',
    titleKey: 'svc3Title',
    subKey: 'svc3Sub',
    gradient: 'linear-gradient(135deg, #fef9ef 0%, #fdf0d0 100%)',
  },
]

export default function Services() {
  const { t } = useLang()

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.servicesLabel}</span>
          <h2 className="section-title">{t.servicesTitle}</h2>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.titleKey} className="service-card" style={{ background: s.gradient }}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{t[s.titleKey]}</h3>
              <p className="service-sub">{t[s.subKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
