import { useState } from 'react'

export default function Card({title, onClick}) { 
   
    return (
 
            <div onClick={onClick} className="flex rounded-lg shadow-md items-center justify-center cursor-pointer hover:shadow-xl transition duration-300 ease-in-out w-80 h-40 bg-white mb-10">
                  <h2 className="text-xl font-bold mb-2">{title}</h2>
    
            </div>
            )

} 