const { createSlice } = require('@reduxjs/toolkit');
const categorySlice = createSlice({
    name: 'category',
    initialState: {
        listCatOfUser: [],
        listCatOfGroup: [],
    },
    reducers: {
        fetchCatOfUser(state, action){
            return {...state, listCatOfUser: action.payload };
        }
    }
});

const { actions, reducer } = categorySlice;
export const { fetchCatOfUser } = actions;
export default reducer;