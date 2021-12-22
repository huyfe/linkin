import { useEffect } from 'react';
import groupApi from './../../api/groupApi';
const { createSlice } = require('@reduxjs/toolkit');

const groupSlice = createSlice({
    name: 'group',
    initialState: [], // giá trị khởi tạo: [], {}, "" , number...
    reducers: {
        update(state, action) {
            const data = action.payload;
            state = data;
            return state;
        },
        showGroupBySlug(state, action) {
            const data = action.payload;
            state = data;
            return state;
        },
        createGroups(state, action) {
            let newState = [...state];
            return newState.map((group) =>
                group._id === action.payload._id ? action.payload : group
            );
        },
    }
});

const { actions, reducer } = groupSlice;
export const { update, showGroupBySlug ,createGroups } = actions; // Named export
export default reducer;


