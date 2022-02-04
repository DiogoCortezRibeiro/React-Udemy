import React from "react";

export default props => {
    return (
        <div>
            <div> Filho </div>
            <button onClick={e =>  props.quandoClicar('Diogo Cortez', 52, true) }>
                Fornecer informações
            </button>
        </div>
    )
}