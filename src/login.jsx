import axios from 'axios';
import Joi from 'joi';
import React, { Component } from 'react'
import SecureLS from 'secure-ls';
import auth from './auth';

let ls = new SecureLS({ encodingType: 'aes' });

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
    }

    validateLoginForm = () => {
        const schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        });

        let state = { ...this.state }
        delete state.error;
        return schema.validate(state, { abortEarly: false });
    }

    sendLoginData = async () => {
        let state = { ...this.state }
        delete state.error;
        let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, state)
        if (data.message === 'success') {
            ls.set('currentUser', data.token)
            auth.logIn(() => {
                this.props.history.replace('/home')
            })

        } else {
            //
        }
    }

    loginFormChange = (e) => {
        let state = { ...this.state };
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    submitLoginForm = (e) => {
        e.preventDefault();
        let validation = this.validateLoginForm();
        if (validation.error) {
            let state = { ...this.state };
            state.error = validation.error;
            this.setState(state)
        } else {
            this.sendLoginData()
        }
    }

    render() {
        return (
            <>
                <h1 className='text-center'>Login Page</h1>
                <form onSubmit={this.submitLoginForm}>

                    <label htmlFor="">Email :</label>
                    <input type="email" name='email' onChange={this.loginFormChange} value={this.state.email} className='form-control mb-2' />

                    <label htmlFor="">Password :</label>
                    <input type="password" name='password' onChange={this.loginFormChange} value={this.state.password} className='form-control mb-2' />

                    <button type="submit" className='btn btn-info mt-2'>Submit</button>
                </form>
            </>
        );
    }
}

export default Login;