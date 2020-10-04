import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ShowReport from './ShowReport.js';
import NewReport from './NewReport.js';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: []
        }
        this.getWeeks()
    }

    getWeeks() {
        const url = "https://me-api.wissamsawah.me/reports/get-weeknumbers";
        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(response => this.showNavbar(response));
    }

    showNavbar(response) {
        this.setState({
            reports: response.data
        })
    }

  render() {
      const weeks = this.state.reports.map(function(item) {
          return <li key={item.week}><Link to={`/reports/week/${item.week}`}>Week 0{item.week}</Link></li>
      })

    return (
      <Router>
        <div className="ReportNav">
            <ul className="addNav">
            <li key="add"><Link to="/reports/add-report">Add a new report</Link></li>
            <br />
            <br />
                {weeks}
            </ul>
            <Route strict path="/reports/week/:number" component={ShowReport} />
            <Route exact path="/reports/add-report" component={NewReport} />
        </div>
      </Router>
    );
  }
}

export default Navbar;
