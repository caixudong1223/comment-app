import React, { Component } from 'react';


class Input extends Component {
    render() {
        return (
            <div>
                <input type='number' onChange={this.props.change}/>
            </div>
        )
    }
}

class PercentageShower extends Component {
    render() {
        return (
            <div>{this.props.onShow}</div>
        )
    }
}

class PercentageApp extends Component {
    constructor(){
        super()
        this.state = {
            number: 0.0
        }
    }
    
    handleInputNumber(event){
        console.log(event.target.value)

        let newNum = (event.target.value*100).toFixed(2) + '%';
        this.setState({
            num: newNum
        })
    }

    render() {
        return (
            <div>
                <PercentageShower onShow={this.state.num}/>
                <Input change={this.handleInputNumber.bind(this)}/>
            </div>
        )
    }
}

export default PercentageApp;
