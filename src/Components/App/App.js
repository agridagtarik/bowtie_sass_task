import React from "react";
import "./App.css";
import Leftbar from "../Leftbar/Leftbar.js";
import Navbar from "../Navbar/Navbar.js";

function App() {
  return (
    <>
      <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
      <label for="drawer-toggle" id="drawer-toggle-label"></label>
      <Navbar />
      <Leftbar />
      <div id="page-content">
        <p>Page Content</p>
      </div>
    </>
  );
}

export default App;
