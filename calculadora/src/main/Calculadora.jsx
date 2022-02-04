import React, {Component} from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import './Calculadora.css';

const initialState = {
    displayValeu: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculadora extends Component{

    state = {...initialState};

    constructor(props)
    {
        super(props)
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigito = this.addDigito.bind(this);
    }

    clearMemory()
    {
        this.setState({...initialState});
    }

    setOperation(operation)
    {
        if(this.state.current === 0)
        {
            this.setState({operation, current: 1, clearDisplay: true})
        }else
        {
            const equals = operation === '=';
            const currentOperation = this.state.operation;
            const values = [...this.state.values];
            let result = 0;

            switch(currentOperation)
            {
                case '*': {
                    result = values[0] * values[1];
                    break;
                }
                case '/': {
                    result = values[0] / values[1];
                    break; 
                }
                case '+': {
                    result = values[0] + values[1];
                    break; 
                }
                case '-': {
                    result = values[0] - values[1];
                    break; 
                }
            }
            this.setState({displayValeu: result, operation: equals ? null : operation, current: equals ? 0 : 1, clearDisplay: !equals, values});
        }
    }

    addDigito(n)
    {
        if(n === '.' && this.state.displayValeu.includes('.'))
        {
            return;
        }

        const clearDisplay = this.state.displayValeu === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValeu;
        const displayValeu = currentValue + n;

        this.setState({displayValeu, clearDisplay: false});

        if(n !== '.')
        {
            const i = this.state.current;
            const newValue = parseFloat(displayValeu);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({values});
        }

    }

    render() 
    {
        return (
            <div className="calculadora">
                <Display valor={this.state.displayValeu} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" operation={true} click={this.setOperation} />
                <Button label="7" click={this.addDigito}/>
                <Button label="8" click={this.addDigito}/>
                <Button label="9" click={this.addDigito}/>
                <Button label="*" operation={true} click={this.setOperation} />
                <Button label="4" click={this.addDigito}/>
                <Button label="5" click={this.addDigito}/>
                <Button label="6" click={this.addDigito}/>
                <Button label="-" operation={true} click={this.setOperation} />
                <Button label="1" click={this.addDigito}/>
                <Button label="2" click={this.addDigito}/>
                <Button label="3" click={this.addDigito}/>
                <Button label="+" operation={true} click={this.setOperation} />
                <Button label="0" double={true} click={this.addDigito}/>
                <Button label="." click={this.addDigito}/>
                <Button label="=" operation={true} click={this.setOperation} />
            </div>
        )
    }
}