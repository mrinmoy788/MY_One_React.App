import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./componetns/Header";
import { Home } from "./componetns/Home";
import Footer from "./componetns/Footer";
import Contact from "./componetns/Contact"
import Services from "./componetns/Services";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";



function App() {
  return (
    
    <Router>

      <Header/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    
    </Router>
      
  );
}

export default App;
