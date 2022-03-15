// import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";


// Create a react component
const App = () => {
    const buttonText = "Click me!";
    const labelText = 'Enter name:';

    return (
        <div>
            <label className='label' htmlFor='name'>{labelText}</label>
            <input id='name' type='text' />
            <button style={{backgroundColor: 'blue', color:'white'}}>{buttonText}</button>
            {/* outer curly brace indicates we want to reference a JS variable, 2nd is referring to a JS obj */}
        </div>
    );
};

// Take the react component and show on screemn
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);