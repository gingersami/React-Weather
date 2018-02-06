import React, {Component} from 'react'
import axios from 'axios'


class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = { city: '' }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault();
        let url = `https://api.apixu.com/v1/current.json?key=dd7a68d4556241e9a24121348180502&q=${this.state.city}`
        axios.get(url)
            .then(response => {
                var query = {
                    name: response.data.location.name,
                    temp: response.data.current.temp_c,
                    country: response.data.location.country,
                    icon: response.data.current.condition.icon,
                    text: response.data.current.condition.text,
                    comments: []
                }
                this.props.onSubmitForm(query)
                this.setState({ city: '' })
            })
            .catch(error => console.log(error))

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className='input-group'>
                    <input type="text"
                           className='input-field '
                           id='city'
                           placeholder='Enter City Name' required
                           value={this.state.city}
                           onChange={(event) => this.setState({ city: event.target.value })}/>
                    <span className="input-group-btn">
                        <button type='submit' className='btn btn-default'>Submit</button>
                    </span>
                </div>
            </form>


        )
    }
}

export default SearchForm

