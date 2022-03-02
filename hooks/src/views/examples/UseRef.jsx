import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const merge = function(valor1, valor2)
{
    let valorRetorno = '';

    if(valor1)
    {
        for(var i = 0; i < valor1.length; i++)
        {
            valorRetorno += valor1[i];
            if(valor2[i])
            {
                valorRetorno += valor2[i];
            }
            
        }
    }
    return valorRetorno;
}

const UseRef = (props) => {
    const [valor1, setValue1] = useState("");
    const [valor2, setValue2] = useState("");
    const count    = useRef(0);
    const myInput1 = useRef("");
    const myInput2 = useRef("");

    useEffect(function() {
        count.current = count.current + 1;
        myInput2.current.focus();
    }, [valor1])

    useEffect(function() {
        count.current = count.current + 1;
        myInput1.current.focus();
    }, [valor2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: {merge(valor1, valor2)} </span>
                    <span className="text">[</span>
                    <span className='text red'>{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input" ref={myInput1} value={valor1} onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input type="text" className="input" ref={myInput2} value={valor2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
