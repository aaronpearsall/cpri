# Learn CPRI

An interactive web application for learning about credit and political risk insurance. This platform provides comprehensive lessons, interactive quizzes, and a detailed glossary to help users understand these important business insurance concepts.

## Features

- 📚 **Comprehensive Lessons**: Four detailed lessons covering:
  - Introduction to Credit Risk Insurance
  - Understanding Political Risk Insurance
  - Credit vs Political Risk: Key Differences
  - Real-World Applications and Case Studies

- 🎯 **Interactive Quiz**: Test your knowledge with 8 questions covering key concepts, with immediate feedback and explanations.

- 📖 **Glossary**: Searchable glossary with 16 key terms, categorized by topic.

- 🎨 **Modern UI**: Beautiful, responsive design with smooth animations and intuitive navigation.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
learn-cpri/
├── src/
│   ├── components/          # React components
│   │   ├── Home.jsx         # Homepage
│   │   ├── Lessons.jsx      # Lessons listing
│   │   ├── LessonDetail.jsx # Individual lesson view
│   │   ├── Quiz.jsx         # Interactive quiz
│   │   ├── Glossary.jsx     # Glossary with search
│   │   └── Navigation.jsx   # Navigation bar
│   ├── data/                # Content data
│   │   ├── lessons.js       # Lesson content
│   │   ├── quiz.js          # Quiz questions
│   │   └── glossary.js      # Glossary terms
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- **React 18**: UI library
- **React Router**: Client-side routing
- **Vite**: Build tool and dev server
- **CSS3**: Styling with modern features

## License

This project is open source and available for educational purposes.

