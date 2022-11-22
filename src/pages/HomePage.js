import Header from "../components/header/Header";
import ContentHome from "../components/contentHome/ContentHome";
import Footer from "../components/footer/Footer";
import DetailBrowse from "../components/detailbrowse/DetailBrowse";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      <ContentHome />
      <Footer />
    </div>
    // <BrowserRouter>
    //   <div>

    //     <Switch>
    //       <Route exact path="/" component={Browse} />
    //       <Route path="/detailcourse" component={DetailBrowse} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
};

export default HomePage;
