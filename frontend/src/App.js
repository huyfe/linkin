import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Register from './components/User/Register/index';
import Login from './components/User/Login';
import AnotherLogin from './components/User/Login/AnotherLogin';
import ResetPassword from './components/User/ResetPassword/index';
import { io } from "socket.io-client";

function App() {
    useEffect(() => {
        const socket = io('ws://localhost:3000');

        socket.on('connnection', () => {
            console.log('connected to server');
        })

        socket.on('message', (message) => {
            console.log(message);
        })

        socket.on('disconnect', () => {
            console.log('Socket disconnecting');
        })

    }, []);

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="another-login" element={<AnotherLogin />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
