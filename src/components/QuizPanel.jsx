import { useEffect, useState } from 'react';
import Quiz from './Quiz';
import '../sass/quiz.scss';

const QuizPanel = (props) => {
  const {quiz} = props;
  const [options, setOptions] = useState([]);

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
      question={element.question}
      options={options[index]}
      // isSelected={element.isSelected}
    />
  });

  return (
    <div className='quiz-container'>
      {quizzes}
    </div>
  )
}

export default QuizPanel