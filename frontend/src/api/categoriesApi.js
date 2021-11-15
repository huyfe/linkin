import axiosClient from "./axiosClient";

const categoriesApi = {
    getCatOfUser(id){
        const url = `/categories/categories-user/${id}`;
        return axiosClient.get(url);
    },

    getCatOfGroup(id){
        const url = `/categories/categories-group/${id}`;
        return axiosClient.get(url);
    }
};

export default categoriesApi;