import { useEffect, useState } from 'react';
import Quiz from './Quiz';
import '../sass/quiz.scss';
import { decode } from 'html-entities';

const QuizPanel = (props) => {
  const {quiz, startQuiz} = props;
  const [options, setOptions] = useState([]);
  const [checking, setChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [isEveryAnswered, setIsEveryAnswered] = useState(false);
  // const [replay, setReplay] = useState(false);

  useEffect(() => {
    let answers = [];
    const ans = quiz.map(q => {
      answers = [];
      answers = q.incorrect_answers;
      answers.push(q.correct_answer);
      // Fisher-Yate's shuffle algorithm
      const suffledAns = array => array.sort(() => Math.random() - 0.5);

      return suffledAns(Array.from(new Set(answers)));
    })
    setOptions(ans);
  }, [quiz]);

  console.log('sorted')
  console.log(options);

  function incrementScore() {
    setScore(prevScore => prevScore + 1);
  }
  // useEffect(() => {
  //   setOptions([]);
  //   // quiz.map(q => setOptions(prevOptions => prevOptions, q.incorrect_answers));
  //   // let answers = [];
  //   // quiz.map(q => {
  //   //   answers = [];
  //   //   answers = q.incorrect_answers;
  //   //   answers.push(q.correct_answer);
  //   //   return setOptions(prevOpt => [...prevOpt, answers]);
  //   // })
  //   const updatedOptions = quiz.map(q => {
  //     const answers = [...q.incorrect_answers, q.correct_answer];
  //     return answers;
  //   });

  //   setOptions(updatedOptions);
  // }, [quiz])

  // console.log(options);

  // console.log(quiz);
  let quizzes;

  quizzes = quiz.map((element, index) => {
    console.log(options[index]);
    return <Quiz key={index}
      id={index}
      question={decode(element.question)}
      options={options[index]}
      correct_option={decode(element.correct_answer)}
      // isSelected={element.isSelected}
      checking={checking}
      incrementScore={incrementScore}
      startQuiz={startQuiz}
      setIsEveryAnswered={setIsEveryAnswered}
    />
  });

  function playAgain() {
    startQuiz();
    setChecking(false);
    setScore(0);
    setIsEveryAnswered(false);
  }

  return (
    <>
      <div className='quiz-container'>
        {quizzes}
        <div className='score-section'>
          {checking ? 
          <>
            <p className='score'>You have scored <span>{score}</span>/5 answers.</p>
            <button className="btn" onClick={playAgain}>Play again</button>
          </>
            :
          (isEveryAnswered && <button 
            className="btn"
            onClick={() => setChecking(true)}          
          >Check answers</button>)
          }
        </div>
      </div>
    </>
  )
}

export default QuizPanel