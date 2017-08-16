import React, { Component } from 'react';

class Clock extends Component {
    constructor(){
        super()
        this.state = {
            date: new Date()
        }
    }
    //一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等，
    //就可以放在 componentWillMount 里面进行
    componentWillMount() {
        this.timer = setInterval(()=>{
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        );
    }
}


class ClockApp extends Component {
    constructor(){
        super()
        this.state = {
            isShowClock: true
        }
    }

    handleShowOrHide() {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
        //setState 只能在已经挂载或者正在挂载的组件上调用
    }
    render() {
        return (
            <div>
                {this.state.isShowClock ? <Clock/>: null}
                <button onClick={this.handleShowOrHide.bind(this)}>显示或隐藏时钟</button>
            </div>
        );
    }
}





export default ClockApp;