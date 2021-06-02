import "./App.css";
import Background from "./Background";
import Scanne from "./Scanne";




function App() {
  return (
    <div style={{width:"100%",}} className = "some-class" >
<Background/>
      <img src={"/LogoVF1.png"} style={{width:"100%",margin:"0",height:"90%",zIndex:"-1",backgroundColor:"rgba(255, 0, 0, 0.0"}}/>
<Scanne/>

   </div>
  
  );
}

export default App;
