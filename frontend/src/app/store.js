import linkReducer from "../features/Link/linkSlice";
import categoryReducer from "../features/Category/categorySlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    link: linkReducer,
    category: categoryReducer,
};

const store = configureStore({
    reducer: rootReducer
});

export default store;