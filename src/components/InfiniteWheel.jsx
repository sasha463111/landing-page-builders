import React from 'react'
import '../styles/InfiniteWheel.css'

function InfiniteWheel({ items, color = 'green', direction = 'normal' }) {
  return (
    <div className={`wheel-container wheel-${color}`}>
      <div className="wheel">
        <div className="wheel-content" style={{ animationDirection: direction }}>
          {items.map((item, index) => (
            <div key={index} className="wheel-item">
              {item}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="wheel-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfiniteWheel
