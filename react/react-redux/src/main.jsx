
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// 导入总仓库
import store from './store/index.js'
// 导入Provider组件
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
