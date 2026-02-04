import React from 'react'
import '../styles/App.css'

export default function Nav() {
  return (
    <nav className="site-nav">
        <ul className="nav-list">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/features">Features</a></li>
            <li className="nav-item"><a href="/donate">Donate</a></li>
            <li className="nav-item"><a href="/about">About Us</a></li>
            <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
    </nav>
  )
}