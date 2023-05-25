import Card from "./Card"
import { Link } from "react-router-dom";
import {majors} from "./data"

export default function MajorSelection( {setSelectedMajor} ) {

const handleSelectedMajor  = (major) => { 
    setSelectedMajor(major); 
}

return (
    <div className='flex justify-between flex-wrap p-10'>
        {majors.map((major, index) => {
            return (
                <Link to="/year" key={index}>
                    <Card title={major} onClick={handleSelectedMajor}></Card>
                </Link>
            )
        })}
    </div>
);
}