import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

import Login from "./pages/login";
import Home from "./pages/home";
import Events from "./pages/events";
import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";

import { useState } from "react";
import Account from "./pages/account";

import "./css/app.css";

const App = () => {
  const [user, setUser] = useState();
  return (
    <div className="AppStyles">
      <BrowserRouter>
        <Header />
        {user && <Navbar />}
        <Routes>
          <Route path="/" element={<Login setter={setUser} user={user} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/account"
            element={<Account setter={setUser} user={user} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
