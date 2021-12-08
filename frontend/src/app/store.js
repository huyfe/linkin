import linkReducer from "../features/Link/linkSlice";
import groupReducer from "../features/Group/groupSlice";
import categoriesUserReducer from "../features/Category/categoriesUserSlice";
import userReducer from "../features/User/Userslice";
import loadingReducer from "../components/LoadingComponent/loadingSlice";
import timelineReducer from '../features/Group/timelineSlice';
import categoriesAdminReducer from "../features/Admin/categoriesAdminSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    link: linkReducer,
    group: groupReducer,
    timeline: timelineReducer,
    categoriesUser: categoriesUserReducer,
    user: userReducer,
    loading: loadingReducer,
    categoriesAdmin: categoriesAdminReducer,
};

const store = configureStore({
    reducer: rootReducer
});

export default store;