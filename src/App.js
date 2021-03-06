import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import MeetRose from "./pages/MeetRose";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/meetrose" component={MeetRose} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/faq" component={FAQ} />
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
