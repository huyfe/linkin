const { createSlice } = require("@reduxjs/toolkit");
const cateProfileslice = createSlice({
  name: "cates",
  initialState: [],
  reducers: {
    fetchCatProfile(state, action) {
      let data = action.payload;
      state = data;
      return state;
    }
  },
});

const { actions, reducer } = cateProfileslice;
export const {
    fetchCatProfile
} = actions;
export default reducer;