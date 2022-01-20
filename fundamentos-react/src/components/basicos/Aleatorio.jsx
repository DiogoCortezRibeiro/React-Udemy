import React from "react";

export default (props) => {
    const max = props.max;
    const min = props.min;
    const valorAleatorio = Math.floor(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Numero aleatorio sorteado: { valorAleatorio }</h2>
        </div>
    )
}