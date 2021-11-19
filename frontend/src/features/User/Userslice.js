const { createSlice } = require('@reduxjs/toolkit');
const UserSlice = createSlice({
    name: 'Users',
    initialState: [],
    reducers: {
        fetchOfUser(state, action){
            let data = action.payload;
            state = data;
            return state;
        }
    }
});

const { actions, reducer } = UserSlice;
export const { fetchOfUser } = actions;
export default reducer;