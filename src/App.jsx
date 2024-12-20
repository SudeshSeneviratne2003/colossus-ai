import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotpassword";
import PasswordVerify from "./pages/passwordverify";
import Features from "./pages/features";
import About from "./pages/about";
import Feedback from "./pages/feedback";
import ContactUs from "./pages/contactus";
import ChatPage from "./pages/chatpage";
import CreateDomain from "./pages/createdomain";
import RoadmapGenerate from "./pages/roadmapgenerate";
import SavedRodmaps from "./pages/savedroadmaps";
import SavedSummary from "./pages/savedsummary";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/passwordverify" element={<PasswordVerify />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/chatpage" element={<ChatPage />} />
          <Route path="/createdomain" element={<CreateDomain />} />
          <Route path="/roadmapgenerate" element={<RoadmapGenerate />} />
          <Route path="/savedroadmaps" element={<SavedRodmaps />} />
          <Route path="/savedsummary" element={<SavedSummary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
