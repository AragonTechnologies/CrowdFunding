import React, { Component } from 'react';
import Countdown from "./components/countdown/Countdown"
import Aux from "./hoc/aux.js"
import ThankYou from './views/thank';

import { Route,Switch, BrowserRouter as Router } from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <Aux>
      
<Router>
        <Switch>
              <Route path="/thanks">
                <ThankYou />
              </Route>
              <Route exact path="/">
              <Countdown />
      </Route>

              
            </Switch>

            </Router>

      </Aux>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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
