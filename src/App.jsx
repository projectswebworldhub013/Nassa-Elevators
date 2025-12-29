import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/Overview";
import Overview from "./Pages/Overview";
import Support from "./Pages/Support";

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/overview-culture" element={<Overview/>}/>
        <Route path="/about/supported-initiative" element={<Support/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App;