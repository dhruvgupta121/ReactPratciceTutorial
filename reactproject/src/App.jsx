import React from "react";

let greetingsMessage = "Good Morning";
let currentTimeComponent = new Date().getHours();

const styleSheet = {};

if(currentTimeComponent >= 12 && currentTimeComponent < 17){
    greetingsMessage = "Good Afternoon";
    styleSheet.color = 'orange';
}
else if(currentTimeComponent >= 17 && currentTimeComponent < 20){
    greetingsMessage = "Good Evening";
    styleSheet.color = 'green';
}
else if(currentTimeComponent >= 20 && currentTimeComponent < 24){
    greetingsMessage = "Good Night";
    styleSheet.color = 'yellow';
}

function App(){
    return <h1 style={styleSheet}>Hello World from App Component... {greetingsMessage}</h1>;
}

export default App;