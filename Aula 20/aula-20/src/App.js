import logo from './logo.svg';
import './App.css';
import './button'

import Button from './button';
import {useState, useEffect, useRef} from "react";


function App() {
  const [aContent, setA] = useState("Learn React");
  const [showTitle, setShowTitle] = useState(false);

  function clickA(){
    setA("Learn more React!")
  }

  function clickTitle(){
    setShowTitle(!showTitle)
  }

  const firsEff = useRef(true);
  useEffect(()=>{
    if(firsEff.current){
      firsEff.current=false
    }else{
      console.log("Texto do anchor mudou!")
    }   
  },[aContent])
  
  return (
    <div className="App">
      <header className="App-header">
        {showTitle?<h1>REACT!</h1>:null}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button handleClick={clickTitle} text="What im doing here?"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {aContent}
        </a>
        <Button handleClick={clickA} text="I know!"/>
      </header>
    </div>
  );
}

export default App;
