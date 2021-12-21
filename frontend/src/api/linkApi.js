import axiosClient from "./axiosClient";
import { useDispatch } from 'react-redux';

const linkApi = {

    getAll(params) {
        const dataUser = JSON.parse(localStorage.getItem('dataUser'));
        const url = `/links/link-user/${dataUser.Id}`;
        return axiosClient.get(url, { params });
    },
    getAlllimit(id) {
        const url = `/links/limit/${id}`;
        return axiosClient.get(url);
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