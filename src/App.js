import { render } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";

function App() {
  return (
    
    <div className="App">
            <div className="container">
              <Home/>

            </div>
        </div>
  );
}

export default App;
