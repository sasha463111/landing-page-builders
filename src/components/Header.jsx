import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <img 
            src="/logo-builders.png" 
            alt="Builders" 
            className="builders-logo-header"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="logo-text" style={{display: 'none'}}>Builders</div>
        </div>
      </div>
    </header>
  )
}

export default Header
