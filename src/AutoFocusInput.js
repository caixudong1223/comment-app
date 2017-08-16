import React, { Component } from 'react';
import './App.css'

class AutoFocusInput extends Component {
    componentDidMount() {
        this.input.focus()
    }
    

    render() {
        return (
            <input ref={(input) => this.input = input}/>
        );
    }

    //可以给任意代表 HTML 元素标签加上 ref 从而获取到它 DOM 元素然后调用 DOM API。但是记住一个原则：
    //能不用 ref 就不用。特别是要避免用 ref 来做 React.js 本来就可以帮助你做到的页面自动更新的操作和事件监听。
    //多余的 DOM 操作其实是代码里面的“噪音”，不利于我们理解和维护。
}

class BlackBorderContainer extends Component {
    render(){
        return (
            <div>
                {this.props.children.map((el) => {
                    return 
                    (
                        <div className="divChid">
                            {el}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BlackBorderContainer;