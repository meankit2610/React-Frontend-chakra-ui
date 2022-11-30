import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
  </Router>
  );
}

export default App;
