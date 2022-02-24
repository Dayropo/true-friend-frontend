import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Tricks from "./pages/Tricks"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tricks" element={<Tricks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
