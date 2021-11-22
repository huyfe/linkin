import axiosClient from "./axiosClient";

const linkApi = {
    getAll(params) {
        const url = '/links';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/links/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/links';
        return axiosClient.post(url, { data });
    },
    update(data) {
        const url = `/links/${data.id}`;
        return axiosClient.patch(url, { data });
    },
    remove(id) {
        const url = `/links/${id}/trash`;
        return axiosClient.delete(url, {
            onDownloadProgress: progressEvent => {
                let percentCompleted = Math.floor(progressEvent.loaded / progressEvent.total * 100)
                console.log('Completed: ', percentCompleted)
            }
        });
    },
    removeReal(id) {
        const url = `/links/${id}/destroy`;
        return axiosClient.delete(url);
    }
};

export default linkApi;