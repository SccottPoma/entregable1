import React from 'react';
import quotes from '../quotes.json'
import color from '../utils/color';
import Button from './Button';

const QuoteBox = ( { index, changePhrase } ) => {
    
    const randomColor = color()

    document.body.style = `background: ${randomColor}`;

    return (
        <div className='box' style={{ color: randomColor}} >
            <h1>{quotes[index].quote}</h1>
            <p>{quotes[index].author}</p>
            <Button randomColor = {randomColor} changePhrase={changePhrase} />
        </div>
    );
};

export default QuoteBox;