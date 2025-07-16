- 单页应用：整个项目只有唯一的一个html文件，所有的页面都做成组件的样子，被添加到这个 html 文件中进行渲染

# 组件
1. class组件
2. function组件

# hooks（钩子函数）
- 由 react 官方封装好的一系列函数，他们的用法和用法
1. useState -- 定义一个响应式变量，提供专门的方法修改该变量值
2. useEffect -- 副作用函数
    1. 组件每次加载（挂载）就会触发
    2. useEffect 第二个参数为一个空数组时或者只有常量的数组时，只会在组件初次渲染（挂载）时触发，但如果数组里是像时间戳这种会变的，就会在每次渲染时触发
    3. useEffect 第二个参数为一个数组，数组中传入一个变量时，该变量每次修改值都会带来useEffect的重新执行
    4. useEffect 第一个参数是一个函数，该函数内部返回出来一个新的函数，新函数会在组件不展示（卸载）时才会触发
3. useLayoutEffect -- 其中的 effect 函数作为同步来执行，useEffect中的 effect 函数是看做异步函数来执行
4. useReducer -- 当修改 state 的逻辑比较复杂时，用useReducer
    1. 传入的 reducer 函数中不能直接修改原来的state，必须要返回一个新对象才行
    2. useReducer 通常配合第三方 immer 一起使用
5. useRef -- 获取DOM结构
6. useContext -- 跨任意层组件进行数据传递
    1. 一般用在父组件中，在父组件中定义一个 Context 上下文，在子组件中通过 useContext 来获取父组件中定义的上下文

# UI框架


# todo
1. 初次加载页面，展示后端返回的所有数据 get http://localhost:3001/data
2. 搜索某一条数据的功能 get http://localhost:3001/data/?q=xxx
3. 删除表格中某一条数据的功能 delete http://localhost:3001/data/id