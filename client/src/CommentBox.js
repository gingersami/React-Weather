import React, { Component } from 'react';

class CommentBox extends Component {
    render(){
        return(
            <li>{this.props.poster} - {this.props.text} <i></i></li>
        );
    }
}

export default CommentBox;