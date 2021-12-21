import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import AdListCat from "../AdListCat";
import AdCatTrash from "../AdCatTrash";

AdCatHome.propTypes = {};

function AdCatHome(props) {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <div className="adcathome">
      <MDBTabs className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
          >
            Danh sách
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
          >
            Thùng rác
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab1"}>
          <AdListCat />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === "tab2"}>
          <AdCatTrash />
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}

export default AdCatHome;
