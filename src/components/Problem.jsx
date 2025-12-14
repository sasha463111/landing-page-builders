import React from 'react'
import '../styles/Problem.css'

function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <h2 className="section-title">זה תמיד נראה אותו הדבר, בעסק שרוצה לגדול...</h2>
        
        <div className="problem-list">
          <div className="problem-item">
            <p>יש בלאגן, חוסר סדר</p>
          </div>
          <div className="problem-item">
            <p>סירבול, מנסה למצוא מידע על ליד</p>
          </div>
          <div className="problem-item">
            <p>הופך טבלאות שיטס</p>
          </div>
          <div className="problem-item">
            <p>מאבד לקוחות שרוצים להתקדם נטו כי שכחת שיש בהם פוטנציאל</p>
          </div>
          <div className="problem-item">
            <p>והופ.. הם סגרו עם מתחרה.</p>
          </div>
          <div className="problem-item">
            <p>יכול להיות שיש לך קמפיינים באוויר, אבל כשהקמפיינר נותן לך נתונים, זה תמיד מרגיש כאילו הכל מושלם, כשבפועל? אתה מרגיש שמשהו לא עובד טוב, אבל איך תתווכח איתו... יש לו נתונים...</p>
          </div>
        </div>

        <div className="problem-insight">
          <p>
            אתה כבר מודע לכך, שאתה לא באמת מצליח לראות את התמונה הגדולה בעסק, 
            וזה מונע ממך מלקבל החלטות, וגם ההחלטות שאתה מקבל היום? מבוססות על נתונים שכנראה לא נכונים, 
            ובגלל זה כל החלטה או מהלך הוא כמו ניחוש מושכל.
          </p>
          <p className="problem-closing">
            אם מה שאמרתי לך עד עכשיו נשמע לך מוכר עד סוף הדף הקצר הזה תבין בדיוק, 
            מה הבעיה האמיתית של העסק שלך, ומה מונע ממנו מלעשות פי 2 לפחות
          </p>
        </div>
      </div>
    </section>
  )
}

export default Problem
