import React, {Component} from 'react'
import CommentsListBox from './CommentsListBox'
import CommentForm from "./CommentForm";
import axios from 'axios'

class WeatherBox extends Component {
    constructor(props) {
        super(props)
        this.deleteBox=this.deleteBox.bind(this)
        this.state={item:{}}
    }

    deleteBox(){
        this.props.onClick(this.props._id, this.props.cityIndex)
    }

    componentDidMount(){
        this.fetchData()

    }

    fetchData(){
        let url = `https://api.apixu.com/v1/current.json?key=dd7a68d4556241e9a24121348180502&q=${this.props.name}`
        axios.get(url)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    let weatherItem = {
                        name: response.data.location.name,
                        country: response.data.location.country,
                        icon: response.data.current.condition.icon,
                        temp: response.data.current.temp_c,
                        text: response.data.current.condition.text,
                    };

                    this.setState({ item: weatherItem });
                } else {
                    console.log('errr')
                }

            })

    }


    render() {
        return (
            <div className="col m6">
                <div className='card large hoverable'>
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4">{this.state.item.name}<i className='material-icons right' id='deleteCard' onClick={this.deleteBox}>delete</i></span>
                        <img className='activator' src={this.state.item.icon} alt=''/>
                        <h4 className='center-align'>{this.state.item.temp}°C</h4>
                    </div>
                    <div className='card-reveal'>
                        <span className="card-title grey-text text-darken-4">Comments for {this.state.item.name}<i className="material-icons right">close</i></span>
                        <CommentsListBox comments={this.props.comments}/>
                    </div>
                    <button type='button' className='activator grey lighten-1 btn'>Open Comments</button>
                    <br/>
                    <CommentForm onSubmitComment={this.props.onSubmitComment} cityIndex={this.props.cityIndex} id={this.props._id}/>


                </div>

            </div>
        )
    }

}

export default WeatherBox