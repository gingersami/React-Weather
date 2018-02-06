import React, {Component} from 'react';
import './App.css';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';

class App extends Component {
    constructor(props){
        super(props)
        this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
        this.onSubmitComment=this.onSubmitComment.bind(this)
        this.state={weather:[]}
    }

    onSubmitSearchForm(data) {
        this.setState(prevState => ({
            weather: [...prevState.weather, data]
        }));
    };

    onSubmitComment(comment,id){
        console.log(comment)
        console.log(this.state.weather[0].comments)
        this.setState(prevState=>({
            weather: prevState.weather[id].comments.concat(comment)}));
    }



    render() {
        return (
            <div className="App">
                <h2>Weather App</h2>
                <div className='container'>
                    <SearchForm onSubmitForm={this.onSubmitSearchForm} />
                </div>

                <WeatherListBox boxes={this.state.weather} onSubmitComment={this.onSubmitComment}/>
            </div>
        );
    }
}

export default App;
