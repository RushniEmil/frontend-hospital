import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPatients from "./pages/ListPatients";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ListPatients />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
