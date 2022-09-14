import React from "react";
import { useState } from "react";
import axios from 'axios';

const RegisterForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://127.0.0.1:5000/users/register', { username, password, email})
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return (
        <div className="register-form-container">
            <form onSubmit={handleSubmit} className="register-form">
                <label>Username: </label>
                <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password: </label>
                <input type="text" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Email: </label>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>)
}

export default RegisterForm;