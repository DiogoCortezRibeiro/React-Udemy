import React, { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(numero)
{
    if(numero <= 0)
    {
        return 1;
    }

    return calcFatorial(numero - 1) * numero;
}

function parOuImpar(valor)
{
    return valor % 2 == 0 ? 'Par' : 'Impar';
}

const UseEffect = (props) => {
    const [numero, setNumero]     = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [numeroParImpar, setNumeroParImpar] = useState(1);
    const [parImpar, setParImpar] = useState('Impar');

    useEffect(function() {
        setFatorial(calcFatorial(numero));
    }, [numero]);

    useEffect(function() {
        setParImpar(parOuImpar(numeroParImpar));
    }, [numeroParImpar])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio 01" />
            <div className='center'>
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial}</span>
                </div>
                <input type="number" className="input" value={numero} onChange={(e) => setNumero(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio 02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{parImpar}</span>
                </div>
                <input type="number" className='input' value={numeroParImpar} onChange={(e) => setNumeroParImpar(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
