import { useEffect, useState } from 'react';
import Quiz from './Quiz';
import '../sass/quiz.scss';
import { decode } from 'html-entities';

const QuizPanel = (props) => {
  const {quiz, isLoading} = props;
  const [options, setOptions] = useState([]);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    let answers = [];
    const ans = quiz.map(q => {
      answers = [];
      answers = q.incorrect_answers;
      answers.push(q.correct_answer);
      // Fisher-Yate's shuffle algorithm
      const suffledAns = array => array.sort(() => Math.random() - 0.5);
      return suffledAns(answers);
    })
    setOptions(ans);
  }, [quiz]);

  console.log('sorted')
  console.log(options);

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
      // isSelected={element.isSelected}
      checking={checking}
    />
  });

  return (
    <>
      <div className='quiz-container'>
        {quizzes}
        <div className='score-section'>
          <button 
            className="btn"
            onClick={() => setChecking(true)}          
          >Check answers</button>
          {/* <p className='score'>You have scored<span>0</span>/5 answers.</p>
          <button className="btn">Play again</button> */}
        </div>
      </div>
    </>
  )
}

export default QuizPanel