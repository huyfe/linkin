import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Forgotpass from './components/user/forgotpass/Forgotpass';
import Login from './components/user/login/Login';
import Profile from './components/user/profile/Profile';
import Register from './components/user/register/Register';
import Resetpass from './components/user/resetpass/Resetpass';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="reset-pass" element={<Resetpass />} />
                    <Route path="forgot-pass" element={<Forgotpass />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
