import { Link } from "react-router-dom";
import Card from "./Card"
import {years} from "./data"


function YearSelection({setSelectedYear}) {

    const handleSelectedYear = (year) => { 
        setSelectedYear(year);
    }

    return (
        <div className='flex justify-between flex-wrap p-10'>
            {years.map((year, index) => { 
                return  (
                    <Link to="/quiz" key={index}>
                        <Card title={year} onClick={handleSelectedYear}></Card>
                    </Link>
                )
                })}
        </div>
    );

}

export default YearSelection