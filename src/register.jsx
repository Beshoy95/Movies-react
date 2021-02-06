import Joi from 'joi';
import React, { Component } from 'react'
import axios from 'axios';

class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        age: '',
        email: '',
        password: '',
        error: '',
    }

    componentDidMount() {

    }

    validateRegisterForm = () => {
        const schema = Joi.object({
            first_name: Joi.string().min(3).max(20).required(),
            last_name: Joi.string().min(3).max(20).required(),
            age: Joi.number().min(12).max(80).required(),
            email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        });

        let state = { ...this.state }
        delete state.error;
        return schema.validate(state, { abortEarly: false });

    }

    sendRegisterData = async () => {
        let state = { ...this.state }
        delete state.error;
        let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, state)
        if (data.message === 'success') {
           this.props.history.replace('/login')
        } else {

        }
    }

    registerFormChange = (e) => {
        let state = { ...this.state };
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    submitRegisterForm = (e) => {
        e.preventDefault();
        let validation = this.validateRegisterForm();
        if (validation.error) {
            let state = { ...this.state };
            state.error = validation.error;
            this.setState(state)
        } else {
            this.sendRegisterData()
        }
    }

    render() {
        return (<>
            <h1 className='text-center'>Registration Page</h1>
            {this.state.error && <div className="alert alert-danger">{this.state.error.message}</div>}

            <form onSubmit={this.submitRegisterForm}>
                <label htmlFor="">FirstName :</label>
                <input type="text" name='first_name' onChange={this.registerFormChange} value={this.state.first_name} className='form-control mb-2' />

                <label htmlFor="">LastName :</label>
                <input type="text" name='last_name' onChange={this.registerFormChange} value={this.state.last_name} className='form-control mb-2' />

                <label htmlFor="">Age :</label>
                <input type="number" name='age' onChange={this.registerFormChange} value={this.state.age} className='form-control mb-2' />

                <label htmlFor="">Email :</label>
                <input type="email" name='email' onChange={this.registerFormChange} value={this.state.email} className='form-control mb-2' />

                <label htmlFor="">Password :</label>
                <input type="password" name='password' onChange={this.registerFormChange} value={this.state.password} className='form-control mb-2' />

                <button type="submit" className='btn btn-info mt-2'>Submit</button>
            </form>
        </>);
    }
}

export default Register;