import React from 'react';

function HeadingComponent(props) {
    return (
        <>
            <div className="timeline__heading d-flex justify-content-between align-items-center">
                <div className="title d-flex flex-column ">
                    <h1>Cộng đồng UI/UX</h1>
                    <span> Nhóm công khai - 10.5k thành viên</span>
                </div>
                <div className="button-function">
                    Đã tham gia <span class="icon-arrow-down"></span>
                </div>
            </div>
        </>
    );
}

export default HeadingComponent;