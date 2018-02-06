import React, {Component} from 'react';

class CommentBox extends Component {
    render() {
        return (
            <li>
                <h5>{this.props.poster}</h5>
                <blockquote>
                    {this.props.text}
                </blockquote>

            </li>
        );
    }
}

export default CommentBox;