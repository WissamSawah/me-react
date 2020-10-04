import React, { Component } from 'react';


class NewReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }

        let token = sessionStorage.getItem('jwtToken')
        if (token == null) {
            window.location.href="/login";
        }

        this.fieldComplete = this.fieldComplete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAddResponse(response) {
        if (response.hasOwnProperty("data")) {
            window.location.href="/reports";
        }
    }

    fieldComplete(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({
            fields
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.fields);
            const url = "https://me-api.wissamsawah.me/reports/add-reports";
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    week: this.state.fields["week"],
                    title: this.state.fields["title"],
                    description: this.state.fields["description"]
                }),
                headers: {'Content-Type': 'application/json', 'x-access-token': sessionStorage.getItem('jwtToken')}
            })
            .then(res => res.json())
            .then(response => this.handleAddResponse(response));
        }

    render() {
        return (
            <div className="Form1">
            <h2>Create a new report</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                Week Number: <br/>
                <input name="week" className={this.state.week} type="number" value={this.state.week} onChange={this.fieldComplete.bind(this, "week")} />
                </label><br/>

                <label>
                Titel: <br/>
                <input name="title" className={this.state.title} type="text" value={this.state.title} onChange={this.fieldComplete.bind(this, "title")} />
                </label><br/>

                <label>
                Description: <br/>
                <textarea rows="25" cols="60" name="description" className={this.state.description} type="text" value={this.state.description} onChange={this.fieldComplete.bind(this, "description")} />
                </label><br/>

                <input type="submit" className="input-submit" value="Add new report" />
            </form>
            </div>
        );
    }
}

export default NewReport;
