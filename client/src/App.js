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
export default class App extends Component {
  render() {
    return (
      <Router>
      <Aux>
{/* 
        <Preloader /> */}
       <CookieModal />
       <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
            {/* <!-- Brand --> */}
            <Link className="navbar-brand" to="/">
              Elesarr
            </Link>
            {/* <!-- Toggler --> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <!-- Collapse --> */}
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
                {/* <!-- Button --> */}
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
                {/* <!-- Mobile button --> */}
                <div className="d-lg-none text-center">
                    <a 
                    href="https://webpixels.io/themes/quick-website-ui-kit" 
                    className="btn btn-block btn-sm btn-warning">See more details</a>
                </div>
            </div>
        </div>
    </nav>
    <Home />
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
