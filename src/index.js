import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

import WeatherSearch from "./WeatherSearch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  </StrictMode>
);
