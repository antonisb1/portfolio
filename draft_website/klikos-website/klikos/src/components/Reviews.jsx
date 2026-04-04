import { useLang } from '../context/LangContext'
import { reviews } from '../data/menuData'

function Stars({ count }) {
  return (
    <div className="review-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'star-on' : 'star-off'}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { t, lang } = useLang()

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.reviewsLabel}</span>
          <h2 className="section-title">{t.reviewsTitle}</h2>
          <div className="overall-rating">
            <span className="overall-num">4.7</span>
            <div>
              <Stars count={5} />
              <span className="overall-sub">
                {lang === 'el' ? 'Βάσει 311 κριτικών Google' : 'Based on 311 Google reviews'}
              </span>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map(r => (
            <div key={r.id} className="review-card">
              <Stars count={r.rating} />
              <p className="review-text">
                "{lang === 'el' ? r.textEl : r.textEn}"
              </p>
              <div className="review-author">
                <div className="review-avatar">
                  {(lang === 'el' ? r.nameEl : r.nameEn)[0]}
                </div>
                <div>
                  <span className="review-name">{lang === 'el' ? r.nameEl : r.nameEn}</span>
                  <span className="review-date">{r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
