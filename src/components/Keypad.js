// Code Keypad Component Here

function Keypad (){
    const password = (event) => (
        console.log("Entering password...")
    )
    return (
        <div>
            <input type="password" 
                onChange={password}
            />
        </div>
    )
}


export default Keypad;