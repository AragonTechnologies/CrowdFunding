import React, { Component } from 'react'

import { Link } from "react-router-dom"
import Aux from "../hoc/aux"

export default class ThankYou extends Component{
    render(){

        return(
          <Aux>
          <section class="flex-container thanks">
          <h1>THANK YOU!</h1>
          <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
          <Link to="/">Continue to Home</Link>
          <a 
          href="https://t.me/joinchat/MgHjcBilXKj1W1p0qi9Z8A"
          target="_blank">Join Our Telegram Group</a>
        </section>
        
        <footer>
          <div class="social">
            <a href="https://www.facebook.com/100003719094788/posts/1839439092856709/?app=fbl" target="_blank">
              <i class="fab fa-facebook 3x"></i></a>
            <a href="#"><i class="fab fa-twitter x3"></i></a>
            <a 
              href="https://t.me/joinchat/MgHjcBilXKj1W1p0qi9Z8A"
              target="_blank"><i class="fab fa-telegram x3"></i></a>
          </div>
          <small className="attribution">&copy; Copyright <a target="_blank" href="https://aragontech.co/" style={{textDecoration:"none"}}>AragonTech</a>. All rights reserved.</small>
        </footer>
        </Aux>
        )
    }
}