import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Me from './components/Me/Me.js';
import Reports from './components/Reports/Report.js';
import Login from './components/Forms/login.js';
import Register from './components/Forms/register.js';
import Logout from './components/Forms/logout.js';
import Chat from "./components/Chat/Chat.js";

import './App.css';

class App extends Component {

  render() {
      const loggedIn = sessionStorage.getItem('jwtToken') != null;

    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li key="home"><Link to="/">Home</Link></li>
              <li key="reports"><Link to="/reports/">Reports</Link></li>
              <li key="login"><Link to="/login">Login</Link></li>
              <li key="logout"><Link to="/logout">Logout</Link></li>
              <li key="register"><Link to="/register">Register</Link></li>
              <li key="chat"><Link to="/chat">Chat</Link></li>
            </ul>
          </nav>

          <Route exact path="/" component={Me} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
          <Route exact path="/reports/week/:kmom" component={Reports} />
          <Route path="/logout/" component={Logout} />
          <Route exact path="/reports/" component={Reports} />
          <Route path="/chat" component={Chat} />
          <div className="footer">
            <p>Copyright &copy; Wissam Sawah</p>
          </div>
        </div>
      </Router>
    );
}
}

export default App;
