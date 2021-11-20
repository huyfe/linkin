import axiosClient from "./axiosClient";

const categoriesApi = {
  getCatOfUser(id) {
    const url = `/categories/categories-user/${id}`;
    return axiosClient.get(url);
  },

  getCatOfGroup(id) {
    const url = `/categories/categories-group/${id}`;
    return axiosClient.get(url);
  },

  addCategory(data) {
    const url = "/categories/add-category";
    return axiosClient.post(url, data);
  },

  removeCategory(id) {
    const url = `/categories/${id}/trash`;
    return axiosClient.delete(url);
  },

  updateCategory(id, data) {
    const url = `/categories/${id}/update`;
    return axiosClient.patch(url, data);
  },

  updatePinCat(id) {
    const url = `/categories/${id}/pin`;
    return axiosClient.patch(url);
  },
};

export default categoriesApi;
