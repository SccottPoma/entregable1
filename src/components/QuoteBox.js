import React from 'react';
import quotes from '../quotes.json'

const QuoteBox = ( { index, changePhrase, randomColor } ) => {
    
    return (
        <div className='box' style={{ color: randomColor}} >
            {/* <Colors /> */}
            <h1>{quotes[index].quote}</h1>
            <p>{quotes[index].author}</p>
            <button className='button' onClick={changePhrase} style={{color: randomColor}}>
                Next
            </button>
        </div>
    );
};

export default QuoteBox;