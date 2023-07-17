import { useState, useEffect } from "react";
import { decode } from 'html-entities';
import { v4 as uuidv4 } from 'uuid';

const Quiz = (props) => {
  const {question, options, id, checking, correct_option, incrementScore, setIsEveryAnswered } = props;

  const [opt, setOpt] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  // const [selectedOptionArray, setSelectedOptionArray] = useState([]);
  // console.log(selectedValue);

  function handleOptionSelection(e) {
    if (checking) return;
    setSelectedOption(e.target.value);
  }

    useEffect(() => {
      if (options !== undefined) {
        const mappedOptions = options.map((option, index) => {

          const uniqueId = uuidv4();
          const decodedOption = decode(option);

          setIsEveryAnswered(selectedOption === "" ? false: true)

          return (
            <div key={index}>
              <label 
                htmlFor={uniqueId}
                className={`option-btn 
                  ${selectedOption === decodedOption ? 'selected' : ''}
                  ${checking ? 'not-allowed' : ''}
                  ${checking && selectedOption === decodedOption ? 'wrong-option' : ''}
                  ${checking && decodedOption === correct_option ? 'correct-option' : ''}`  // only after checking, set the correct option color...
                  }>
                    {decode(option)}
              </label>
              <input 
                type="radio" 
                name={question} 
                id={uniqueId} 
                className="input-radio"
                value={decodedOption}
                onChange={(e) => handleOptionSelection(e)}
                checked={selectedOption === decodedOption}
              />
           </div>
          )
        })
        setOpt(mappedOptions);
      }
    }, [options, selectedOption, checking]);

    // side effect to count the score...
    useEffect(() => {
      if (selectedOption === correct_option && checking) incrementScore();
    }, [checking]);
  return (
    <>
    <div className="quiz-element">
        <div className="question">{question}</div>
        <div className="options">
          {opt}
        </div>
    </div>
    <hr />
    </>
  )
}

export default Quiz