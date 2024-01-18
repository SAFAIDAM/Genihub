import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import PfeCreate from "./pages/PfeCreate";
import PfeUpdate from "./pages/PfeUpdate";
import PostIem from "./components/PostIem";
import News from "./components/News";
import User from "./components/User";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserContextProvider } from '../context/userContext';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <BrowserRouter>
   <UserContextProvider>
     <Toaster position='top-center' toastOption={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Newspage" element={<News />} />
        <Route path="/profile" element={<User />} />
        <Route path="/ideas" element={<PostIem />}></Route>
        <Route path="/createidea" element={<PfeCreate />}></Route>
        <Route path="/updateidea/:id" element={<PfeUpdate />}></Route>
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
