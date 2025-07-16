import { useSelector, useDispatch} from 'react-redux'
import { add, addListStore } from '../../store/modules/counterStore'
import { useRef } from 'react'


export default function index() {
  // 使用数据
  let { count, list } = useSelector((state) => state.counter)

  const dispatch = useDispatch()  // 触发器
  const inputRef = useRef(null)

//   const addCount = () => {
//     // 调用仓库中的 add 方法
//     const action = add()
//     dispatch(action)
//   }

  const addList = () => {
    const val = inputRef.current.value
    
    const action = addListStore(val)

    dispatch(action)
  }

  return (
    <div>
      {/* <h3>{count}</h3>
      <button onClick={addCount}>+</button> */}

      <input type="text" ref={inputRef}/>
      <button onClick={addList}>添加</button>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}