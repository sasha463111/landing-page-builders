import React from 'react'
import '../styles/Process.css'

function Process() {
  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title">איך זה עובד?</h2>
        
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">שלב ראשון: שיחה</h3>
            <p className="step-description">
              בשיחה נעבור על הדברים שמעניינים אותך, נבין איפה אתה עומד, ונראה מה הבעיות שאתה חווה בעסק, 
              על דברים שיכולים לקרות אוטומטית
            </p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">שלב שני: צווארי הבקבוק</h3>
            <p className="step-description">
              נעבור על צווארי הבקבוק שלך, אם לא תצא עם לפחות כמה עשרות אלפי שקלים, 
              שיושבים לך על הרצפה, אני אשלם לך על הזמן שלך…
            </p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">שלב שלישי: הטמעה</h3>
            <p className="step-description">
              אראה לך איך אני יכול להטמיע את הכל עבורך, ואם תתאים לתהליך, גם תקבל הצעה להתקדם,
            </p>
          </div>
        </div>

        <div className="process-note">
          <p>
            אבל חשוב לי להגיד, בראש ובראשונה, המטרה היא שתבין איפה אתה עומד,
            המטרה שלי היא לא למכור למי שלא צריך, ואני מקבל רק לקוחות ספציפיים,
            ובגלל זה אני נותן את הפגישה הזו במתנה
          </p>
        </div>
      </div>
    </section>
  )
}

export default Process
