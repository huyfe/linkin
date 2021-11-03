import React from 'react'
import './style.scss';


function GroupSearchComponent() {
    return (

        <section id="groupSearchComponent" >
            <div className="box__search">
                <div className="sibarsearch__search">
                    <i className="fal fa-search"></i>
                    <input className="input__search" type="text" placeholder="Tìm kiếm nhóm" />
                </div>
            </div>
        </section>

    )
}

export default GroupSearchComponent;