import React from 'react'
import '../styles/App.css'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="/privacy-policy">Privacy Policy</a>
        <span className="sep"> | </span>
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
      <p className="copyright">© {new Date().getFullYear()} SpeechFlow</p>
      <p>
        Made with React <img className="spin textImg" src={reactLogo} alt="React Logo" /> + Vite <img className="textImg" src={viteLogo} alt="Vite Logo" />
      </p>
    </footer>
  )
}
