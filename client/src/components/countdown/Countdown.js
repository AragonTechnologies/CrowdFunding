import React, { Component } from 'react';
import moment from "moment";

import axios from 'axios';

import { withRouter } from 'react-router-dom';



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
            const then = moment('21/03/2020', 'DD/MM/YYYY');
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

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

		 console.log(email)
		 
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
		<div 
                className="bg-img1 overlay1 size1 flex-w flex-c-m p-t-55 p-b-55 p-l-15 p-r-15" 
                style={{ backgroundImage: "url('images/bg01.jpg')" }}>
		<div className="wsize1">
			<p className="txt-center p-b-23">
				<i className="zmdi zmdi-card-giftcard cl0 fs-60"></i>
			</p>

			<h3 className="l1-txt1 txt-center p-b-22">
				Coming Soon
			</h3>

			<p className="txt-center m2-txt1 p-b-67">
				Elesarr first decentralized crowdfunding application in Nigeria launching on the 20th of March 2020 
			</p>

			<div className="flex-w flex-sa-m cd100 bor1 p-t-42 p-b-22 p-l-50 p-r-50 respon1">
				<div className="flex-col-c-m wsize2 m-b-20">
		<span className="l1-txt2 p-b-4 days">{days}</span>
					<span className="m2-txt2">Days</span>
				</div>

				<span className="l1-txt2 p-b-22">:</span>
				
				<div className="flex-col-c-m wsize2 m-b-20">
		<span className="l1-txt2 p-b-4 hours">{hours}</span>
					<span className="m2-txt2">Hours</span>
				</div>

				<span className="l1-txt2 p-b-22 respon2">:</span>

				<div className="flex-col-c-m wsize2 m-b-20">
		<span className="l1-txt2 p-b-4 minutes">{minutes}</span>
					<span className="m2-txt2">Minutes</span>
				</div>

				<span className="l1-txt2 p-b-22">:</span>

				<div className="flex-col-c-m wsize2 m-b-20">
		<span className="l1-txt2 p-b-4 seconds">{seconds}</span>
					<span className="m2-txt2">Seconds</span>
				</div>
			</div>

			<form
					 className="flex-w flex-c-m contact100-form validate-form p-t-70"
					 onSubmit={this.handleSubmit}
					 >
				<div className="wrap-input100 validate-input where1" data-validate = "Email is required: ex@abc.xyz">
                    <input 
                        className="s1-txt1 placeholder0 input100" 
                        type="text" name="email" placeholder="Email Address" 
						ref ={(input) => {this.email = input}}
						required
						/>
					<span className="focus-input100"></span>
				</div>
				<button type="submit"  className="flex-c-m s1-txt1 size2 how-btn trans-04 where1">
					Notify Me
				</button>
			</form>			
		</div>
	</div>
		);
	}
}

export default withRouter(Countdown);


