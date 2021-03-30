import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import CreatePost from './routes/CreatePost.js';
import Home from './routes/Home.js';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create-post">
          <CreatePost />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
