import { useParams, Link } from 'react-router-dom'
import Navigation from './Navigation'
import { lessons } from '../data/lessons'
import './LessonDetail.css'

function LessonDetail() {
  const { id } = useParams()
  const lesson = lessons.find(l => l.id === parseInt(id))
  
  if (!lesson) {
    return (
      <div className="lesson-detail">
        <Navigation />
        <div className="error-message">
          <h2>Lesson not found</h2>
          <Link to="/lessons">Back to Lessons</Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="lesson-detail">
      <Navigation />
      <div className="lesson-content">
        <div className="lesson-header">
          <Link to="/lessons" className="back-link">← Back to Lessons</Link>
          <div className="lesson-title-section">
            <span className="lesson-badge">Lesson {lesson.id}</span>
            <h1>{lesson.title}</h1>
            <p className="lesson-subtitle">{lesson.description}</p>
            <div className="lesson-meta">
              <span>⏱️ {lesson.duration}</span>
            </div>
          </div>
        </div>
        
        <div className="lesson-body">
          {lesson.content.sections.map((section, index) => (
            <div key={index} className="section">
              <h2>{section.title}</h2>
              <div className="section-content">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
          
          <div className="key-takeaways">
            <h2>Key Takeaways</h2>
            <ul>
              {lesson.content.keyTakeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lesson-navigation">
          {parseInt(id) > 1 && (
            <Link 
              to={`/lessons/${parseInt(id) - 1}`}
              className="nav-button prev"
            >
              ← Previous Lesson
            </Link>
          )}
          {parseInt(id) < lessons.length && (
            <Link 
              to={`/lessons/${parseInt(id) + 1}`}
              className="nav-button next"
            >
              Next Lesson →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default LessonDetail

