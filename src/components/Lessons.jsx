import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import { lessons } from '../data/lessons'
import './Lessons.css'

function Lessons() {
  return (
    <div className="lessons-page">
      <Navigation />
      <div className="lessons-container">
        <div className="page-header">
          <h1>Lessons</h1>
          <p>Explore comprehensive lessons on credit and political risk insurance</p>
        </div>
        
        <div className="lessons-grid">
          {lessons.map(lesson => (
            <Link 
              key={lesson.id} 
              to={`/lessons/${lesson.id}`}
              className="lesson-card"
            >
              <div className="lesson-number">Lesson {lesson.id}</div>
              <h2>{lesson.title}</h2>
              <p className="lesson-description">{lesson.description}</p>
              <div className="lesson-meta">
                <span className="duration">⏱️ {lesson.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lessons

