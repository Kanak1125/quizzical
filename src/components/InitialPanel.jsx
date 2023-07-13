import React from 'react'

const InitialPanel = ({startQuiz}) => {
  return (
    <div>
        <h1>Quizzical</h1>
        <p className='sub'>Some description if needed</p>
        <button className='btn' onClick={startQuiz}>Start quiz</button>
    </div>
  )
}

export default InitialPanel