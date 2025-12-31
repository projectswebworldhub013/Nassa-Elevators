import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Overview from "./Pages/Overview";
import Support from "./Pages/Support";
import MileStones from "./Pages/MileStones";
import Innovation from "./Pages/Innovation";
import Insights from "./Pages/Insights";
import Management from "./Pages/Management";
import ServiceDetail from "./Pages/ServiceDetail";
import SingleModernization from "./Pages/SingleModernization";
import Contact from "./Pages/Contact";
import ScrollToTop from './Components/ScrollToTop'
import SingleProduct from "./Pages/SIngleProduct";
import Career from "./Pages/Career";
function App() {

  return (
    <>
    <ScrollToTop/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/overview-culture" element={<Overview/>}/>
        <Route path="/about/supported-initiative" element={<Support/>}/>
        <Route path="/about/milestones" element={<MileStones/>}/>
        <Route path="/about/innovations" element={<Innovation/>}/>
        <Route path="/about/insights" element={<Insights/>}/>
        <Route path="/about/management-address" element={<Management/>}/>
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/modernization/:slug" element={<SingleModernization />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products/:slug" element={<SingleProduct />} />
        <Route path="/careers" element={<Career/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App;