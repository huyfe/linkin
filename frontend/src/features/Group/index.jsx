import React from 'react'
import { Routes, Route } from 'react-router-dom';
import GroupPages from './pages/GroupPages';



 function GroupFeature() {
    return (
        <Routes>
           <Route path="/groups" element={<GroupPages />} />
        </Routes>

    )
}

export default GroupFeature;
