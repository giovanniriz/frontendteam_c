import React from "react";
import SidebarDashboardTutor from "../components/sidebarDashboard/SidebarDashboardTutor";
import DashboardCompTutor from "../components/dashboard/DashboardCompTutor";
import CalendarTutor from "../components/calendar/CalendarTutor";
import CoursesTutor from "../components/courses/CoursesTutor";
import MessageTutor from "../components/message/MessageTutor";
import PaymentTutor from "../components/payment/PaymentTutor";
import ProfileTutor from "../components/profile/ProfileTutor";
import CreateCourses from "../components/createCourse/CreateCourse";
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
        <SidebarDashboardTutor />
        <div className="dash-content">
          <Switch>
            <Route
              path="/dashboardTutor/dashboard"
              component={DashboardCompTutor}
            ></Route>
            <Route
              path="/dashboardTutor/calendar"
              component={CalendarTutor}
            ></Route>
            <Route
              exact
              path="/dashboardTutor/courses"
              component={CoursesTutor}
            ></Route>
            <Route
              path="/dashboardTutor/message"
              component={MessageTutor}
            ></Route>
            <Route
              path="/dashboardTutor/payment"
              component={PaymentTutor}
            ></Route>
            <Route
              path="/dashboardTutor/profile"
              component={ProfileTutor}
            ></Route>
            <Route
              path="/dashboardTutor/courses/createCourses"
              component={CreateCourses}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Dashboard;
