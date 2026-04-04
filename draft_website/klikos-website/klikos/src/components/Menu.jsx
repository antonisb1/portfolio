import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { menuData } from '../data/menuData'

function PlaceholderImage({ label }) {
  return (
    <div className="menu-img-placeholder">
      <div className="placeholder-icon">👨‍🍳</div>
      <span className="placeholder-label">{label}</span>
    </div>
  )
}

function MenuCard({ item, popular, lang, addPlaceholder }) {
  return (
    <div className={`menu-card${popular ? ' menu-card--popular' : ''}`}>
      {popular && (
        <span className="popular-badge">
          {lang === 'el' ? 'Δημοφιλές' : 'Popular'}
        </span>
      )}
      <div className="menu-card__img">
        {item.image
          ? <img src={item.image} alt={item.name} loading="lazy" />
          : <PlaceholderImage label={addPlaceholder} />
        }
      </div>
      <div className="menu-card__body">
        <h3 className="menu-card__name">{item.name}</h3>
        <p className="menu-card__desc">
          {lang === 'el' ? item.descEl : item.descEn}
        </p>
        <div className="menu-card__footer">
          <span className="menu-card__price">{item.price}</span>
        </div>
      </div>
    </div>
  )
}

const TABS = [
  { id: 'pasta', labelKey: 'tabPasta' },
  { id: 'salads', labelKey: 'tabSalads' },
  { id: 'drinks', labelKey: 'tabDrinks' },
]

export default function Menu() {
  const { t, lang } = useLang()
  const [activeTab, setActiveTab] = useState('pasta')

  const items = menuData[activeTab] || []

  return (
    <section className="menu-section" id="menu">
      <div className="menu-section__bg" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.menuLabel}</span>
          <h2 className="section-title">{t.menuTitle}</h2>
          <p className="section-sub">{t.menuSub}</p>
        </div>

        <div className="menu-tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn${activeTab === tab.id ? ' tab-btn--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {t[tab.labelKey]}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {items.map(item => (
            <MenuCard
              key={item.id}
              item={item}
              popular={item.popular}
              lang={lang}
              addPlaceholder={t.addPlaceholder}
            />
          ))}
        </div>

        <div className="menu-cta">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.viewFullMenu}
          </button>
        </div>
      </div>
    </section>
  )
}
