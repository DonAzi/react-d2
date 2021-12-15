// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyJumbotron from "./components/MyJumbotron";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyJumbotron />
      <Home />
    </div>
  );
}

export default App;
