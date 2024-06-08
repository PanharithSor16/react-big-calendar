import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./component/Navbar";
import CalendarView from "./component/CalendarView";
import "react-big-calendar/lib/css/react-big-calendar.css";

// import './App.css'

function App() {
  return (
    <>
      <div className="merriweather-regular">
        <Navbar />
      </div>
    </>
  );
}

export default App;
