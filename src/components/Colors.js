import React from 'react';

const colors = [ "red", "blue", "green", "grey", "orange", "lightBlue"];

const Colors = () => {

    const randomColor = Math.floor( Math.random() * colors.length )

    document.body.style = `background: ${colors[randomColor]}`;

    return (
        <>
        </>       
    );
};

export default Colors;