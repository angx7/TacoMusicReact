import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Library from "../library/library";
import Feed from "../feed/feed";
import Trending from "../trending/trending";
import Player from "../player/player";
import Favorites from "../favorites/favorites";
import "./home.css";

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}
