import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    //当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，
    //用 props 传递数据或者函数来管理这种依赖或着影响的行为。

    

    _loadComments(){
        let comments = localStorage.getItem('comments')
        comments = JSON.parse(comments)
        if(comments){
            this.setState({
                comments
            })
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSubmitComment(comment){
        if(!comment) return
        if(!comment.username) return alert('请输入用户名！')
        if(!comment.content) return alert('请输入评论内容！') 
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
        this._saveComments(this.state.comments);
    }

    handleDeleteComment(index) {
        // console.log(index)
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({comments})
        this._saveComments(comments)
    }

    componentWillMount() {
        this._loadComments()
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList onDeleteComment={this.handleDeleteComment.bind(this)} comments={this.state.comments}/>
            </div>
        );
    }
}

export default CommentApp;