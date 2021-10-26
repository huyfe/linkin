import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Register from './components/User/Register/index';
import Login from './components/User/Login';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
