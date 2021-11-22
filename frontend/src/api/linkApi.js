import axiosClient from "./axiosClient";
import { useDispatch } from 'react-redux';

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
        return axiosClient.delete(url);
    },
    removeReal(id) {
        const url = `/links/${id}/destroy`;
        return axiosClient.delete(url);
    }
};

export default linkApi;