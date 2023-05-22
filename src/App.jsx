import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"
import Quiz from "./components/Quiz"
import YearSelection from './components/YearSelection'
function App() {
  const [showYear, setShowYear] = useState(true);

  function handleShowYear() {
    setShowYear(!showYear);
  }

  return (
    <div className='p-10'>
      <h1 className='text-center mb-10 text-4xl font-mono text-cyan-500'>QUIZZER</h1>
      {showYear ? 
        <div className='flex justify-between flex-wrap'>
          <Card title="Computer Science" onClick={handleShowYear}></Card>
          <Card title="Cybersecurity" onClick={handleShowYear}></Card>
          <Card title="Accounting" onClick={handleShowYear}></Card>
          <Card title="Cybersecurity" onClick={handleShowYear}></Card>
        </div>
      :
      <YearSelection></YearSelection>
      }     
    </div>
  )
}

export default App;
