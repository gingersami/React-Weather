import React, {Component} from 'react'
import CommentsListBox from './CommentsListBox'
import CommentForm from "./CommentForm";

class WeatherBox extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className="col m6">
                <div className='card large'>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{this.props.name}</span>
                        <img className='activator' src={this.props.icon}/>
                        <h4 className='center-align'>{this.props.temp}°C</h4>
                    </div>
                    <div className='card-reveal'>
                        <span className="card-title grey-text text-darken-4">Comments for {this.props.name}<i className="material-icons right">close</i></span>
                        {/*<CommentsListBox comments={this.props.comments}/>*/}
                    </div>
                    <CommentForm onSubmitComment={this.props.onSubmitComment}/>
                </div>

            </div>
        )
    }

}

export default WeatherBox