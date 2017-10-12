import axios from 'axios'

// var weather = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}'

export function weatherByCoordinates(lat, lon){
    return axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`).then(response=>response.data)
}