import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import ActiveIdeas from "./pages/active-ideas/ActiveIdeas"
import ResearchIdeas from "./pages/research-ideas/ResearchIdeas"
import Blog from "./pages/blog/Blog"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/active-ideas" element={<ActiveIdeas />} />
        <Route path="/research-ideas" element={<ResearchIdeas />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
