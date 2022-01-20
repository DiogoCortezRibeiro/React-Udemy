import React from "react";

import Membro from './Membro';

export default (props) => {
    return (
        <div>
            <Membro nome="Diogo" sobrenome={props.sobrenome}/>
            <Membro nome="Thallita" sobrenome={props.sobrenome}/>
            <Membro nome="Alice" sobrenome={props.sobrenome}/>
        </div>
    )
}