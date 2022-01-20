import React from "react"

export default function ComParametro(props) {
    console.log(props);
    
    return (
        <div>   
            <h2>{ props.titulo }</h2>
            <h4>{ props.subtitulo }</h4>
        </div>
    )
}