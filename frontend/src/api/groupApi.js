import axiosClient from "./axiosClient";

const groupApi = {
    // lấy tất cả api bảng group
    getAll(params) {
        const url = '/groups';
        return axiosClient.get(url, { params });
    },
    getGroupBySlug(slug) {
        const url = `/groups/${slug}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/groups/create-group';
        return axiosClient.post(url, { data });
    },
    update(data) {
        const url = `/groups/${data.id}`;
        return axiosClient.patch(url, { data });
    },
    remove(id) {
        const url = `/groups/${id}`;
        return axiosClient.delete(url);
    }
};

export default groupApi;