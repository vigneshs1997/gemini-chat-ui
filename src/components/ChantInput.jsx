import React from 'react'
import { useState } from 'react'
const ChantInput = ({onSubmit}) => {
    const [question, setQuestion] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();//It will prevent the default behaviour of submint before clicking submit button
        if (question.trim()) {
            onSubmit(question);
            setQuestion("");
        }
    }
  return (
    <div className='container my-4'> 
        <div onSubmit={handleSubmit}>
              <div className='form-group'>
                  <label htmlFor="question">Ask a Question</label>
                  <input type="text"
                      className='form-control'
                      id='question'
                      placeholder='Enter your question'
                      value={question}
                      onChange={(e)=>setQuestion(e.target.value)} />
              </div>
              <button type='submit' className='btn btn-primary mt-2'>
                  Submit
              </button>
        </div>
    </div>
  )
}

export default ChantInput
