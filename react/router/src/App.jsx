import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import User from './views/User';

function App() {

    return (
        <div>
            
            <BrowserRouter>
                <Link to='/home'>首页</Link>
                <Link to='/about'>关于</Link>
                
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
