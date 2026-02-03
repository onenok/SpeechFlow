import { useState } from 'react'
import './styles/App.css'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import MainContent from './components/MainContent.jsx'

function App() {
  return (
    <div className="App">
      {
        /* nav */
        <Nav />
      }
      {
        /* main content */
        <MainContent />
      }

      {
        // Footer 元件
        <Footer />
      }
    </div>
  );
}

export default App;
