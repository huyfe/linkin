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
        updateLinkOfUser(state, action) {
            let newState = [...state];
            return newState.map((link) =>
                link._id === action.payload._id ? action.payload : link
            );
        }
    }
});

const { actions, reducer } = linkSlice;
export const { update, updateLinkOfUser } = actions; // Named export
export default reducer;