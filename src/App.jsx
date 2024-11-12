import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <div>
      <div className="top-chunk">
        <div>
          <span></span>
        </div>
      </div>
      <div className="parent-chunk">
        <div className="menu-chunk">
          <div></div>
        </div>
        <div className="content-chunk"></div>
      </div>
      <div className="bottom-chunk">
        <h2></h2>
      </div>
    </div>
  );
}

export default App;
