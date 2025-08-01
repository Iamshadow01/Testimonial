import React from 'react'
import { FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

const Card = ({reviews}) => {
  return (
    <div className="flex flex-col md:relative">
        <div className="absolute top-[-7rem] z-[10] mx-auto">
            <img src={reviews.image} className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" alt='Person'></img>
            <div className="z-[-10] rounded-full w-[140px] h-[140px] bg-violet-500 absolute top-[-6px] left-[10px]"></div>
        </div>
        <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize tracking-wide">{reviews.name}</p>
        </div>
        <div className="text-center">
            <p className="text-violet-300 uppercase text-sm">{reviews.job}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft></FaQuoteLeft>
        </div>
        <div className="text-center mt-4 text-slate-500">
            <p>{reviews.text}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteRight></FaQuoteRight>
        </div>

    </div>
  )
}
export default Card;
