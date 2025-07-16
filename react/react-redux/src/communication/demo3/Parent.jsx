import Child1 from './Child1.jsx'
import Child2 from './Child2.jsx'
import { useState } from 'react'

export default function () {
  const [list, setList] = useState(['html', 'css', 'js'])

  return (
    <div>
      <Child1 setList={setList}/>
      <Child2 list={list}/>
    </div>
  )
}