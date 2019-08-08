import React from 'react'

import axios from 'axios'

const API_URL = "http://localhost:5000"

class App extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			hitsCount: 0
		}
	}

	async componentDidMount(){

		setInterval(async ()=>{
			try {
				var res = await axios.get(API_URL+"/hitsCount")
				this.setState({ hitsCount: res.data.hitsCount })
			} catch (e){
				console.log(e)
			}
		}, 200)
	}

	async reset(){
		try {
			await axios.get(API_URL+"/reset")
		} catch (e){ console.log(e) }
	}

	render (){
		return (
			<div className="App">
				<div className="hitsCount">
					{this.state.hitsCount}
				</div>
				<div className="resetButton" onClick={()=> {
					this.reset()
				}}>
					RESTART
				</div>
			</div>
		)
	}
	
}

export default App;
