import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Login from './components/user/login/Login';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
