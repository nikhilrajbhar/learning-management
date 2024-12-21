import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const login = () => {
    const [email, setEmail] = useState('nikhil@gmail.com')
    const [password, setPassword] = useState('hello123')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting');
        console.log(password, email);
        axios.post("http://localhost:3000/api/auth/login", {
            password,
            email
        })
            .then((response) => { console.log(response) })
            .catch((error) => console.error(error))
    }

    return (
        <div className='form-container'>
            <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Login Form</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default login
