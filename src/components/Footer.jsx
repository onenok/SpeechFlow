import React from 'react'
import '../App.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="/privacy-policy">Privacy Policy</a>
        <span className="sep"> | </span>
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
      <p className="copyright">© {new Date().getFullYear()} SpeechFlow</p>
    </footer>
  )
}
