import { useState } from 'react'


function App() {
  let [num, setNum] = useState(1) //  [1, func]

  function handle() {
    // num++ // num 改了但无法出发试图更新
    setNum(num + 1)  // 将 num 修改成 参数值， 并触发试图更新
    console.log(num)
  }

  console.log('视图更新')
  return (
    <div>
      <button onClick={handle}>{num}</button>
    </div>
  );
}

export default App;
