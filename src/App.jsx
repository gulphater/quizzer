// I use useState to pass the selected major and year to QuizScreen
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import QuizScreen from "./components/QuizScreen"
import MajorSelection from "./components/MajorSelection"
import YearSelection from './components/YearSelection'
function App() {
  
  const [selectedMajor, setSelectedMajor] = useState(''); 
  const [selectedYear, setSelectedYear] = useState(''); 



  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/major" element={<MajorSelection setSelectedMajor={setSelectedMajor}/>} />
        <Route path="/year" element={<YearSelection selectedMajor={selectedMajor} setSelectedYear={setSelectedYear}/>} />
        <Route path="/quiz" element={<QuizScreen selectedMajor={selectedMajor} selectedYear={selectedYear}/>} />

      </Routes>
    </Router>
  ); 
}

export default App;
