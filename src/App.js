import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './quotes.json'


// const colors = [ "red", "blue", "green", "grey", "orange", "lightBlue"];
function App() {
  
  const randomIndex = Math.floor( Math.random() * quotes.length )

  const [ index, setIndex ] = useState(randomIndex)

  const changePhrase = () => {
    const randomIndex = Math.floor( Math.random() * quotes.length )
    setIndex(randomIndex)
  }

  // const randomColor = Math.floor( Math.random() * colors.length )
  
  // document.body.style = `background: ${colors[randomColor]}`;

  return (
    <div className="App">
    <QuoteBox index={index} changePhrase={changePhrase} /* randomColor= {colors[randomColor]} */ />
    </div>
  );
}

export default App;
