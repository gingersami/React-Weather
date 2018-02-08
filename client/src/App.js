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


    onSubmitComment(comment, cityIndex, id) {

        axios.put(`/weather/${id}/comment`, comment).then((response) => {
            console.log(response)

            this.setState(prevState => {
                return {
                    weather: prevState.weather.map((city, i) => {
                        if (city._id === id) {
                            // let updatedComments = city.comments.concat(comment);
                            let updatedCity = { ...city };
                            updatedCity.comments = response.data.comments;
                            return updatedCity;
                        }
                        return city;
                    })
                };
            });
        }).catch((err) => {
            console.log(err)
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

    deleteComment = (cityID, commID) => {
        axios.delete(`/weather/${cityID}/${commID}`)
            .then(res => {
                console.log(res)
                this.setState((prevState) => {
                    return {
                        weather: prevState.weather.filter((item, i) => {
                            if (item._id === cityID) {
                                let updatedCity = { ...item }
                                updatedCity.comments = res.data.comments
                                return updatedCity
                            }
                            return item
                        })
                    }
                })
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
                                onClick={this.deletePost} deleteComment={this.deleteComment}/>
            </div>
        );
    }
}

export default App;
