import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store';

const UseContext = (props) => {

    const contexto = useContext(DataContext);

    function setNumero(delta)
    {
        contexto.setState({
            ...contexto.state,
            number: contexto.state.number + delta   
        });
    }

    const {number, setNumber} = useContext(AppContext);
    const {text, setText}     = useContext(AppContext);
    
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercicio #01" />

            <div className="center">
                <span className="text">{contexto.state.text}</span>
                <span className="text">{contexto.state.number}</span>
                <button className="btn" onClick={() => setNumero(10)}>Atribur +10</button>
            </div>


            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{number}</span>
                <span className="text">{text}</span>
                <button className="btn" onClick={() => setNumber(number + 5)}>Atribur +5</button>
            </div>
        </div>
    )
}

export default UseContext;
