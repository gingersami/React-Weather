import React, { Component } from 'react';
import CommentBox from './CommentBox';

class CommentsListBox extends Component {
    constructor(props){
        super(props)
    }

    createComments() {
        return this.props.comments.map((comment, index)=>{
            return <CommentBox key={comment._id} commentID={comment._id} cityID={this.props.id} {...comment} deleteComment={this.props.deleteComment}/>
        });

    }


    render(){
        // console.log(this)
        return(
            <ul>
                {this.createComments()}
            </ul>
        );
    }
}

export default CommentsListBox;