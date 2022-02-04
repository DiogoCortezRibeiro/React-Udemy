import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input type="number" id="passoInput" value={props.passo} onChange={e => props.alterarPasso(+e.target.value)} />
        </div>
    )
}