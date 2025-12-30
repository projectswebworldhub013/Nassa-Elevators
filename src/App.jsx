import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/Overview";
import Overview from "./Pages/Overview";
import Support from "./Pages/Support";
import MileStones from "./Pages/MileStones";
import Innovation from "./Pages/Innovation";
import Insights from "./Pages/Insights";
import Management from "./Pages/Management";

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/overview-culture" element={<Overview/>}/>
        <Route path="/about/supported-initiative" element={<Support/>}/>
        <Route path="/about/milestones" element={<MileStones/>}/>
        <Route path="/about/innovations" element={<Innovation/>}/>
        <Route path="/about/insights" element={<Insights/>}/>
        <Route path="/about/management-address" element={<Management/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App;