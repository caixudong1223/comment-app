import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Comment from './Comment'


class CommentList extends Component {    
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = { //加上 defaultProps 防止 comments 不传入的情况：
        comments: []
    }

    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }

    render() {        
        return (
            <div>
                {this.props.comments.map((comment, i) => <Comment key={i} onDeleteComment={this.handleDeleteComment.bind(this)} index={i} comment={comment}/>)}
            </div>
        );
    }
}

export default CommentList;
