import React, {useState} from 'react';
import "./Carousel.css";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"

export const Carousel = ({data}) => {
    // useState hook to set the slide movement according to indicators and arrow movements
    const [slide, setSlide] = useState(0);
    // function to set the slide movement according to arrow movements
    const nextSlide= ()=>{
          setSlide(slide=== data.length-1 ? 0 : slide + 1 );     
    }
    const previousSlide= ()=>{
         setSlide(slide === 0 ? data.length-1 : slide - 1 );
    }
    
    return <div className="Carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={previousSlide}/>
        {data.map((item, idx)=>{
        return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
    })}
    <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
    <span className="indicators">
        {data.map((_, idx)=> {
            return <button key={idx} onClick={()=>setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-disable"}></button>
        })}
    </span>
    </div>
};