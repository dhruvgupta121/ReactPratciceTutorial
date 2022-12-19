import React from "react";
import {add, sub, mult, div} from "./Calc.jsx";

function App(){

   return (<>
    <h1>Hello World!</h1>
    <ol>
       <li>Addition of two number is {add(30, 3)}</li>
       <li>Subtraction of two number is {sub(30, 3)}</li>
       <li>Multiplication of two number is {mult(30, 3)}</li>
       <li>Divison of two number is {div(10, 3)}</li>
    </ol>
</>); }

export default App;