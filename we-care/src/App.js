import NavBar from "./components/navbar";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurDoctors from "./components/ourDoctors";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/our-doctors" element={<OurDoctors />} />

        {/* <Route path="/another-page" element={<AnotherPage />} /> */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
  // return (
  //   <div>
  //     <NavBar />
  //     {/* <Home /> */}
  //     {/* <Register /> */}
  //     <Login />
  //     <Footer />
  //   </div>
  // );
}

export default App;
