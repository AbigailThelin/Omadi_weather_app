import React, { Component } from 'react'
import '../styles/App.css'
import config from '../config.js'

import {weatherByCoordinates} from '../utils/api.js'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'


const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=" + config.mapsAPIKey;

const GettingStartedGoogleMap = withGoogleMap(props => (
	<GoogleMap
		ref={props.onMapLoad}
		defaultZoom={10}
		center={props.center}
		googleMapURL={googleMapURL}>
		{props.markers.map(marker => (
		<Marker
			{...marker}
			onDragEnd={props.moved}
		/>
		))}
	</GoogleMap>
));



export default class App extends Component {

	constructor(){
		super()

		this.state={
			weather: [],
			marker: {
				position: { lat: 40.226, lng: -111.661},
				key: `DevMountain`,
				defaultAnimation: 2,
				defaultDraggable: true
			},
			disp: [],
      		center: { lat: 40.226, lng: -111.661},
		}
		this.moved = this.moved.bind(this)
	}

	moved(val){
		let temp = Object.assign({},this.state.marker,{position: { lat: val.latLng.lat(), lng: val.latLng.lng()}})
		this.setState({
			marker: temp
		})
		weatherByCoordinates(val.latLng.lat(), val.latLng.lng()).then(response=>{
			this.setState({
				weather: response
			})
		})
	}

	componentDidMount(){
		weatherByCoordinates(this.state.center.lat, this.state.center.lng).then(response=>{
			this.setState({
				weather: response
			})
		})
	}

	render(){
		
		let marker = this.state.marker

	return (
			<div className='App'>
				<div className="header"><p className="head">Click and Drag to see Info</p></div>
			<div className='map-container'>	
			<GettingStartedGoogleMap
				containerElement={
				<div style={{ height: `100%` }} />
				}
				mapElement={
				<div style={{ height: `100%` }} />
				}
				markers={[marker]}
				center={this.state.center}
				moved={this.moved}
			/>
			</div>	
				<div className="boxContainer">
					<div className='box'>
						<p className="title">WEATHER INFO:</p>
						{
							this.state.weather.length !== 0
							?
							<div>
								<p className="body">Location: {this.state.weather.coord.lon} Longitutde, {this.state.weather.coord.lat} Latitude</p>  
								<p className="body">Temperature: {this.state.weather.main.temp}</p> 
								<p className="body">Humidity: {this.state.weather.main.humidity}%</p> 
								<p className="body">Ground Level: {this.state.weather.main.grnd_level} ft</p> 
								<p className="body">{this.state.weather.main.temp}</p>
							</div>
							:
							null
						}
					</div>
				</div>
			</div>
		)
	}
}