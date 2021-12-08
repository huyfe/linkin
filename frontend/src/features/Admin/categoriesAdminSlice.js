const { createSlice } = require("@reduxjs/toolkit");
const categoriesAdminSlice = createSlice({
  name: "categoriesAdmin",
  initialState: {
    showAllCatAd: [],
    showTrashCatAd: [],
  },
  reducers: {
    fetchAllCatAd(state, action) {
      let data = action.payload;
      state = { ...state, showAllCatAd: data };
      return state;
    },

    fetchTrashCatAd(state, action) {
      let data = action.payload;
      state = { ...state, showTrashCatAd: data };
      return state;
    },
  },
});

const { actions, reducer } = categoriesAdminSlice;
export const { fetchAllCatAd, fetchTrashCatAd } = actions;
export default reducer;
