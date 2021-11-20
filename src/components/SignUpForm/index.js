import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert';
import "./styles.css";
import * as UserService from "../../api/UserService";
import { setToken } from "../../utils/tokenService";

const SignupForm = () => {

    let navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async () => {
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            age,
        };

        const res = await UserService.create(newUser);


        //trying to extract a token
        if (res.data.data) {
            if (res.data.data.token) {
                const token = res.data.data.token;
                setToken(token);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setAge("");
                navigate('/');

            } else {
                alert("Server Error");
            }
        }
    };

    return (

        <div className="signup-form">
            <h1>Sign Up Here</h1>
            <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                title="firstName"
                placeholder="First Name"
            />
            <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                title="lastName"
                placeholder="Last Name"
            />
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                title="email"
                placeholder="Email"
            />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                title="password"
                placeholder="Password"
            />
            <input
                type='number'
                onChange={(e) => setAge(e.target.value)}
                value={age}
                title="age"
                placeholder="Age"
            />
            <button className='submit-button' onClick={handleSubmit}>SIGN UP</button>
        </div>
    );
};

export default SignupForm;