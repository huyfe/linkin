import axiosClient from "./axiosClient";

const timelineApi = {
    // lấy tất cả api timeline
    getAll(params) {
        const url = '/timelines';
        return axiosClient.get(url, { params });
    },
    getGroupPost(id) {
        const url = `/group-post/${id}`;
        return axiosClient.get(url);
    },
    getUserPost(id) {
        const url = `/user-post/'${id}`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/timelines/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/timelines';
        return axiosClient.post(url, { data });
    },
    update(data) {
        const url = `/timelines/${data.id}`;
        return axiosClient.patch(url, { data });
    },
    remove(id) {
        const url = `/timelines/${id}`;
        return axiosClient.delete(url);
    }
};

export default timelineApi;