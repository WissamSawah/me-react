import React, { Component } from 'react';


class Register extends Component {
    constructor(props) {
       super(props);
       this.state = {
           fields: {},
           errors: {}
       }


    this.emailChange = this.emailChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.passChange = this.passChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateEmail(email) {
        var regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEmail.test(String(email).toLowerCase());
    }

    validateName(name) {
        var regName = /^[a-zA-ZåäöÅÄÖ '!]+$/;
        return regName.test(String(name).toLowerCase());
    }

    validatePass(pass) {
        return pass.length >= 6;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({
            fields
        });
    }

    fieldChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({
            fields
        });
    }

    fieldDateChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.value;
        this.setState({
            fields
        });
    }

    emailChange(field, e) {
        let errors = this.state.errors;

        this.fieldChange(field, e)
        let validEmail = this.validateEmail(e.target.value);

        if (validEmail) {
            let emailValid = "emailValid"
            this.setState({
                emailValid
            });
            errors["emailError"] = "";
            this.setState({
                errors
            });
        } else {
            let emailValid = "emailInvalid"
            this.setState({
                emailValid
            });
            errors["emailError"] = "Invalid Email";
            this.setState({
                errors
            });
        }
    }

    nameChange(field, e) {
        let errors = this.state.errors;

        this.fieldChange(field, e)
        let validName = this.validateName(e.target.value);

        if (validName) {
            let nameValid = "nameValid"
            this.setState({
                nameValid
            });
            errors["nameError"] = "";
            this.setState({
                errors
            });
        } else {
            let nameValid = "nameInvalid"
            this.setState({
                nameValid
            });
            errors["nameError"] = "Ogiltigt Namn";
            this.setState({
                errors
            });
        }
    }

    passChange(field, e) {
        let errors = this.state.errors;

        this.fieldChange(field, e)
        let validField = this.validatePass(e.target.value);

        if (validField) {
            let passValid = "passValid"
            this.setState({
                passValid
            });
            errors["passError"] = "";
            this.setState({
                errors
            });
        } else {
            let passValid = "passInvalid"
            this.setState({
                passValid
            });
            errors["passError"] = "Invalid password";
            this.setState({
                errors
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.errors["passError"]) {
            alert('Password should be 6 charectar or more');
        } else if (this.state.errors["emailError"]) {
            alert('Please enter a valid email');
        } else if (this.state.errors["nameError"]) {
            alert('Please enter a valid name');
        } else {
            const url = "http://me-api.wissamsawah.me/auth/register";
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.fields["name"],
                    email: this.state.fields["email"],
                    password: this.state.fields["pass"]}),
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(response => console.log("success"));
            alert('You have registered a new account!');
            window.location.href="/login";

        }
    }

        render() {
            return (
                <div className="form-register">
                <h2>Register a new user</h2>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    Name: <br/>
                    <input name="names" className={this.state.nameValid} type="text" value={this.state.name} onChange={this.nameChange.bind(this, "name")} />
                    </p><br/><br/>

                    <p>
                    E-mail: <br/>
                    <input name="email" className={this.state.emailValid} type="email" value={this.state.email} onChange={this.emailChange.bind(this, "email")} />
                    </p><br/><br/>

                    <p>
                    Password (at least 6 charctar): <br/>
                    <input name="pass" className={this.state.passValid} type="password" value={this.state.pass} onChange={this.passChange.bind(this, "pass")} />
                    </p><br/><br/>



                    <input type="submit" className="input-submit" value="Register" />
                </form>
                </div>
            );
        }
    }

    export default Register;
