import React from "react";
import {
    Route,
    Routes
} from 'react-router-dom';
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import './Content.css';

export default props => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </main>
    )
}