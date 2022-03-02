import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {initialState, reducer} from '../../store';

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem usuário</span>}
                <span className="text">{state.numero}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'number_add2'})} >+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'login', name: 'Maria Joaquina'})} >Logar</button>
                    <button className="btn" onClick={() => dispatch({type: 'multipy_7'})} >Multiplica por 7</button>
                    <button className="btn" onClick={() => dispatch({type: 'division_25'})} >Divide por 25</button>
                    <button className="btn" onClick={() => dispatch({type: 'parse_int'})} >Converte para Inteiro</button>
                    <button className="btn" onClick={() => dispatch({type: 'add_number', number: -50})} >Adicionar numero</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
