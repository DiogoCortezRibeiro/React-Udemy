import React from "react";
import Botoes from "./Botoes";
import "./Contador.css"
import Display from "./Display";
import PassoForm from "./PassoForm";
export default class Contador extends React.Component
{
    state = {
        numero: this.props.numeroInicial || 0,
        passo : this.props.passoInicial || 5 
    };
    
    incrementar = () =>
    {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    decrementar = () =>
    {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    alterarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render()
    {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} alterarPasso={this.alterarPasso}/>
                <Botoes incrementar={this.incrementar} decrementar={this.decrementar}/>
            </div>
        )
    }   
}