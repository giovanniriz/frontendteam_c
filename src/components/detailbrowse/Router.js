import DetailBrowse from './DetailBrowse'
import enrollbooking from './components/booking/enrollbooking'

function Router() {
    return (
      <div className="dash-main">
        <Router>
          <div className="dash-content">
            <Switch>
                <Route
                    path="/DetailBrowse"
                    component={DetailBrowse}>
                </Route>
                <Route 
                    path="/DetailBrowse/enrollBooking" 
                    component={enrollbooking}>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  
  export default Router;
  