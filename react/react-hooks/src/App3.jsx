import { useReducer, useState } from "react"


function reducer (state, action) {
    switch(action.type) {
        case 'add':
            return {
                result: state.result + action.num
            }
        case 'minus':
            return {
                result: state.result - action.num
            }
        default:
            return state
    }
}

function App() {

    const [res, dispatch] = useReducer(reducer, {result: 0})

  return (
    <div>
      <h3>{res.result}</h3>
      <button onClick={() => dispatch({type: 'add', num: 2})}>+</button>
      <button onClick={() => dispatch({type: 'minus', num: 1})}>-</button>
    </div>
  )
}

export default App