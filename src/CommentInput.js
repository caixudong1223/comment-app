import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor(){
        super(),
        this.state = {
            username : '',
            content : ''
        }
    }

    handleUserNameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            // const {username, content} = this.state
            // this.props.onSubmit({username, content})
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }

        this.setState({
            content: ''
        })
    }

    _setUsername(username){
        localStorage.setItem('username', username)
    }

    _getUsername(){
        let username = localStorage.getItem('username')
        if(username){
            this.setState({
                username: username
            })
        }
    }

    handleUserNameBlur(event){
        this._setUsername(event.target.value)
    }

    componentDidMount() {
        this.textarea.focus()
    }

    componentWillMount() {
        this._getUsername()
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onBlur={this.handleUserNameBlur.bind(this)} onChange={this.handleUserNameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => {
                            this.textarea = textarea
                        }} value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        );
    }
}

// React.js 认为所有的状态都应该由 React.js 的 state 控制，
//只要类似于 <input />、<textarea />、<select /> 这样的输入控件被设置了 value 值，
//那么它们的值永远以被设置的值为准。值不变，value 就不会变化。

export default CommentInput;