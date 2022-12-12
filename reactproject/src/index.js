import React from 'react';
import ReactDOM from 'react-dom';
const fname = 'Dhruv';
const lname = 'Gupta';

const date = new Date();

ReactDOM.render(<>
                  <h1>My name is {fname} {lname}</h1>
                  <h1>Current Time is <b>{date.toLocaleTimeString()}</b></h1>
                  <h1>Current Date is <b>{date.toLocaleDateString()}</b></h1>
                </>, document.getElementById('root'));

// ReactDOM.render(<>
//                      <h1>{`My name is ${fname} ${lname}`}</h1>
//                 </>, document.getElementById('root'));


// ReactDOM.render(<>
//                     <h1>Thapa Technical</h1> 
//                     <p>Please like and share!!!</p> 
//                     <h2> Subscribe my channel!!!</h2>
//                 </>, document.getElementById('root'));



// ReactDOM.render([<h1>Thapa Technical</h1>, 
//                  <p>Please like and share!!!</p>,
//                  <h2> Subscribe my channel!!!</h2>], 
//                 document.getElementById('root'));


//ReactDOM.render(<h1>Thapa Technical</h1> <p>Please like and share!!!</p>, document.getElementById('root'));




