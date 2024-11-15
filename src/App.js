import logo from "./logo.svg";
import "./App.css";
import Shop from "./Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Shop />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
