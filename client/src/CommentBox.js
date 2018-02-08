import React, {Component} from 'react';

class CommentBox extends Component {

    deletePost=()=>{
        this.props.deleteComment(this.props.commentID, this.props.cityIndex)


    }
    render() {
        return (
            <li>
                <h5>{this.props.poster}</h5>
                <i className='material-icons right' id='deleteComment' onClick={this.deleteBox} onClick={this.deleteComment}>delete</i>
                <blockquote>
                    {this.props.text}
                </blockquote>

            </li>
        );
    }
}

export default CommentBox;