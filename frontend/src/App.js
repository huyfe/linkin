import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/index';
import { io } from "socket.io-client";
import HomeFeature from './features/Home';
import UserFeature from './features/User';
import GroupFeature from './features/Group';
import CategoryFeature from './features/Category';
import LinkFeature from './features/Link';
import AdminFeature from './features/Admin';

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
                {/* <Header /> */}
                {/* Gắn header vào mỗi trang nha! Để trang admin không có header */}
                {(window.location.pathname !== "/login" && window.location.pathname !== "/register"
                    && window.location.pathname !== "/forgot-password" && window.location.pathname !== "/reset-password" && window.location.pathname !== "/restore-user") ? (
                    <Header />
                ) : null}
                <HomeFeature />
                <UserFeature />
                <GroupFeature />
                <CategoryFeature />
                <LinkFeature />
                <AdminFeature />
            </Router>
            <div id="popUp"></div>
        </div>
    );
}

export default App;