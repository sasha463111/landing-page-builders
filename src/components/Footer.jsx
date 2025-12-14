import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <p>&copy; {new Date().getFullYear()} סשה דיבקה. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
