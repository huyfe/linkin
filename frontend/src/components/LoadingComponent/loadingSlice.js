const { createSlice } = require('@reduxjs/toolkit');
const loadingSlice = createSlice({
    name: 'loading',
    initialState: [],
    reducers: {
        update(state, action) {
            const data = action.payload;
            state = data;
            return state;
        }
    }
});

const { actions, reducer } = loadingSlice;
export const { update } = actions; // Named export
export default reducer;