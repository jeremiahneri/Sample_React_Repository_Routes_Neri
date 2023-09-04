import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/contacus";
import AboutUs from "./pages/aboutus";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
    </Routes>

    </BrowserRouter>
      <h1 className="text-warning">Hello world</h1>
    </>
  );
}

export default App;
