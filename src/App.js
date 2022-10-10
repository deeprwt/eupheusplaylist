import "./App.css";
import Sidebar from "./Components/Sidebar.js";
// import Audio from "./Pages/Audio.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useRef, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import Playlist from "./Pages/Playlist";

function App() {
  const [sidebarshow, setShowsidebar] = useState(false);

  const toggle = (status) => {
    setShowsidebar(status);
  };

  const playlistRef = useRef();


  return (
    <>
      <BrowserRouter>
        <div className="main flex relative ">
          <Sidebar state={sidebarshow} toggle={toggle} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/audio" element={<Playlist ref={playlistRef} />}></Route>
          </Routes>
        </div>
        <FaHamburger
          style={{ marginLeft: "auto" }}
          className="lg:hidden md:hidden absolute top-4 left-4 text-[#530790]"
          onClick={toggle}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
