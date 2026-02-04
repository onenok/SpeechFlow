import React from 'react'
import '../styles/App.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="/privacy-policy">Privacy Policy</a>
        <span className="sep"> | </span>
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
      <p className="copyright">© {new Date().getFullYear()} SpeechFlow</p>
      <p>Made with React<img className="spin textImg" src="/src/assets/react.svg" alt="React Logo"></img> + Vite<img className="textImg" src="/src/assets/vite.svg" alt="Vite Logo"></img></p>
    </footer>
  )
}
