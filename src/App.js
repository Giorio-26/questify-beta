import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Challenges from "./components/Challenges";
import Game from "./components/Game";
import Register from "./components/Register";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/game" element={<Game />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
