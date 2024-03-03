import Page1 from "./pages/Page1";
import "./App.css";
import Page2 from "./pages/Page2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="background-video">
        <source
          src={require("./assets/Abstract Dark Gradient Background Video_ Motion Background Loop _ Free Stock Footage(720P_HD).mp4")}
          type="video/mp4"
        />
      </video>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
