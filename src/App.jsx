import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <div>
      <div className="top-chunk">
        <div>
          <span>1</span>
        </div>
      </div>
      <div className="parent-chunk">
        <div className="menu-chunk">
          <div>1</div>
        </div>
        <div className="content-chunk">1</div>
      </div>
      <div className="bottom-chunk">
        <h2>1</h2>
      </div>
    </div>
  );
}

export default App;
