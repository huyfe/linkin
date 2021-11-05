import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import CategoryProfile from "./CategoryProfile";
import GroupProfile from "./GroupProfile";
import LinkProFile from "./LinkProfile";

import "./style.scss";
import MainFollower from "./MainFollower";
import MainFollowing from "./MainFollowing";

function ProfileComponent(props) {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <section id="Profile-component">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="img-profile">
              <img src="/images/Users/anhbia.jpg" alt="" />
              <div className="avatar-name d-flex align-items-center">
                <img src="/images/Users/avatar.jpg" alt="" />
                <h2>Quốc Huy</h2>
              </div>
            </div>
            <div className="detail-profile row">
              <div className="left-tab-menu col-8">
                <MDBTabs className="mb-3">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleBasicClick("tab1")}
                      active={basicActive === "tab1"}
                    >
                      Bài viết
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleBasicClick("tab2")}
                      active={basicActive === "tab2"}
                    >
                      Giới thiệu
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleBasicClick("tab3")}
                      active={basicActive === "tab3"}
                    >
                      Đang theo dõi
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleBasicClick("tab4")}
                      active={basicActive === "tab4"}
                    >
                      Người theo dõi
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>
                  <MDBTabsPane show={basicActive === "tab1"}>
                    Tab 1 content
                  </MDBTabsPane>
                  <MDBTabsPane show={basicActive === "tab2"}>
                    Tab 2 content
                  </MDBTabsPane>
                  <MDBTabsPane show={basicActive === "tab3"}>
                    <MainFollowing />
                  </MDBTabsPane>
                  <MDBTabsPane show={basicActive === "tab4"}>
                    <MainFollower />
                  </MDBTabsPane>
                </MDBTabsContent>
              </div>
              <div className="right-information col-4">
                <div className="category-imformation">
                  <CategoryProfile />
                </div>
                <div className="link-imformation">
                  <LinkProFile />
                </div>
                <div className="group-information">
                  <GroupProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileComponent;
