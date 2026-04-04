import { useLang } from '../context/LangContext'

const MAPS_EMBED =
  "https://www.google.com/maps?q=Nikolaidou+5,+Elefsina+192+00,+Greece&output=embed"

export default function Contact() {
  const { t, lang } = useLang()

  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-header">
          <span className="section-label">{t.contactLabel}</span>
          <h2 className="section-title">{t.contactTitle}</h2>
        </div>

        <div className="contact-grid">

          {/* INFO */}
          <div className="contact-info">
            <div className="contact-card">

              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <span className="contact-item__label">
                    {lang === 'el' ? 'Διεύθυνση' : 'Address'}
                  </span>
                  <span className="contact-item__value">
                    {t.address}
                  </span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <span className="contact-item__label">
                    {lang === 'el' ? 'Τηλέφωνο' : 'Phone'}
                  </span>
                  <a
                    href="tel:+302105547352"
                    className="contact-item__value contact-item__value--link"
                  >
                    {t.phone}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <span className="contact-item__label">
                    {lang === 'el' ? 'Ώρες Λειτουργίας' : 'Opening Hours'}
                  </span>
                  <span className="contact-item__value">
                    {t.hours}
                  </span>
                </div>
              </div>

              <div className="contact-actions">
                <a
                  href="https://maps.google.com/?q=Nikolaidou+5,+Elefsina+192+00,+Greece"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {t.getDirections}
                </a>

                <a href="tel:+302105547352" className="btn-outline">
                  📞 {t.callUs}
                </a>
              </div>

            </div>
          </div>

          {/* MAP */}
          <div className="contact-map">
            <iframe
              title="Klikos Location"
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px' }}
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}