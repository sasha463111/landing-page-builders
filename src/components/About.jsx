import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">נעים מאוד,</h2>
        <div className="about-content">
          <div className="about-image">
            {/* תמונה עם חיוך יזין - placeholder */}
            <div className="image-placeholder">תמונה</div>
          </div>
          <div className="about-text">
            <p className="about-name">נעים מאוד, סשה דיבקה, יזם, ואיש אוטומציה,</p>
            <p>ואחרי שעבדתי עם המותגים הגדולים בישראל,</p>
            <div className="brands">
              {/* תמונות של מותגים - placeholder */}
              <div className="brand-placeholder">מותג 1</div>
              <div className="brand-placeholder">מותג 2</div>
              <div className="brand-placeholder">מותג 3</div>
            </div>
            <p>ואחרי שעברתי בעצמי בכל אחת מהמחלקות בעסק, ממחלקת המכירות בתור איש מכירות שסלק תוכניות פרימיום בעשרות אלפי שקלים</p>
            <div className="about-image-sales">
              {/* תמונה מהמוקד - placeholder */}
              <div className="image-placeholder">תמונה מהמוקד ימניאק</div>
            </div>
            <p>בתור יזם ובעל עסק בעצמי, עם השיווק, הפיננסים הקמפיינים,</p>
            <p className="about-insight">
              ואחרי מעל ל-200 לקוחות הבנתי דבר אחד על עסקים קטנים, שגורם להם בכוח, להישאר בתקרה של 40,000 גג,
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
