import React from 'react';
import './App.css';

import Navbar from './conponents/Navbar';
import Body from './conponents/Body';




// const reducer=(state, {type,payload}) =>{
//   switch (type) {
//     case 'increment':
//       return state + payload;
//     case 'decrement':
//       return state - payload;
//     default:
//       console.log("Type incorrect",type)
//       return state;
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, 0);

  
  return (
    <div className="App">


    
    <Navbar/>
    <Body/>
    
     
{/* 
     Counter: {state}
     <div>
      <button onClick={() => dispatch({type: 'decrement',payload : 1})}>-</button>
      <button onClick={() => dispatch({type: 'increment',payload : 100})}>+</button>
      </div> */}
    </div>
  );
}

export default App;
