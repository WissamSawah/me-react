import React, { Component } from 'react';


class ShowReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report: []
        }
        this.getReports();
    }

    getReports() {
        let number = this.props.match.params.number;
        const url = `http://me-api.wissamsawah.me/reports/week/${number}`;

        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(response => this.saveReportData(response));
    }

    saveReportData(response) {
        this.setState({
            report: response.data
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.number !== prevProps.match.params.number) {
            this.getReports();
        }
    }

    render() {
        let button;
        const loggedIn = sessionStorage.getItem('jwtToken') != null;

        const myReport = this.state.report.map(function(item) {
            return <div key={item.weeknumber} className="reports"><h1>{item.title}</h1>
            <p dangerouslySetInnerHTML={{__html: item.description}} /></div>
        })
        return (

            <div className="reports">
                {myReport}
            </div>
        );
    }
}

export default ShowReport;
