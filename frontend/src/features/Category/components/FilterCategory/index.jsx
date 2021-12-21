import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link, useSearchParams } from 'react-router-dom';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

FilterCategory.propTypes = {
    
};

function FilterCategory(props) {
    let [searchParams] = useSearchParams();
    let param = searchParams.get("filterSort");

    return (
        <aside className="filterCategory">
            <MDBDropdown>
                <MDBDropdownToggle className='btn-toggle'>Bộ lọc</MDBDropdownToggle>
                <MDBDropdownMenu className="filterCategory__dropdown-menu">
                    <MDBDropdownItem>
                        <Link to="?filterSort=new" className={param === "new" ? "dropdown-item is-active" : "dropdown-item"} >Mới nhất</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <Link to="?filterSort=old" className={param === "old" ? "dropdown-item is-active" : "dropdown-item"} >Cũ nhất</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <Link to="?filterSort=pin" className={param === "pin" ? "dropdown-item is-active" : "dropdown-item"} >Đã ghim</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <Link to="?filterSort=private" className={param === "private" ? "dropdown-item is-active" : "dropdown-item"} >Riêng tư</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <Link to="?filterSort=public" className={param === "public" ? "dropdown-item is-active" : "dropdown-item"} >Công khai</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <Link to="?filterSort=az" className={param === "az" ? "dropdown-item is-active" : "dropdown-item"} >Sắp xếp từ A-Z</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <Link to="?filterSort=za" className={param === "za" ? "dropdown-item is-active" : "dropdown-item"} >Sắp xếp từ Z-A</Link>
                    </MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            <h2>Bộ lọc</h2>
            <ul className="filterCategory__list">
                <li><Link to="?filterSort=new" className={param === "new" ? "active" : ""} >Mới nhất</Link></li>
                <li><Link to="?filterSort=old" className={param === "old" ? "active" : ""} >Cũ nhất</Link></li>
                <li><Link to="?filterSort=pin" className={param === "pin" ? "active" : ""} >Đã ghim</Link></li>
                <li><Link to="?filterSort=private" className={param === "private" ? "active" : ""} >Riêng tư</Link></li>
                <li><Link to="?filterSort=public" className={param === "public" ? "active" : ""} >Công khai</Link></li>
                <li><Link to="?filterSort=az" className={param === "az" ? "active" : ""} >Sắp xếp từ A-Z</Link></li>
                <li><Link to="?filterSort=za" className={param === "za" ? "active" : ""} >Sắp xếp từ Z-A</Link></li>
            </ul>
        </aside>
    );
}

export default FilterCategory;