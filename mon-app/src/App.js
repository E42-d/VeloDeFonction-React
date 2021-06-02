import "./App.css";
import Footer from "./Main/Footer/Footer";
import Dashboard from "./User/Components/Dashboard";
import PopupList from "./User/Components/PopupList";

function App() {
  return (
    <div className="App">
      {/*<Footer />*/}
      <Dashboard />
      <PopupList />
    </div>
  );
}

export default App;
