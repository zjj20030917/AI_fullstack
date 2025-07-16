import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/login/index';
import Layout from './views/layout/index';
import Home from './views/home/index';
import Public from './views/public/index';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/layout" element={<Layout />}>
                        <Route path="" element={<Home />} />
                        <Route path="public" element={<Public />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

