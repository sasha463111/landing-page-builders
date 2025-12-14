import React from 'react'
import InfiniteWheel from './InfiniteWheel'
import '../styles/Hero.css'

function Hero() {
  // מידע מה-PDF - הבעיות והפתרונות
  const negativeItems = [
    '✗ בלאגן וחוסר סדר',
    '✗ סירבול במציאת מידע על ליד',
    '✗ הופך טבלאות שיטס',
    '✗ מאבד לקוחות שרוצים להתקדם',
    '✗ לא רואה תמונה גדולה',
    '✗ החלטות מבוססות נתונים שגויים',
    '✗ לידים קרים שלא נסגרים',
    '✗ תקציב שיווק שנעלם'
  ]
  
  const positiveItems = [
    '✓ מעקב מסודר אחרי לידים',
    '✓ מעקב מהקמפיין עד הסגירה',
    '✓ תקשורת יעילה עם לידים',
    '✓ ניהול לקוחות מסודר',
    '✓ רואה תמונה גדולה',
    '✓ החלטות מבוססות נתונים נכונים',
    '✓ אוטומציה טכנולוגית',
    '✓ צמיחה יציבה'
  ]

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-logo">
          <img 
            src="/logo-builders.png" 
            alt="Builders Logo" 
            className="builders-logo" 
            onError={(e) => { 
              e.target.src = '/logo-builders.jpg';
              e.target.onerror = () => {
                e.target.style.display = 'none';
              };
            }} 
          />
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
              <img src="/clients/omri-cohen.jpg" alt="עומרי כהן" className="client-image" 
                onError={(e) => e.target.src = '/clients/omri-cohen.png'} />
              <p className="client-name">עומרי כהן</p>
            </div>
            <div className="client-item">
              <img src="/clients/matan-nistor.jpg" alt="מתן ניסטור" className="client-image"
                onError={(e) => e.target.src = '/clients/matan-nistor.png'} />
              <p className="client-name">מתן ניסטור</p>
            </div>
            <div className="client-item">
              <img src="/clients/baser-group.jpg" alt="קבוצת בסר" className="client-image"
                onError={(e) => e.target.src = '/clients/baser-group.png'} />
              <p className="client-name">קבוצת בסר</p>
            </div>
            <div className="client-item">
              <img src="/clients/daniel-moldavsky.jpg" alt="דניאל מולדבסקי" className="client-image"
                onError={(e) => e.target.src = '/clients/daniel-moldavsky.png'} />
              <p className="client-name">דניאל מולדבסקי</p>
            </div>
            <div className="client-item">
              <img src="/clients/lawyer-ilan.jpg" alt="עורך דין אילן" className="client-image"
                onError={(e) => e.target.src = '/clients/lawyer-ilan.png'} />
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
