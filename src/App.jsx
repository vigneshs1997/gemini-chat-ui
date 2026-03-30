
import './App.css'
import ChantInput from './components/ChantInput'
import { useState } from 'react'
function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      //API
    } catch (error) {
      alert("Failed to get response");
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-5'>
        <h1>Gemini AI ChatBot</h1>
      </header>
      {/* Input From User */}
      <ChantInput onSubmit={handleQuestionSubmit} />
      {/* Response */}
    </div>
  )
}

export default App
