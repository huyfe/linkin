import linkReducer from "../features/Link/linkSlice";
import groupReducer from "../features/Group/groupSlice";

import categoryReducer from "../features/Category/categorySlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    link: linkReducer,
    group: groupReducer,
    category: categoryReducer
};

const store = configureStore({
    reducer: rootReducer
});

export default store;