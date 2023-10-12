import React , { useState } from "react";

import "./WordCounter.css";


const WordCounter = () =>{
    const [wordcount , setwordcount] = useState(0);

    const counter = (str) =>{
        const words = str.split(' ');
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== '') {
                count++;
            }
        }
        setwordcount(count);
    };

    return(
        <div className="container">
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea name="textAr" id="textAr" cols="50" rows="10" placeholder="Enter Your Text Here" onKeyUp={(e => counter(e.target.value))}></textarea>
            <h4>Word Count : {wordcount}</h4>
        </div>
    )
}

export default WordCounter;