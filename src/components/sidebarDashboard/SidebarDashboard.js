import React from "react";
import "./sidebarDashboard.css";
import logo from "../../assets/t.png";
import calendar from "../../assets/calendar.png";
import dasb from "../../assets/dashb.png";
import favo from "../../assets/favo.png";
import mass from "../../assets/mass.png";
import pay from "../../assets/pay.png";
import user2 from "../../assets/user2.jpg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function SidebarDashboard() {
  const history = useHistory();

  const { fullname, profile_pic } = useSelector(
    (state) => state.loginStudentReducer
  );
  return (
    <div className="side-main">
      <div className="sidebar-dashboard">
        <div className="logo-container">
          <img
            onClick={() => {
              history.push("/");
              window.location.reload();
            }}
            className="gbrlogo"
            src={logo}
            alt="gbrlogo"
          />

          <div className="titik"></div>
        </div>

        <div>
          <img
            onClick={() => history.push("/dashboard/dashboard")}
            className="dash"
            src={dasb}
            alt="dash"
          />
        </div>

        <div>
          <img
            onClick={() => history.push("/dashboard/calendar")}
            className="calend"
            src={calendar}
            alt="calend"
          />
        </div>

        <div>
          <img
            onClick={() => history.push("/dashboard/favorite")}
            className="favo"
            src={favo}
            alt="favo"
          />
        </div>

        <div>
          <img
            onClick={() => history.push("/dashboard/message")}
            className="mass"
            src={mass}
            alt="mass"
          />
        </div>

        <div>
          <img
            onClick={() => history.push("/dashboard/payment")}
            className="pay"
            src={pay}
            alt="pay"
          />
        </div>

        <div>
          <img
            onClick={() => history.push("/dashboard/profile")}
            className="user-pict"
            src={profile_pic}
            alt="user"
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarDashboard;
