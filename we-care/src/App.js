import NavBar from "./components/navbar";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurDoctors from "./components/ourDoctors";
import Articles from "./components/articles";
import AboutUs from "./components/aboutus";
import BookAppointment from "./components/bookAppointment";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/our-doctors" element={<OurDoctors />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-appointment" element={<BookAppointment />} />

        {/* <Route path="/another-page" element={<AnotherPage />} /> */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
