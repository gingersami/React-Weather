import axios from 'axios'

function SearchQuery() {
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

function getFromDB(){
    console.log('getInitialState');
    axios.get(`/weather`)
        .then(res => {
            let serverSaved = res.data;
            this.setState({ weather: serverSaved },()=>{
            });
        }).catch(error => {
        console.log('Error initialState and parsing data', error);
    });
}

export {getFromDB, SearchQuery}
