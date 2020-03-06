import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Aux from "../../hoc/aux"


class Countdown extends Component {
	constructor(props) {
		super(props);
			// this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	state = {
		days: undefined,
        hours: undefined,
        minutes: undefined,
		seconds: undefined,
		message:''
	}

	componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            //   const then = moment('2020-04-20', 'YYYY-MM-DD');
            const then =  new Date("Apr 20, 2020 16:37:52").getTime();
            // const now = new Date();
            const now = new Date().getTime();

            // const countdown = moment(then - now);
            var timeleft = then - now;

            // console.log("COUNTDOWN", new Date(countdown))
            // const days = countdown.format('DD');
            // const hours = countdown.format('HH');
            // const minutes = countdown.format('mm');
            // const seconds = countdown.format('ss');

            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            this.setState({ days, hours, minutes, seconds });
        }, 1000);
	}
	
	componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

	 handleSubmit = (event)=>{
		event.preventDefault();
		 const email = this.email.value

		//  console.log(email)
		 
		//  console.log(email)
		// console.log("HELLO WORLD")
		axios.post(`https://eles-api.herokuapp.com/api/users`, {email})
			.then((res, err) =>{
				if(err){
					console.log(err)
				}
				console.log(res.message)
			} )
			.catch(err => console.log(err))

			this.props.history.push('/thanks')
			event.stopPropagation();

			


	}
	render() {
		const { days, hours, minutes, seconds } = this.state;
		return (
			<Aux>
				    <div className="container">
      <img
      height="90px" 

      className="logo" src="img/Web2.png" style={{objectFit:"cover", width:'10rem', marginLeft:'auto', marginRight:'auto'}}/>

      <h1 className="heading">We are launching <span>soon!</span></h1>
      <h3 className="sub-heading">Subscribe and get notified</h3>

      <form   id="form" onSubmit={this.handleSubmit}>
        <div className="flex-container">
          <div className="form-control">
			<input 
				type="email" 
				name="email" 
				id="email" 
				placeholder="Your email address.." 
				ref={(input) => this.email = input}/>
             <small>Please provide a valid email address</small> 
          </div>
          <input type="submit" id="btn" value="Notify Me" className="button" />
        </div>
      </form>

      <div className="count-wrapper">
        <p className="sub-heading">Elesarr first decentralized crowdfunding application in Nigeria launching on the 20th of March 2020</p>
        <ul className="flex-container">
          <li className="flex-item">
            <div className="days">{days} <span>days</span></div>
          </li>
          <li className="flex-item">
            <div className="hours">{hours}<span>hrs</span></div>
          </li>
          <li className="flex-item">
            <div className="minutes">{minutes}<span>mins</span></div>
          </li>
          <li className="flex-item">
            <div className="seconds">{seconds}<span>secs</span></div>
          </li>
        </ul>
      </div>
    </div>

    <footer>
      <div className="social">
        <a href="#"><i className="fab fa-facebook 3x"></i></a>
        <a href="#"><i className="fab fa-twitter x3"></i></a>
        <a href="#"><i className="fab fa-instagram x3"></i></a>
      </div>
      <small className="attribution">&copy; Copyright <a target="_blank" href="https://aragontech.co/" style={{textDecoration:"none"}}>AragonTech</a>. All rights reserved.</small>
    </footer>

			</Aux>
		);
	}
}

export default withRouter(Countdown);


