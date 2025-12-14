import React from 'react'
import InfiniteWheel from './InfiniteWheel'
import '../styles/Hero.css'

function Hero() {
  const positiveItems = ['✓ לידים חמים', '✓ תקציב יעיל', '✓ תוצאות מיידיות', '✓ גידול יציב', '✓ מעקב מלא', '✓ החלטות מבוססות נתונים', '✓ אוטומציה חכמה', '✓ שיפור מתמיד']
  const negativeItems = ['✗ לידים קרים', '✗ תקציב שנעלם', '✗ ללא תוצאות', '✗ עלויות גבוהות', '✗ חוסר סדר', '✗ נתונים לא מדויקים', '✗ עבודה ידנית', '✗ תקיעות']

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-logo">
          <img src="/logo-builders.png" alt="Builders Logo" className="builders-logo" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        
        <p className="hero-subtitle">
          "אני מרגיש שמשהו לא עובד טוב אבל אני לא יודע לשים את אצבע על מה"
        </p>
        <p className="hero-intro">
          אם המשפט הזה מוכר לך, הדף הזה קריטי לעסק שלך:
        </p>
        <p className="hero-target">
          (אם אתה כבר חודשים עושה מלא פעולות, ולא מרגיש שמשהו זז, הדף הזה בשבילך)
        </p>
        <h1 className="hero-title">
          מהו הגלגל האינסופי שהורס את הסיכויים של נותני שירות לשבור את מחזור המכירות
        </h1>
        <p className="hero-subtitle-main">
          ולצמוח בצורה יציבה חודש אחרי חודש. ואיך לשחרר אותו בעזרת מינוף טכנולוגי, 
          שעזר כבר למעל ל-200 נותני שירות, לסגור יותר מהלידים הקיימים, לעבוד פחות שעות, ולצמוח בצורה יעילה בעסק.
        </p>
        
        <div className="wheels-section">
          <div className="wheel-wrapper">
            <h3 className="wheel-label">עם הפתרון</h3>
            <InfiniteWheel items={positiveItems} color="green" direction="normal" />
          </div>
          <div className="wheel-wrapper">
            <h3 className="wheel-label">בלעדיו</h3>
            <InfiniteWheel items={negativeItems} color="red" direction="reverse" />
          </div>
        </div>

        <div className="hero-clients">
          <h3 className="clients-title">לקוחות שצמחו איתנו:</h3>
          <div className="clients-grid">
            <div className="client-item">
              <img src="https://via.placeholder.com/120x120/34D399/ffffff?text=עומרי+כהן" alt="עומרי כהן" className="client-image" />
              <p className="client-name">עומרי כהן</p>
            </div>
            <div className="client-item">
              <img src="https://via.placeholder.com/120x120/34D399/ffffff?text=מתן+ניסטור" alt="מתן ניסטור" className="client-image" />
              <p className="client-name">מתן ניסטור</p>
            </div>
            <div className="client-item">
              <img src="https://via.placeholder.com/120x120/34D399/ffffff?text=קבוצת+בסר" alt="קבוצת בסר" className="client-image" />
              <p className="client-name">קבוצת בסר</p>
            </div>
            <div className="client-item">
              <img src="https://via.placeholder.com/120x120/34D399/ffffff?text=דניאל+מולדבסקי" alt="דניאל מולדבסקי" className="client-image" />
              <p className="client-name">דניאל מולדבסקי</p>
            </div>
            <div className="client-item">
              <img src="https://via.placeholder.com/120x120/34D399/ffffff?text=עורך+דין+אילן" alt="עורך דין אילן" className="client-image" />
              <p className="client-name">עורך דין אילן</p>
            </div>
          </div>
        </div>
        
        <a href="#contact-form" className="btn-primary">
          כפתור שמוביל להצעה
        </a>
      </div>
    </section>
  )
}

export default Hero
