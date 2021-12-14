// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
    </div>
  );
}

export default App;
