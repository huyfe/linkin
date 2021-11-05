import React from 'react';
import IntroduceTitle from './IntroduceTitle';
import ResetpassTitle from './ResetpassTitle';
import "./style.scss";

function IntroduceProfile() {
    return (
        <div>
            <div className="Introducesprofile">
                <IntroduceTitle />
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Tên</h2>
                        <p>Trần Quốc Huy</p>
                    </div>
                    <div className="services d-flex">
                        
                        <i class="fal fa-pen"></i>
                        <i class="far fa-globe-africa"></i>
                        <i class="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Tuổi</h2>
                        <p>21</p>
                    </div>
                    <div className="services d-flex">
                        
                        <i class="fal fa-pen"></i>
                        <i class="far fa-globe-africa"></i>
                        <i class="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Địa chỉ</h2>
                        <p>TP Hồ Chí Minh</p>
                    </div>
                    <div className="services d-flex">
                        
                        <i class="fal fa-pen"></i>
                        <i class="far fa-globe-africa"></i>
                        <i class="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Quê quán</h2>
                        <p>Tây Ninh</p>
                    </div>
                    <div className="services d-flex">
                        
                        <i class="fal fa-pen"></i>
                        <i class="far fa-globe-africa"></i>
                        <i class="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Email</h2>
                        <p>huy@gmail.com</p>
                    </div>
                    <div className="services d-flex">
                        
                        <i class="fal fa-pen"></i>
                        <i class="far fa-globe-africa"></i>
                        <i class="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Số điện thoại</h2>
                        <p>0123456789</p>
                    </div>
                    <div className="services d-flex">
                        
                        <i class="fal fa-pen"></i>
                        <i class="far fa-globe-africa"></i>
                        <i class="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-center align-items-center">
                    <button>Cập nhật thông tin</button>
                </div>
            </div>

            <div className="Introducesprofile">
                <ResetpassTitle />
                <div className="itemintroduces d-flex justify-content-start">
                    <div className="img-title d-flex align-items-center">
                        <h2 className="title-resetpass">Mật khẩu hiện tại</h2>
                        <input className="form-control" type="password" />
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-start">
                    <div className="img-title d-flex align-items-center">
                        <h2 className="title-resetpass">Nhập mật khẩu mới</h2>
                        <input className="form-control" type="password" />
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-start">
                    <div className="img-title d-flex align-items-center">
                        <h2 className="title-resetpass">Xác nhận lại mật khẩu</h2>
                        <input className="form-control" type="password" />
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-center align-items-center">
                    <button>Lưu</button>
                </div>
            </div>
        </div>
    );
}

export default IntroduceProfile;