import axiosClient from "./axiosClient";

export const AxiosUser = () => {
    const url = "https://linkin-olive.herokuapp.com";
    return url;
}

export const RegisterUser = (data) => {
    const url = '/users/create-user';
    return function (dispatch) {
        axiosClient.post(url, data)
            .then(res => {
                alert('Đăng ký thành công!');
                window.location.href = "/login"
            })
            .catch(err => {
                console.log(err);
            })
    };
}

export const ProfileUser = (data) => {
    const url = `/users/${data}`;
    return axiosClient.get(url);
}

export const AdminDeleteUser = (data) => {
    const url = `/users/delete-user/${data}`;
    return function (dispatch) {
        axiosClient.delete(url, data)
            .then(res => {
                window.location.href = "/admin"
            })
            .catch((error) => console.log(error));
    };
}

export const AdminLockUser = (data) => {
    const url = `/users/lock-user/${data}`;
    return function (dispatch) {
        axiosClient.delete(url, data)
            .then(res => {
                localStorage.removeItem("dataUser");
                window.location.href = "/login"
            })
            .catch((error) => console.log(error));
    };
}


export const LoginUser = (data) => {
    const url = '/users/checklogin';
    return axiosClient.post(url, data);
}

export const CheckRestoreUser = (data, email) => {
    const url = `/users/checkrestoreuser/${email}`;
    return axiosClient.post(url, data);
}

export const RestoreAccountUser = (data) => {
    const url = `/users/restore-user/${data}`;
    return function (dispatch) {
        axiosClient.patch(url)
            .then(res => {
                alert('Khôi phụcthành công!');
                window.location.href = "/login"
            })
            .catch(err => {
                console.log(err);
            })
    };
}

