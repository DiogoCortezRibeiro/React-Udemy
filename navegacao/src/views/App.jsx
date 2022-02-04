import React from "react";
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import {
    BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

export default props => {
    return (
        <Router>
            <div className="App">
                <Menu />
                <Content />
            </div>
        </Router>
    )
}