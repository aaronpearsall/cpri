import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="hero">
        <div className="hero-content">
          <h1>Learn CPRI</h1>
          <p className="subtitle">Credit & Political Risk Insurance</p>
          <p className="description">
            Master the fundamentals of credit and political risk insurance through 
            interactive lessons, real-world examples, and comprehensive quizzes.
          </p>
          <div className="cta-buttons">
            <Link to="/lessons" className="btn btn-primary">
              Start Learning
            </Link>
            <Link to="/glossary" className="btn btn-secondary">
              Browse Glossary
            </Link>
          </div>
        </div>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Comprehensive Lessons</h3>
          <p>Learn about credit risk, political risk, and how insurance protects businesses in international trade.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Interactive Quizzes</h3>
          <p>Test your knowledge with engaging quizzes that reinforce key concepts.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💡</div>
          <h3>Real-World Examples</h3>
          <p>Explore practical scenarios and case studies from actual business situations.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📖</div>
          <h3>Complete Glossary</h3>
          <p>Access definitions and explanations of key terms and concepts.</p>
        </div>
      </div>
    </div>
  )
}

export default Home

