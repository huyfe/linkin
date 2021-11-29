import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import AdminUser from '../AdminUser';
import './style.scss';

function HomePage() {
    const [verticalActive, setVerticalActive] = useState('tab1');

    const handleVerticalClick = (value) => {
        if (value === verticalActive) {
            return;
        }

        setVerticalActive(value);
    };

    return (
        <>
            <br />
            <section id="admin-page">
                <MDBRow>
                    <MDBCol size='2'>
                        <MDBTabs pills className='flex-column text-center'>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                    Bảng điều khiển
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                    Người dùng
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                                    Links
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'}>
                                    Danh mục
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab5')} active={verticalActive === 'tab5'}>
                                    Nhóm
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab6')} active={verticalActive === 'tab6'}>
                                    Chat
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab7')} active={verticalActive === 'tab7'}>
                                    Chung
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>
                    </MDBCol>
                    <MDBCol size='9'>
                        <MDBTabsContent>
                            <MDBTabsPane show={verticalActive === 'tab1'}>Bảng điều khiển content</MDBTabsPane>
                            <MDBTabsPane show={verticalActive === 'tab2'}><AdminUser /></MDBTabsPane>
                            <MDBTabsPane show={verticalActive === 'tab3'}>Links content</MDBTabsPane>
                            <MDBTabsPane show={verticalActive === 'tab4'}>Danh mục content</MDBTabsPane>
                            <MDBTabsPane show={verticalActive === 'tab5'}>Nhóm content</MDBTabsPane>
                            <MDBTabsPane show={verticalActive === 'tab6'}>Chat content</MDBTabsPane>
                            <MDBTabsPane show={verticalActive === 'tab7'}>chung content</MDBTabsPane>
                        </MDBTabsContent>
                    </MDBCol>
                </MDBRow>
            </section>

        </>
    );
}
export default HomePage;