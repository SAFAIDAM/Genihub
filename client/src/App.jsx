import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import PfeIdeas from "./pages/PfeIdeas";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PfeIdeas />}></Route>
        <Route path="/createIdea" element={<NavBar />}></Route>
        <Route path="/UpdateIdea" element={<NavBar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
