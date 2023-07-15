import { useState, useEffect } from "react";
import { decode } from 'html-entities';
import { v4 as uuidv4 } from 'uuid';

const Quiz = (props) => {
  const {question, options, id, checking } = props;

  const [opt, setOpt] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  // console.log(selectedValue);

  function handleOptionSelection(e) {
    if (checking) return;
    setSelectedOption(e.target.value);
  }

    useEffect(() => {
      if (options !== undefined) {
        const mappedOptions = options.map((option, index) => {

          const uniqueId = uuidv4();
          const decodeOption = decode(option);

          return (
            <div key={index}>
              <label 
                htmlFor={uniqueId}
                className={`option-btn 
                  ${selectedOption === decodeOption ? 'selected' : ''}
                  ${checking ? 'not-allowed' : ''}`
                  }>
                    {decode(option)}
              </label>
              <input 
                type="radio" 
                name={question} 
                id={uniqueId} 
                className="input-radio"
                value={decodeOption}
                onChange={(e) => handleOptionSelection(e)}
                checked={selectedOption === decodeOption }
              />
           </div>
          )
        })
        setOpt(mappedOptions);
      }
    }, [options, selectedOption, checking]);
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