import "./App.css";
import Footer from "./Main/Footer/Footer";
import Dashboard from "./User/Components/Dashboard/Dashboard";
import Profile from "./User/Components/Profile/Profile";
import Login from "./User/Components/Login/Login";
import Background from "./Main/Background";
import Scanne from "./User/Components/Scan/Scanne";

import Popupaccount from "./User/Components/Account/PopupAccount";

function App() {
  return (
    <div className="App">
      
      <div style={{ width: "100%" }} className="some-class">
        {" "}
      </div>
      <Background />
      <img
        src={"/LogoVF1.png"}
        style={{
          width: "100%",
          margin: "0",
          height: "90%",
          zIndex: "-1",
          backgroundColor: "rgba(255, 0, 0, 0.0",
        }}
      />
    {/*<Scanne/> */} 
    {/*<Dashboard /> */} 
    {/*<Footer />*/}
    {/*<Profile />*/}
    <Login /> 
    <Popupaccount />
  
    
    </div>
  );
}

export default App;
