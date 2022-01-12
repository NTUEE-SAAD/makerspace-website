import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, Staff } from "./containers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}

export default App;
