import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ContextDemo extends Component {
    static childContextTypes = { //验证 getChildContext 返回的对象
        themeColor: PropTypes.string
    }

    constructor(){
        super()
        this.state = {
            themeColor: 'red'
        }
    }

    //getChildContext 这个方法就是设置 context 的过程，它返回的对象就是 context（也就是上图中处于中间的方块），所有的子组件都可以访问到这个对象。
    //如果你要给组件设置 context，那么 childContextTypes 是必写的。
    getChildContext(){
        return {
            themeColor: this.state.themeColor
        }
    }

    componentWillMount() {
        this.setState({
            themeColor: 'green'
        })
    }

    

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h2>This is header</h2>
                <Title />
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <h2>This is main</h2>
                <Content />
            </div>
        )
    }
}

class Title extends Component {
    //子组件要获取 context 里面的内容的话，就必须写 contextTypes 来声明和验证你需要获取的状态的类型，它也是必写的，如果你不写就无法获取 context 里面的状态。
    static contextTypes = {
        themeColor: PropTypes.string //Title 想获取 themeColor，它是一个字符串，我们就在 contextTypes 里面进行声明。
    }
    render() {
        return (
            <h1 style={{color: this.context.themeColor}}>React.js 小书标题</h1>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h2>React.js 小书内容</h2>
            </div>
        )
    }
}

export default ContextDemo;

//一个组件可以通过 getChildContext 方法返回一个对象，这个对象就是子树的 context，
//提供 context 的组件必须提供 childContextTypes 作为 context 的声明和验证。
//如果一个组件设置了 context，那么它的子组件都可以直接访问到里面的内容，它就像这个组件为根的子树的全局变量。
//任意深度的子组件都可以通过 contextTypes 来声明你想要的 context 里面的哪些状态，然后可以通过 this.context 访问到那些状态。