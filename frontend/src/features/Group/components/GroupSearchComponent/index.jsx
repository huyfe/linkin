import React from 'react'
import './style.scss';


function GroupSearchComponent() {
    return (

        <section id="groupSearchComponent" >
            <div className="box__search">
                <div className="sibarsearch__search">
                    <i class="fal fa-search"></i>
                    <input className="input__search" type="text" placeHolder="Tìm kiếm nhóm" />
                </div>
            </div>
        </section>

    )
}

export default GroupSearchComponent;