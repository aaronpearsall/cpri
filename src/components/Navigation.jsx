import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🛡️ Learn CPRI
        </Link>
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/lessons" 
            className={location.pathname.startsWith('/lessons') ? 'active' : ''}
          >
            Lessons
          </Link>
          <Link 
            to="/quiz" 
            className={location.pathname === '/quiz' ? 'active' : ''}
          >
            Quiz
          </Link>
          <Link 
            to="/glossary" 
            className={location.pathname === '/glossary' ? 'active' : ''}
          >
            Glossary
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

