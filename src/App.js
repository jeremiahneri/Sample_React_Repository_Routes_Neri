import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/contacus";
import AboutUs from "./pages/aboutus";
// importing ClassState 
import ClassState from "./pages/ClassState";
import FunctionalState from "./pages/functionalState";
import BasicFormHandling from "./pages/BasicFormHandling";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>

      {/* Using it as a component */}
      <Route path="/classState" element={<ClassState/>}></Route>

       {/* Using it as a component */}
      <Route path="/functionalUseState" element={<FunctionalState/>}></Route>

        {/* BasicFormHandling */}
      <Route path="/basicformHandling" element={<BasicFormHandling/>}></Route>
    </Routes>

    </BrowserRouter>
      {/* <h1 className="text-warning">Hello world</h1> */}
    </>
  );
}

export default App;
