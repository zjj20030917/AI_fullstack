# 低代码平台
- 物料区
- 画布区
- 组件右侧的属性区

1. 将物料区的组件拖拽到画布区即可，其实就是维护一个 json 对象，用户执行拖拽，我们将组件对象添加到 json 的某一层中
2. 在右侧编辑某组件的属性，其实就是在该组件的对象中增加属性值
3. 将 json 展示成树状

# tailwindcss
- 原子化css，只需要写类名，不需要写css，尤其在低代码平台需要
1. npm install tailwindcss postcss autoprefixer

2. npx tailwindcss init -p 初始化了一个 tailwindcss 配置文件和 postcss 的配置文件

@tailwind base;
@tailwind components;
@tailwind utilities;

# 准备工作
1. npm install allotment --save  实现拖动改变容易大小
2. npm install antd --save
3. npm install @ant-design/v5-patch-for-react-19 --save  打补丁
import '@ant-design/v5-patch-for-react-19';   兼容react19版本

# zustand 仓库
1. npm install zustand --save

# 项目梳理
1. 创建了 componentsStore 仓库 存放整个 json 对象 (components数组) ，
定义了如何往该json对象中植入子对象(组件)的函数，和移除子对象，更新子对象内部属性的函数

2. 创建了 componentConfigStore 仓库，存放一个对象，该对象用来记录每一个 json 中的组件名，
对应的真实组件的代码

3. 定义了 renderComponents 函数用来将整个 json 渲染成真实的 HTML 结构，这里面借助 React.createElement 函数来实现递归渲染

4. 实现物料区 组件 拖拽到 画布区
  react-dnd  跨组件传递数据
  react-dnd-html5-backend  拖拽

  真的拖拽了一个组件名到 中间区域，就要将这个名字对应的组件对象 植入到 JSON 中