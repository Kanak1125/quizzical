import { useState, useEffect } from "react";
import { decode } from 'html-entities';
import { v4 as uuidv4 } from 'uuid';
import classNames from "classnames";

const Quiz = (props) => {
  const {question, options, checking, correct_option, incrementScore, setIsAnyAnswered } = props;

  const [opt, setOpt] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionSelection(e) {
    setSelectedOption(e.target.value);
  }

    useEffect(() => {
      if (options !== undefined) {
        const mappedOptions = options.map((option, index) => {

          const uniqueId = uuidv4();
          const decodedOption = decode(option);

          setIsAnyAnswered(selectedOption === "" ? false: true)

          return (
            <div key={index}>
              <label 
                htmlFor={uniqueId}
                className={
                  classNames(
                    "option-btn",
                    {"selected": selectedOption === decodedOption },
                    {"not-allowed": checking},
                    {"wrong-option": checking && selectedOption === decodedOption},
                    {"correct-option": checking && decodedOption === correct_option}
                  )
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
                disabled={checking}
              />
           </div>
          )
        })
        setOpt(mappedOptions);
      }
    }, [options, selectedOption, checking, correct_option, question, setIsAnyAnswered]);

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