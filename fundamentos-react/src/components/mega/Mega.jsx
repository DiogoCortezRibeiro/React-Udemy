import React, {useState} from "react";

export default props => {

    function gerarNumeroNaoContido(min, max, array)
    {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
    }

    function gerarNumeros(qtde)
    {
        const numeros = Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums);
            return [...nums, novoNumero];
        }, []).sort((n1, n2) => n1 - n2);

        return numeros;
    }

    const [numeros, setNumeros] = useState(Array(props.qtde || 6).fill(0)); 

    return (
        <div>
            <h2>Mega-Sena</h2>
            <h3>{numeros.join(' - ')}</h3>
            <button onClick={e => setNumeros(gerarNumeros(props.qtde || 6))}>Gerar Números</button>
        </div>
    )
}