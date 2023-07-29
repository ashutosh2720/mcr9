import { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categorie from "./pages/Categorie";
import Explore from "./pages/Explore";
import VideoDescription from "./pages/VideoDescription";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:category" element={<Categorie />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/description/:videoId" element={<VideoDescription />} />
      </Routes>
    </>
  );
}

export default App;
