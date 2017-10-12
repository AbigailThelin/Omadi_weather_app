import React, { Component } from 'react'
import '../styles/App.css'

import {weatherByCoordinates} from '../utils/api.js'



export default class App extends Component {

	constructor(){
		super()

		this.state={
			weather: []
		}
	}

	componentDidMount(){
		weatherByCoordinates('35', '139').then(response=>{
			this.setState({
				weather: response.data
			})
			console.log(response.data)
		})
	}

	render(){
		return (
			<div className='App'>
				<div className='box'>
					<p>WEATHER INFO:</p>
				</div>
			</div>
		)
	}
}