import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Item from "./Components/Item";
import "./style.css";
import { fetchItems } from "./Redux/actions/actionCreate";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="Navbar">
        <div className="nav-container">
      <h2>TravelMedia.in</h2>
      <div className="ele-2">
                <img src='./image/Home.jpg' alt="Home"/>
                <img src="./image/bell.png" alt="Notify"/>
                <img src="./image/Group (2).png" alt="Save"/>
                <img src=".image/Group (3).png" alt="contact"/>
            </div>
            </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/item/:id" element={<Item />}></Route>
      </Routes>
    </div>
  );
}

export default App;
