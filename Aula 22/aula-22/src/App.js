import './App.css';
import Home from './home';
import Comments from './Comments'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/comments">
          <Comments />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
