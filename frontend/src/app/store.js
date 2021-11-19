import linkReducer from "../features/Link/linkSlice";
import groupReducer from "../features/Group/groupSlice";
import categoriesUserReducer from "../features/Category/categoriesUserSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    link: linkReducer,
    group: groupReducer,
    categoriesUser: categoriesUserReducer
};

const store = configureStore({
    reducer: rootReducer
});

export default store;