import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import linkApi from "../../api/linkApi";
import categoriesApi from "../../api/categoriesApi";
import { fetchCatOfUser } from "../Category/categoriesUserSlice";
import { useDispatch } from "react-redux";
import Error404Page from "../User/pages/Error404Page";

function HomeFeature() {
    // useEffect(() => {
    //     const fetchLink = async () => {
    //         const linkList = await linkApi.getAll();
    //         console.log(linkList);
    //     }
    //     fetchLink();
    // }, []);

    const dispatch = useDispatch();
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    //Nạp dữ liệu cho Redux -> Category
    useEffect(() => {
        const fetchCatUser = async (id) => {
            let { data } = await categoriesApi.getCatOfUser(id);
            dispatch(fetchCatOfUser(data));
        };

        if (dataUsers) {
            fetchCatUser(dataUsers.Id);
        } else {
            return;
        }
    }, []);

    return (
        (dataUsers) ? (
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        ) : (
            <Routes>
                <Route path="/" element={<Error404Page />} />
            </Routes>
        )
    );
}

export default HomeFeature;
