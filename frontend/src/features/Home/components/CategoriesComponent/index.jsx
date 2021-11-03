import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import CategoryComponent from '../CategoryComponent';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

Categories.propTypes = {

};

function Categories(props) {
    const listCategoryData = [
        {
            id: 1,
            name: "UI/UX Design",
            href: "/",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 2,
            name: "UI/UX Design",
            href: "/",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 3,
            name: "UI/UX Design",
            href: "/",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        },
        {
            id: 4,
            name: "UI/UX Design",
            href: "/",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        }
    ];

    const listCategory = listCategoryData.map(category => {
        return (
            <SplideSlide>
                <CategoryComponent name={category.name} href={category.href} image={category.image}></CategoryComponent>
            </SplideSlide>
        )
    });

    const options = {
        type: "slide",
        gap: 15,
        perPage: 4,
        perMove: 1,
        pagination: false,
        padding: {
            right: 100
        }
    }

    return (
        <div className="categories">
            <Splide options={options}>
                <SplideSlide className="category-create" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80')" }}>
                    <MDBBtn color='link' className="text-dark">+ <br /> Tạo danh mục</MDBBtn>
                </SplideSlide>
                {listCategory}
            </Splide>
        </div>
    );
}

export default Categories;