import { useState } from 'react';
import './App.css';
import InitialPanel from './components/InitialPanel';
import QuizPanel from './components/QuizPanel';

function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  
  function startQuiz() {
    setHasQuizStarted(true);
  }

  return (
    <div className="app">
      {
        hasQuizStarted ?
        <QuizPanel /> :
        <InitialPanel 
          startQuiz={startQuiz}
        />
      }
    </div>
  );
}

export default App;
