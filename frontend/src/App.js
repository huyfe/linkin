import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/index';
import { io } from "socket.io-client";
import HomeFeature from './features/Home';
import UserFeature from './features/User';
import GroupFeature from './features/Group';
import CategoryFeature from './features/Category';
import LinkFeature from './features/Link';

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
                <HomeFeature />
                <UserFeature />
                <GroupFeature />
                <CategoryFeature />
                <LinkFeature />

                {/* <Routes>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="another-login" element={<AnotherLogin />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="/groups" element={<Groups />} />
                </Routes> */}

            </Router>
        </div>
    );
}

export default App;