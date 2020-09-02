import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './Me.js';
import Report from './Report.js';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reports/week/1">Week 1</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Me} />
      <Route path="/reports/:week/1" component={Report} />
      <div className="footer">
            <p>Copyright &copy; Wissam Sawah</p>
          </div>
    </div>
  </Router>
);

export default App;
