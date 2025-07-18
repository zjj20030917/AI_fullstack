# 为什么要有 this ？
- this 提供了一种更优雅的方式来隐式传递一个对象的引用，可以让代码更加简洁，易于复用

# this可以用在哪里
1. 函数作用域
2. 全局作用域内：this 指向 window

- this 是一个代词，代指一个对象


# this 的绑定规则
1. 默认绑定 --- 当函数被独立调用时，函数的 this 指向 window
2. 隐式绑定 --- 当函数引用有上下文对象且被该对象调用时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象
3. 隐式丢失 --- 当函数被多层对象调用时，函数的 this 指向最近的那一层
4. 显示绑定
    1. fn.call(obj, x, y, ...)
    显示的将 fn 里面的 this 绑定到 obj 上，call负责帮 fn 接收参数
    2. fn.apply(obj, [x, y, ...])
    显示的将 fn 里面的 this 绑定到 obj 上，apply负责帮 fn 接收参数，参数必须以数组盛放
    3. fn.bind(obj, x, y, ...)(z, a, ...)
    显示的将 fn 里面的 this 绑定到 obj 上，bind 会返回一个新的函数，bind 新函数都可以负责帮 fn 接收参数，参数零散的传入

5. new 绑定 -- new 的原理会导致函数的 this 指向实例对象

# 箭头函数 
箭头函数中没有 this 这个概念，写在箭头函数中的 this，也就是它外层那个非箭头函数的 this