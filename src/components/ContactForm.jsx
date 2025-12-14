import React, { useState } from 'react'
import '../styles/ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError('אנא מלא את כל השדות הנדרשים')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('אנא הכנס כתובת אימייל תקינה')
      return
    }

    // Phone validation
    const phoneRegex = /^[0-9]{9,10}$/
    const cleanPhone = formData.phone.replace(/[-\s]/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      setError('אנא הכנס מספר טלפון תקין')
      return
    }

    // Simulate form submission
    // In production, replace with actual API call
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <section className="contact" id="contact-form">
      <div className="container">
        <h2 className="section-title">אז תשאיר כאן פרטים בטופס ונדבר:</h2>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <div className="form-error">{error}</div>}
          {submitted && (
            <div className="form-success">
              תודה! פנייתך התקבלה. נחזור אליך בהקדם.
            </div>
          )}

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="שם מלא *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="אימייל *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="טלפון *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="הודעה (אופציונלי)"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button type="submit" className="btn-primary btn-submit">
            שלח
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
