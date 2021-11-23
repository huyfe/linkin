import axiosClient from "./axiosClient";

export const RegisterUser = (data) => {
    const url = '/users/create-user';
    return function (dispatch) {
        axiosClient.post(url, data)
            .then(res => {
                alert('Đăng ký thành công!');
                window.location.href="/login"
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

export const LoginUser = (data) => {
    const url = '/users/checklogin';
    return axiosClient.post(url, data);
}


