// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe (){
    const eventHandler1 = (event) => (
        console.log("Good!")
    )
    const eventHandler2 = (event) => (
        console.log("Hey! Eyes on me!")
    )
    return (
        <div>
            <button onFocus={eventHandler1} onBlur={eventHandler2}>
            Eyes on me
            </button>
        </div>
    )
}


export default EyesOnMe;
