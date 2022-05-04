
const colors = [ "red", "blue", "green", "grey", "orange", "lightBlue"];

const color = () => {

    const randomColor = Math.floor( Math.random() * colors.length )

    return colors[randomColor]    
}

    export default color;