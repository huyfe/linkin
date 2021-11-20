const { createSlice } = require("@reduxjs/toolkit");
const categoriesUserSlice = createSlice({
  name: "categoriesUser",
  initialState: [],
  reducers: {
    fetchCatOfUser(state, action) {
      let data = action.payload;
      state = data;
      return state;
    },

    addCatOfUser(state, action) {
      state.unshift(action.payload);
    },

    removeCatOfUser(state, action) {
      let newState = [...state];
      return newState.filter((category) => category._id !== action.payload);
    },

    updateCatOfUser(state, action) {
      let newState = [...state];
      return newState.map((category) =>
        category._id === action.payload._id ? action.payload : category
      );
    },
  },
});

const { actions, reducer } = categoriesUserSlice;
export const {
  fetchCatOfUser,
  addCatOfUser,
  removeCatOfUser,
  updateCatOfUser,
} = actions;
export default reducer;
