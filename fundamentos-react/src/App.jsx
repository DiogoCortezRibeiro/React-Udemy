import React from "react";


import Primeiro from './components/basicos/Primeiro.jsx';
import ComParametro from './components/basicos/ComParametro.jsx';
import Fragmento from './components/basicos/Fragmento.jsx';
import Aleatorio from "./components/basicos/Aleatorio.jsx";
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import Membro from './components/basicos/Membro'
import DiretaPai from "./components/comunicacao/DiretaPai.jsx";
import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx";
import Input from "./components/formulario/Input.jsx";

export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <div className="cards">

                <Card titulo="#08 - Comunicação Controlado" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="#07 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>

                <Card titulo="#06 - Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                    <Familia sobrenome="Cortez"> 
                        <Membro nome="Diogo" />
                        <Membro nome="Thallita" />
                        <Membro nome="Alice" />
                    </Familia>
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