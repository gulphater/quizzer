import {useState, useEffect} from 'react'; 
import {majors, years, quizQuestions} from "./data";
import {Link} from 'react-router-dom'


export default function QuizScreen({selectedMajor, selectedYear}) { 
    
    
    // Checking if major or year is undefined
    if(selectedMajor.target == undefined || selectedYear.target == undefined) { 
        return ( 
            <>
                <h1 className='text-red-500 font-bold font-sans mb-5'>
                    Go back and select your major and school year!
                </h1>
                <Link to="/" className='border-2 rounded-lg p-2'>Return to Main Page</Link>
            </>
        )
    }

    // Filter questions based on selectedMajor and selectedYear first
    const relevantQuestions = quizQuestions.filter((question) => {
        question.major == selectedMajor.target.innerTextc && question.year == selectedYear.target.innerText;
    });

    console.log(relevantQuestions);
    
    // Actually Rendering the Quiz
    return(
        <>
        <h2 className='text-white'>
            Your Major: {selectedMajor.target.innerText}
        </h2>
        <h2 className='text-white my-2'>Your School Year: {selectedYear.target.innerText}</h2>

        
        
    

        </> 
    );
}