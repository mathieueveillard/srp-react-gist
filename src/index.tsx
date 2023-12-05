import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AllCounters from "./AllCounters";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="m-4 w-3/12">
      <AllCounters />
    </div>
  </React.StrictMode>
);

reportWebVitals();
