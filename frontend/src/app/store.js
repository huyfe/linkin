import linkReducer from "../features/Link/linkSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    link: linkReducer,
};

const store = configureStore({
    reducer: rootReducer
});

export default store;