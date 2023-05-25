import {Link} from "react-router-dom"

export default function Home() { 
    return ( 
        <>
            <h1>
                <Link to="/major" className="text-white font-bold font-mono">Adjust the QUIZ</Link>
            </h1>
        </>
    );
}