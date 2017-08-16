import React, { Component } from 'react';
import './editor.css'

class Editor extends Component {
    constructor(){
        super()
        this.state = {
            content: '<h1>React.js</h1>'
        }
    }
    render() {
        return (
            <div style={{fontSize: '18px', color: 'red'}} className='editor-wrapper' dangerouslySetInnerHTML={{__html: this.state.content}}>
            </div>
        );
    }
}

export default Editor;