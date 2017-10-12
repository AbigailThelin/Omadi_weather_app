import axios from 'axios'



export function weatherByCoordinates(lat, lon){
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d819aa93c30a9903a80d09c329eb9707`).then(response=>response.data)
}

// export function maps(){
//     return axios.get(`https://www.google.com/maps/embed/v1/place?key=AIzaSyCjRFZF0mf1VpdFW9-oSOeMyDnsscAT60U&q=provo`).then(response=>response.data)
// }
