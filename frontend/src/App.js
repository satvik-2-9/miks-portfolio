import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/go" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
