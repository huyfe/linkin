import linkReducer from "../features/Link/linkSlice";
import groupReducer from "../features/Group/groupSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    link: linkReducer,
    group: groupReducer
};

const store = configureStore({
    reducer: rootReducer
});

export default store;