import linkApi from '../../api/linkApi';
const { createSlice } = require('@reduxjs/toolkit');
const linkSlice = createSlice({
    name: 'link',
    initialState: [],
    reducers: {
        update(state, action) {
            const data = action.payload;
            state = data;
            return state;
        },
    }
});

const { actions, reducer } = linkSlice;
export const { update } = actions; // Named export
export default reducer;