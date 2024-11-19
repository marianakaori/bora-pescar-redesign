import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import Contact from "./pages/Contact/contact";
import Footer from "./components/Footer/footer";
import JumpToStartArrow from "./components/JumpToStartArrow/jumpToStartArrow";


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <JumpToStartArrow/>
            <Footer />
        </Router>
    );
}

export default App;