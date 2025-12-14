import React from 'react'
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
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
        <div className="hero-clients">
          <p>עומרי כהן, מתן ניסטור, קבוצת בסר, מולדבסקי, עורך דין אילן</p>
        </div>
        <a href="#contact-form" className="btn-primary">
          כפתור שמוביל להצעה
        </a>
      </div>
    </section>
  )
}

export default Hero
