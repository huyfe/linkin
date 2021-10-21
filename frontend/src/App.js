import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Source-layout/Footer/Footer';
import Header from './Component/Source-layout/Header/Header';
import Forgotpass from './Component/Users/Forgotpassword/Forgotpass';
import Login from './Component/Users/LoginUser/Login';
import Profile from './Component/Users/ProfileUser/Profile';
import Register from './Component/Users/RegisterUser/Register';
import Resetpass from './Component/Users/Resetpassword/Resetpass';

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
