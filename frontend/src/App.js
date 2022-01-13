<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, Staff, About, Items } from "./containers";
=======
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Staff, About, HomeRoot } from "./containers";
import { HomeContent } from "./containers";
>>>>>>> 0cc116c72ede613773ddb1c4182ef1cd3fa0d8fb

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeRoot />}>
          <Route path="/home" element={<HomeContent />} />
          <Route path="/home/about" element={<About />} />
        </Route>
        <Route path="/staff" element={<Staff />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </Router>
  );
}

export default App;
