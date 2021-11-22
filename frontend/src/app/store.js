import linkReducer from "../features/Link/linkSlice";
import groupReducer from "../features/Group/groupSlice";
import categoriesUserReducer from "../features/Category/categoriesUserSlice";
import userReducer from "../features/User/Userslice";
import loadingReducer from "../components/LoadingComponent/loadingSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    link: linkReducer,
    group: groupReducer,
    categoriesUser: categoriesUserReducer,
    user: userReducer,
    loading: loadingReducer,
};

const store = configureStore({
    reducer: rootReducer
});

export default store;