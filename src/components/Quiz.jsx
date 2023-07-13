import { useState, useEffect } from "react";

const Quiz = (props) => {
    const {question, options, isSelected} = props;
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
    useEffect(() => {
      if (options != undefined) {
        const mappedOptions = options.map(option => {
          return (
            <div key={option}>
              <label htmlFor={option} className={`option-btn`}>{option}</label>
              <input type="radio" name={question} id={option} />
           </div>
          )
        })
        setOpt(mappedOptions);
      }
    }, [options]);
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