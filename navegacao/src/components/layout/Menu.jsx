import React from "react";
import './Menu.css';

export default props => {
    return (
        <asside className="Menu">
            <nav>
                <ul>
                    <li><a href="/home">Inicio</a></li>
                    <li><a href="/about">Sobre</a></li>
                </ul>
            </nav>
        </asside>
    )
}