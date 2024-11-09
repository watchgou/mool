import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <div>
      <div className="top-chunk">
        <div>
          <span>学习tauri</span>
        </div>
        <div>
          <span>学习react</span>
        </div>
      </div>
      <div className="parent-chunk">
        <div className="menu-chunk">
          <div>
            <span>1</span>
          </div>
          <div>
            <span>2</span>
          </div>
          <div>
            <span>3</span>
          </div>
          <div>
            <span>4</span>
          </div>
          <div>
            <span>5</span>
          </div>
          <div>
            <span>6</span>
          </div>
          <div>
            <span>7</span>
          </div>
          <div>
            <span>8</span>
          </div>
          <div>
            <span>9</span>
          </div>
          <div>
            <span>10</span>
          </div>
          <div>
            <span>11</span>
          </div>
          <div>
            <span>12</span>
          </div>
          <div>
            <span>13</span>
          </div>
        </div>
        <div className="content-chunk">
          <div>
            <span>学习1</span>
          </div>
          <div>
            <span>学习2</span>
          </div>
        </div>
      </div>
      <div className="bottom-chunk">
        <h2>bottom</h2>
      </div>
    </div>
  );
}

export default App;
