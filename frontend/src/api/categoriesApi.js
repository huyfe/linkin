import axiosClient from "./axiosClient";

const categoriesApi = {
  getCatOfUser(id) {
    const url = `/categories/categories-user/${id}`;
    return axiosClient.get(url);
  },

  getCatOfUserLimit(id) {
    const url = `/categories/limit/${id}`;
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

  getBySlug(slug) {
    const url = `/categories/${slug}`;
    return axiosClient.get(url);
  },

  getAll() {
    const url = "/categories";
    return axiosClient.get(url);
  },

  getTrash(){
    const url = "/categories/show-trash";
    return axiosClient.get(url);
  },

  restoreByList(data){
    const url = "/categories/list-restore";
    return axiosClient.patch(url, data);
  },

  updateLinks(idCat, idLink) {
    const url = `/categories/${idCat}/links/${idLink}`;
    return axiosClient.patch(url);
  },

};

export default categoriesApi;
