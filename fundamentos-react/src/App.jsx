import React from "react";


import Primeiro from './components/basicos/Primeiro.jsx';
import ComParametro from './components/basicos/ComParametro.jsx';
import Fragmento from './components/basicos/Fragmento.jsx';
import Aleatorio from "./components/basicos/Aleatorio.jsx";
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';

export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <div className="cards">

                <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                    <Familia sobrenome="Cortez" />
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio 
                        max={100}
                        min={10}
                    />
                </Card>
                
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Paramento" color="#E8B71A">
                    <ComParametro 
                        titulo="Segundo Componente" 
                        subtitulo="Muito legal" />
                </Card>
                 
                <Card titulo="#01 - Primeiro Componente" color="#588C73"> 
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}