import React, { Component } from 'react';
import CommentBox from './CommentBox';

class CommentsListBox extends Component {
    constructor(props){
        super(props)
    }

    createComments() {
        return this.props.comments.map((comment, index)=>{
            return <CommentBox key={index} commentIndex={index} cityIndex={this.props.index} {...comment}/>
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