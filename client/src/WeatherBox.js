import React, {Component} from 'react'
import CommentsListBox from './CommentsListBox'
import CommentForm from "./CommentForm";

class WeatherBox extends Component {
    constructor(props) {
        super(props)
        this.deleteBox=this.deleteBox.bind(this)
    }

    deleteBox(){
        this.props.onClick(this.props.Index)
    }



    render() {
        return (
            <div className="col m6">
                <div className='card large hoverable'>
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4">{this.props.name}<i className='material-icons right' onClick={this.deleteBox}>delete</i></span>
                        <img className='activator' src={this.props.icon}/>
                        <h4 className='center-align'>{this.props.temp}°C</h4>
                    </div>
                    <div className='card-reveal'>
                        <span className="card-title grey-text text-darken-4">Comments for {this.props.name}<i className="material-icons right">close</i></span>
                        <CommentsListBox comments={this.props.comments}/>
                    </div>
                    <button type='button' className='activator grey lighten-1 btn'>Open Comments</button>
                    <br/>
                    <CommentForm onSubmitComment={this.props.onSubmitComment} index={this.props.Index}/>
                </div>

            </div>
        )
    }

}

export default WeatherBox