import React from 'react'
import '../styles/Solution.css'

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <h2 className="section-title">ככה נראה עסק טיפוסי היום</h2>
        
        <div className="cycle-description">
          <p>קם בבוקר, עושה שיווק, מקבל לידים, עושה מכירות,...</p>
          <p className="cycle-problem">
            (בעיה - הגלגל האינסופי)
          </p>
        </div>

        <div className="solution-content">
          <h3 className="solution-title">הפתרון</h3>
          <p>תיאור הפתרון הטכנולוגי...</p>
        </div>
      </div>
    </section>
  )
}

export default Solution
