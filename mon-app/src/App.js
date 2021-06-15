import "./App.css";
import Footer from "./Main/Footer/Footer";
import Dashboard from "./User/Components/Dashboard/Dashboard";
import Profile from "./User/Components/Profile/Profile";
import Login from "./User/Components/Login/Login";
import Background from "./Main/Background";
import ScanDashboard from "./User/Components/Scan/ScanDashboard";
import PopupAccount from "./User/Components/Account/PopupAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
       
      <Router>
      
      <Background />
      <img
            src={"/LogoVF1.png"}
            style={{
              width: "100%",
              margin: "0",
              height: "90%",
              zIndex: "-1",
              backgroundColor: "rgba(255, 0, 0, 0.0)",
            }}
          />
        
          <div style={{ width: "100%" }} className="some-class">
            {" "}
          </div>
          <Switch>
          
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/scan" component={ScanDashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={PopupAccount} />
          
         
        </Switch>
        <Footer />
      </Router>
     
      <ToastContainer/>
    </div>
  );
}

export default App;
