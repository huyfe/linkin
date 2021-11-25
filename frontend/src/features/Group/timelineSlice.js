import { useEffect } from 'react';
import timelineApi from './../../api/timelineApi';
const { createSlice } = require('@reduxjs/toolkit');

const timelineSlice = createSlice({
    name: 'timeline',
    initialState: [], // giá trị khởi tạo: [], {}, "" , number...
    reducers: {
        update(state, action) {
            const data = action.payload;
            state = data;
            return state;
        }
    }
});

const { actions, reducer } = timelineSlice;
export const { update } = actions; // Named export
export default reducer;


