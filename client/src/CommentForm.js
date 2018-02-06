import React, {Component} from 'react'

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {text: '', poster: '', id: 0 }
        this.onSubmitCommentForm=this.onSubmitCommentForm.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
    }
    //
    // onSubmitComment(e){
    //     e.preventDefault()
    //     var comment = {
    //         poster:this.state.poster,
    //         commentText:this.state.text
    //     }
    //     this.props.onSubmitComment(comment)
    //     this.setState({text:'', poster:''}})
    //
    // }

    handleInputChange(e){
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value });

    }
    onSubmitCommentForm(e){
        e.preventDefault()
        this.props.onSubmitComment(this.state,this.state.id);
        this.setState({
            poster:'',
            text:''
        })
    }
x
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmitCommentForm}>
                <div>
                    <input type="text"
                           className='input-field'
                           name='text'
                           id='text'
                           placeholder='Enter Text Here'
                           value={this.state.text}
                           onChange={this.handleInputChange}

                    />
                    <input
                        type='text'
                        className='input-field'
                        name='poster'
                        id='poster'
                        placeholder='Please Enter your name'
                        value={this.state.poster}
                        onChange={this.handleInputChange}/>
                    <span className='input-group'>
                        <button type='submit' className='btn'>Submit Comment</button>
                    </span>
                </div>

            </form>
            </div>
        )
    }

}
export default CommentForm