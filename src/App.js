import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import DashboardTutor from "./pages/DashboardTutor";
import Browse from "./components/browse/Browse";
import DetailBrowse from "./components/detailbrowse/DetailBrowse";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import enrollBooking from "./components/booking/enrollBooking";
import CreateCourse from "./components/createCourse/CreateCourse";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/browse" exact component={Browse} />
          <Route path="/dashboard/" component={Dashboard} />
          <Route path="/dashboardTutor/" component={DashboardTutor} />
          <Route path="/browse/:id" component={DetailBrowse} />
          <Route path="/enrollBooking" component={enrollBooking} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
