import React, { Component, Fragment } from 'react';
import axios from "axios";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: ""
		};
	}
  componentDidMount(){
	  axios.get("/users/count/5e2733484dcc532e10388d12")
	  .then((res)=>{
		this.setState({
			count: res.data.count
		});
		  console.log(res.data.count);
	  })
	  .catch(err=>{
		  console.log(err);
	  })

  }
  
	buttonhandler = async() => {
		  await this.setState({
			count: this.state.count +1
		},()=>{console.log(this.state.count);});
		
		const user={
			count:this.state.count
		}
		axios.put("/users/5e2733484dcc532e10388d12",user)
		.then((res)=>{
		  console.log(res.data);
		//   this.componentDidMount();
	  })
	  .catch(err=>{
		  console.log(err);
	  })
	};

	render() {
		return (
			<Fragment>
				<div>
					<h1>You Cliked {this.state.count} times. </h1>
					<button onClick={this.buttonhandler}> Click Me </button>
				</div>
			</Fragment>
		);
	}
}

export default App;