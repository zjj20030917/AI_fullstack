import { useRef, useEffect } from 'react'



function App() {
  const inputRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      console.log(inputRef.current.value)
    }, 2000)
  }, [])

  // function onChange(event) {
  //   console.log(event.target.value)
  // }
  return (
    // <input type="text" defaultValue={'hello'} onChange={onChange}/>
    <input type="text" defaultValue={'hello'} ref={inputRef} />
  )
  
}

export default App
