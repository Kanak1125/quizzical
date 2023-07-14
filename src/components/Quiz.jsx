import { useState, useEffect } from "react";

const Quiz = (props) => {
    const {question, options} = props;
  // console.log(options);
    // changing the 'options' Obj. into the array of key, value pair using Object.entries()...
    // const opt = Object.entries(options).map(([key, value]) => {
      // const labelId = question;
    //    return (
    //    <div key={key}>
    //     <label htmlFor={labelId} className={`option-btn ${isSelected ? 'selected' : ''}`}>{value}</label>
    //     <input type="radio" name={question} id={labelId} />
    //    </div>
    //    )
    // })

  const [opt, setOpt] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);

    useEffect(() => {
      if (options !== undefined) {
        // let selected
        const mappedOptions = options.map((option, index) => {
          const combinedKey = index + option; // so that the label don't go wrong for e.g. when more than one question have options as 'true' and 'false'
          // const isSelected = {question: ''}
          return (
            <div key={index}>
              <label htmlFor={combinedKey} className={`option-btn ${selectedValue === option ? 'selected' : ''}`}>{option}</label>
              <input 
                type="radio" 
                name={question} 
                id={combinedKey} 
                value={option}
                onChange={(e) => setSelectedValue(e.target.value)}
                checked={ selectedValue === option }
              />
           </div>
          )
        })
        setOpt(mappedOptions);
      }
    }, [options, selectedValue]);
  return (
    <>
    <div className="quiz-element">
        <div className="question">{question}</div>
        <div className="options">
          {opt}
          {/* {options} */}
        </div>
    </div>
    <hr />
    </>
  )
}

export default Quiz