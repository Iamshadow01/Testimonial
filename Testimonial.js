import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft,FiChevronRight} from "react-icons/fi";
let i=0;
const Testimonial = ({reviews}) => {
    const [review,setReview] = useState(reviews[i]);
    function leftshifthandler(){
        if(i===0){
            i=4;
        }
        else{
            i--;
        }
        setReview(reviews[i]);
    }
    function rightshifthandler(){
        if(i===4){
            i=0;
        }
        else{
            i++;
        }
        setReview(reviews[i]);
    }
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function surprisehandler(){
        i = getRndInteger(0, 5);
        setReview(reviews[i]);
    }
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-lg">
        <Card reviews={review}/>
        <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center">
            <button onClick={leftshifthandler} className="cursor-pointer transition-all duration-150 hover:via-violet-500">
                <FiChevronLeft/>
            </button>
            <button onClick={rightshifthandler} className="cursor-pointer transition-all duration-150 hover:via-violet-500">
                <FiChevronRight/>
            </button>
        </div>
        <div>
            <button onClick={surprisehandler} className="bg-violet-400 transition-all duration-200 hover:bg-violet-500 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-2">Surprise Me</button>
        </div>
    </div>
  )
}
export default Testimonial;
