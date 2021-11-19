const { createSlice } = require('@reduxjs/toolkit');
const categoriesUserSlice = createSlice({
    name: 'categoriesUser',
    initialState: [],
    reducers: {
        fetchCatOfUser(state, action){
            let data = action.payload;
            state = data;
            return state;
        },
        addCatOfUser(state, action){
            state.unshift(action.payload)
        }
    }
});

const { actions, reducer } = categoriesUserSlice;
export const { fetchCatOfUser, addCatOfUser } = actions;
export default reducer;