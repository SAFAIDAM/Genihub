import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import PfeCreate from "./pages/PfeCreate";
import PfeUpdate from "./pages/PfeUpdate";
import PostIem from "./components/PostIem";
import News from "./pages/News";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Newspage" element={<News/>}/>
        <Route path="/ideas" element={<PostIem />}></Route>
        <Route path="/createidea" element={<PfeCreate />}></Route>
        <Route path="/updateidea/:id" element={<PfeUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
