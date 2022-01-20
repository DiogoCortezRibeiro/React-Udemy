import React from "react";
import './card.css';

export default (props) => {
    const estilo = {
        backgroundColor: props.color,
        borderColor: props.color
    }
    return (
        <div className="card" style={estilo}>

            <div className="titulo">
                <h3>{props.titulo}</h3>
            </div>

            <div className="conteudo">
                {props.children}
            </div>

        </div>
    )
}