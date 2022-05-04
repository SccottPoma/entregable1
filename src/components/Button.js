import React from 'react';

const Button = ( { randomColor,changePhrase } ) => {
    return (
        <div>
            <button className='button' onClick={changePhrase} style={{color: randomColor}}>
                Next
            </button>
        </div>
    );
};

export default Button;