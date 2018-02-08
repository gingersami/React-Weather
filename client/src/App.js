import React, {Component} from 'react';
import './App.css';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
        this.onSubmitComment = this.onSubmitComment.bind(this)
        this.deletePost = this.deletePost.bind(this);
        this.state = { weather: [] }
    }

    onSubmitSearchForm(data) {
        axios.post('/weather', data).then(response => {
            this.setState((prevState) => {
                return {
                    weather: [...prevState.weather, response.data]
                }
            })
        })

        // this.setState(prevState => ({
        //     weather: [...prevState.weather, data]
        // }));
    };


    componentDidMount() {
        console.log('getInitialState');
        axios.get(`/weather`)
            .then(res => {
                let serverSaved = res.data;
                this.setState({ weather: serverSaved }, () => {

                });
            }).catch(error => {
            console.log('Error initialState and parsing data', error);
        });
    }


    onSubmitComment(comment, cityIndex,id) {

        axios.put(`/weather/${id}/comment`, comment).then(()=>{
            console.log(id)

        this.setState(prevState => {
            return {
                weather: prevState.weather.map((city, i) => {
                    console.log(city)
                    if (i === cityIndex) {
                        let updatedComments = city.comments.concat(comment);
                        let updatedCity = { ...city };
                        updatedCity.comments = updatedComments;
                        return updatedCity;
                    }
                    return city;
                })
            };
        });
        })
    }


    deletePost(id, index) {
        console.log(index)
        axios.delete(`/weather/${id}`)
            .then(res => {
                console.log(res);
                this.setState((prevState) => {
                    return {
                        weather: prevState.weather.filter((item, i) => {
                            return (i !== index)
                        })
                    }
                });
            }).catch((err) => {
            console.log(err)
        })
    }


    render() {
        return (
            <div className="App">
                <h2>Weather App</h2>
                <div className='container'>
                    <SearchForm onSubmitForm={this.onSubmitSearchForm}/>
                </div>
                <br/>
                <WeatherListBox boxes={this.state.weather} onSubmitComment={this.onSubmitComment}
                                onClick={this.deletePost}/>
            </div>
        );
    }
}

export default App;
