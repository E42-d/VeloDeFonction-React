import "./App.css";
import Background from "./Background";
import Scanne from "./Scanne";
import Footer from "./Main/Footer/Footer";
import Dashboard from "./User/Components/Dashboard/Dashboard";
import Profile from "./User/Components/Profile/Profile";
import Login from "./User/Components/Login/Login";



function App() {
  return (
    <div style={{width:"100%",}} className = "some-class" >
<Background/>
      <img src={"/LogoVF1.png"} style={{width:"100%",margin:"0",height:"90%",zIndex:"-1",backgroundColor:"rgba(255, 0, 0, 0.0"}}/>
<Scanne/>

      {/* <Dashboard /> */}
      <Footer />

      <Profile />
      <Login />
    </div>
  );
}

export default App;
