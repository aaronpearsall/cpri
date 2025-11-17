import { useState } from 'react'
import Navigation from './Navigation'
import { quizQuestions } from '../data/quiz'
import './Quiz.css'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set())

  const handleAnswerSelect = (optionIndex) => {
    if (answeredQuestions.has(currentQuestion)) return
    
    setSelectedAnswer(optionIndex)
    setShowExplanation(true)
    
    if (optionIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
    
    setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]))
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizComplete(false)
    setAnsweredQuestions(new Set())
  }

  if (quizComplete) {
    const percentage = Math.round((score / quizQuestions.length) * 100)
    return (
      <div className="quiz-page">
        <Navigation />
        <div className="quiz-container">
          <div className="quiz-results">
            <h1>Quiz Complete! 🎉</h1>
            <div className="score-display">
              <div className="score-circle">
                <div className="score-number">{score}</div>
                <div className="score-total">/{quizQuestions.length}</div>
              </div>
              <div className="score-percentage">{percentage}%</div>
            </div>
            <p className="score-message">
              {percentage >= 80 
                ? "Excellent work! You have a strong understanding of credit and political risk insurance."
                : percentage >= 60
                ? "Good job! Review the lessons to strengthen your knowledge."
                : "Keep learning! Review the lessons and try again."}
            </p>
            <button onClick={handleRestart} className="btn-restart">
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="quiz-page">
      <Navigation />
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Interactive Quiz</h1>
          <p>Test your knowledge of credit and political risk insurance</p>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="question-counter">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </div>

        <div className="question-card">
          <h2 className="question-text">{question.question}</h2>
          
          <div className="options">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correct
              const isWrong = isSelected && !isCorrect
              const showCorrect = showExplanation && isCorrect
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`option-button ${
                    showCorrect ? 'correct' : 
                    isWrong ? 'wrong' : 
                    isSelected ? 'selected' : ''
                  }`}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                  {showCorrect && <span className="checkmark">✓</span>}
                  {isWrong && <span className="crossmark">✗</span>}
                </button>
              )
            })}
          </div>

          {showExplanation && (
            <div className="explanation">
              <h3>Explanation:</h3>
              <p>{question.explanation}</p>
            </div>
          )}

          <div className="quiz-navigation">
            <button
              onClick={handleNext}
              disabled={!showExplanation}
              className="btn-next"
            >
              {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz

