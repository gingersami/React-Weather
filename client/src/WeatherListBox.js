import React, {Component} from 'react'
import WeatherBox from "./WeatherBox";
class WeatherListBox extends Component {
    constructor(props) {
        super(props)
        this.renderBoxes=this.renderBoxes.bind(this)

    }

    renderBoxes() {
        return this.props.boxes.map((item, index) =>
            <WeatherBox key={index} Index={index} {...item} onSubmitComment={this.props.onSubmitComment}>
            </WeatherBox>

        )
    }


    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col m12'>
                        {this.renderBoxes()}
                    </div>
                </div>
            </div>

        )
    }
}

export default WeatherListBox