import { useState } from 'react';
import './App.css';
import InitialPanel from './components/InitialPanel';
import QuizPanel from './components/QuizPanel';
import './sass/app.scss';

function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [quiz, setQuiz] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  
  function startQuiz() {
    fetch('https://opentdb.com/api.php?amount=5').then(res => 
        res.json()
      ).then(data => {
        setHasQuizStarted(true);
        return setQuiz(data.results)
      })
      .catch(err => console.log("Error: " + err));
  }
  console.log(quiz);

  return (
    <div className="app">
      {
        hasQuizStarted ?
        <QuizPanel  quiz={quiz} startQuiz={startQuiz}/> :
        <InitialPanel 
          startQuiz={startQuiz}
        />
      }
    </div>
  );
}

export default App;
