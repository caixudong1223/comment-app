import React, { Component } from 'react';
import wrapWithLoadData  from './wrapWithLoadData';

class InputWithUserName extends Component {
    render() {
        return (
            <input data={this.props.data}/>
        )
    }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')

export default InputWithUserName;