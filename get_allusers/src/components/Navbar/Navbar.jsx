import React from "react";
import "./navbar.scss";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function Navbar({ onClick }) {
  return (
    <div className="Navbar">
      <div className="brand__name">
        Let's growMore <ShowChartIcon className="growIcon"/>
      </div>
      <div className="get__Usr">
        <button className="get__user__btn" onClick={onClick}>
          Get Users <AddCircleOutlineIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
