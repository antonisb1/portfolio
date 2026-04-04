import { useLang } from '../context/LangContext'
import { galleryData } from '../data/menuData'

export default function Gallery() {
  const { t, lang } = useLang()

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.galleryLabel}</span>
          <h2 className="section-title">{t.galleryTitle}</h2>
        </div>
        <div className="gallery-grid">
          {galleryData.map((item, i) => (
            <div key={item.id} className={`gallery-item gallery-item--${i + 1}`}>
              {item.src
                ? (
                  <img src={item.src} alt={lang === 'el' ? item.captionEl : item.captionEn} loading="lazy" />
                )
                : (
                  <div className="gallery-placeholder">
                    <span className="gallery-placeholder__icon">📷</span>
                    <span className="gallery-placeholder__label">{t.galleryPlaceholder}</span>
                    <span className="gallery-placeholder__caption">
                      {lang === 'el' ? item.captionEl : item.captionEn}
                    </span>
                  </div>
                )
              }
              <div className="gallery-overlay">
                <span>{lang === 'el' ? item.captionEl : item.captionEn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
