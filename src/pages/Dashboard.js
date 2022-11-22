import React from "react";
import SidebarDashboard from "../components/sidebarDashboard/SidebarDashboard";
import HomePage from "./HomePage";
import DashboardComp from "../components/dashboard/DashboardComp";
import Calendar from "../components/calendar/Calendar";
import Favorite from "../components/favorite/Favorite";
import Message from "../components/message/Message";
import Payment from "../components/payment/Payment";
import Profile from "../components/profile/ProfileStudent";
import "./dashboard.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

function Dashboard() {
  return (
    <div className="dash-main">
      <Router>
        <SidebarDashboard />
        <div className="dash-content">
          <Switch>
            <Route
              path="/dashboard/dashboard"
              component={DashboardComp}
            ></Route>
            <Route path="/dashboard/calendar" component={Calendar}></Route>
            <Route path="/dashboard/favorite" component={Favorite}></Route>
            <Route path="/dashboard/message" component={Message}></Route>
            <Route path="/dashboard/payment" component={Payment}></Route>
            <Route path="/dashboard/profile" component={Profile}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Dashboard;
