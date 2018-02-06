import React, {Component} from 'react';
import './App.css';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';

class App extends Component {
    constructor(props) {
        super(props)
        this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
        this.onSubmitComment = this.onSubmitComment.bind(this)
        this.deletePost=this.deletePost.bind(this);
        this.state = { weather: [] }
    }

    onSubmitSearchForm(data) {
        this.setState(prevState => ({
            weather: [...prevState.weather, data]
        }));
    };

    onSubmitComment(comment, index) {
        console.log(comment, index)
        console.log(this.state.weather)
        this.setState((prevState) => {
                let updatedComments = prevState.weather[index].comments.concat(comment);
                let updatedCity = { ...prevState.weather[index] };
                updatedCity.comments = updatedComments;
                return { weather: [...prevState.weather.filter((value, i) => i !== index), updatedCity] }
            },
            () => console.log(this.state.weather[index].comments));
    }

    deletePost(index){
    this.setState((prevState)=>{
        return {weather:[...prevState.weather.filter((value,i)=> i !==index)]}
        }
    )
    }


    render() {
        return (
            <div className="App">
                <h2>Weather App</h2>
                <div className='container'>
                    <SearchForm onSubmitForm={this.onSubmitSearchForm}/>
                </div>
                <br/>
                <WeatherListBox boxes={this.state.weather} onSubmitComment={this.onSubmitComment} onClick={this.deletePost}/>
            </div>
        );
    }
}

export default App;
