import React, { useEffect } from 'react';
import HomePage from '../components/HomePage';
import { useDispatch } from "react-redux";
import categoriesApi from '../../../api/categoriesApi';
import { fetchAllCatAd, fetchTrashCatAd } from '../categoriesAdminSlice';

function AdminHomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAdAllCat = async () => {
            let {data} = await categoriesApi.getAll();
            dispatch(fetchAllCatAd(data));
        };

        const fetchAdTrashCat = async () => {
            let {data} = await categoriesApi.getTrash();
            dispatch(fetchTrashCatAd(data));
        };

        fetchAdAllCat();
        fetchAdTrashCat();
    }, [])

    return (
        <HomePage />
    );
}

export default AdminHomePage;