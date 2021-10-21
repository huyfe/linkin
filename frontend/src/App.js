import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Source-layout/Footer/Footer';
import Header from './Components/Source-layout/Header/Header';
import Forgotpass from './Components/User/Forgotpass/Forgotpass';
import Login from './Components/User/Login/Login';
import Profile from './Components/User/Profile/Profile';
import Register from './Components/User/Register/Register';
import Resetpass from './Components/User/Resetpass/Resetpass';

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
