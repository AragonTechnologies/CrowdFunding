import React, { Component } from 'react'

import { Link } from "react-router-dom"


export default class ThankYou extends Component{
    render(){

        return(
<div class="jumbotron text-center">
  <h1 class="display-3">Thank You!</h1>
  {/* <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p> */}
  <hr />

  <p class="lead">
    <Link class="btn btn-primary btn-sm" to="/" role="button">
        Continue to homepage</Link>
  </p>
</div>
        )
    }
}