import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  //ovaj React.StrictMode pokrece dodatno nasu apk kako bi imali dodatni feedback za neke errore, warninge, itd...
);
