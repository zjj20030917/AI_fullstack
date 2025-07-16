import { useState } from "react";



function App(){
    const [inputValue, setInputValue] = useState('hello')

    function onChange(event) {
        setInputValue(event.target.value)
    }

    return(
        <input type="text" value={inputValue} onChange={onChange} />

    )
}

export default App;