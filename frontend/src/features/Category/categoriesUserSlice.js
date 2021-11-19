const { createSlice } = require('@reduxjs/toolkit');
const categoriesUserSlice = createSlice({
    name: 'categoriesUser',
    initialState: [],
    reducers: {
        fetchCatOfUser(state, action){
            let data = action.payload;
            state = data;
            return state;
        }
    }
});

const { actions, reducer } = categoriesUserSlice;
export const { fetchCatOfUser } = actions;
export default reducer;