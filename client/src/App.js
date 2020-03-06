import React, { Component } from 'react';
import Aux from "./hoc/aux.js"
// import Preloader from "./components/home/Preloader"
import { 
  Link,
  Route,
  Switch, 
  BrowserRouter as Router } from "react-router-dom"

import CookieModal from "./components/home/CookieModal"
import Home from "./components/home/Home"
import Count from "./components/countdown/Countdown2"
import ThankYou from "./views/thank"
export default class App extends Component {
  render() {
    return (
      <Router>
      <Aux>
      <Switch>
              <Route path="/thanks">
                <ThankYou />
              </Route>
              <Route exact path="/">
              <Count />
      </Route>


            </Switch>

       {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
            <Link className="navbar-brand" to="/">             
               <img src="Web2.png" style={{height:'8rem'}}/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mt-4 mt-lg-0 ml-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item dropdown dropdown-animate" data-toggle="hover">
                        <Link className="nav-link" to="/signup" role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">Signup</Link>
                    </li>
                </ul>
                <Link 
                  className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3" 
                  to="/projects">
                     Discover
                </Link>
                <Link 
                  className="navbar-btn btn btn-sm btn-warning d-none d-lg-inline-block" 
                  to="/create" target="_blank">
                    Start A Campaigne
                </Link>
                <div className="d-lg-none text-center">
                    <a 
                    href="#" 
                    className="btn btn-block btn-sm btn-warning">See more details</a>
                </div>
            </div>
        </div>
    </nav> */}
    {/* <Home /> */}
      </Aux>
      </Router>
    );
  }
}
// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


{/* <Router>
        <Switch>
              <Route path="/thanks">
                <ThankYou />
              </Route>
              <Route exact path="/">
              <Countdown />
      </Route>

              
            </Switch>

            </Router> */}
