import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";

/*
CSR : react 
SSR : 
*/
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:userid" element={<Profile />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
