import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import Intro from "./components/Intro";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <About />
                <BottomBar />
                <Skills />
                <Contact />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
           <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
