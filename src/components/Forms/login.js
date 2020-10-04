import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }
        this.fieldComplete = this.fieldComplete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        fieldComplete(field, e) {
            let fields = this.state.fields;
            fields[field] = e.target.value;
            this.setState({
                fields
            });
        }

        handleLoginResponse(response) {
            if (response.hasOwnProperty("data")) {
                sessionStorage.setItem('jwtToken', response.data.token);
                alert('You have logged in!');
                window.location.href="/";
            } else {
                alert('Wrong user information')
            }
        }

    handleSubmit(e) {
        e.preventDefault();
            const url = "https://me-api.wissamsawah.me/auth/login";
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: this.state.fields["email"],
                    password: this.state.fields["pass"]
                }),
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(response => this.handleLoginResponse(response));
        }

    render() {
        return (
            <div className="form-register">
            <h2>Log In</h2>
            <form onSubmit={this.handleSubmit}>
                <p><br/><br/>
                E-mail: <br/>
                <input name="email" className={this.state.emailValid} type="email" value={this.state.email} onChange={this.fieldComplete.bind(this, "email") } />
                </p><br/><br/>

                <p>
                Password: <br/>
                <input name="pass" className={this.state.passValid} type="password" value={this.state.pass} onChange={this.fieldComplete.bind(this, "pass")} />
                </p><br/><br/>

                <input type="submit" className="input-submit" value="Login" />
            </form>
            </div>
        );
    }
}

export default Login;
