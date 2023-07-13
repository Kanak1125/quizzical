import { useState, useEffect } from 'react';
import './App.css';
import InitialPanel from './components/InitialPanel';
import QuizPanel from './components/QuizPanel';
import './sass/app.scss';

function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [quiz, setQuiz] = useState([]);
  
  function startQuiz() {
    fetch('https://opentdb.com/api.php?amount=5').then(res => 
        res.json()
      ).then(data => 
        setQuiz(data.results)
      );
    setHasQuizStarted(true);
  }
  console.log(quiz);

  return (
    <div className="app">
      {
        hasQuizStarted ?
        <QuizPanel  quiz={quiz}/> :
        <InitialPanel 
          startQuiz={startQuiz}
        />
      }
    </div>
  );
}

export default App;
