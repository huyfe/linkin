const { createSlice } = require('@reduxjs/toolkit');
const UserSlice = createSlice({
    name: 'Users',
    initialState: [],
    reducers: {
        fetchOfUser(state, action) {
            let data = action.payload;
            state = data;
            return state;
        },

        fetchOfUserDeleted(state, action) {
            let data = action.payload;
            state = data;
            return state;
        },

        addAccountUser(state, action) {
            state.unshift(action.payload);
        },

        removeUser(state, action) {
            const dataRemove = [...state];
            return dataRemove.filter((userss) => userss._id !== action.payload);
        },

        updateUser(state, action) {
            let dataUpdate = [...state];
            return dataUpdate.map((userss) =>
                userss._id === action.payload._id ? action.payload : userss
            );
        }
    }
});

const { actions, reducer } = UserSlice;
export const { fetchOfUser, fetchOfUserDeleted, addAccountUser, removeUser, updateUser } = actions;
export default reducer;