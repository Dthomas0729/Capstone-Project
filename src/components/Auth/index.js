import React, { useState } from "react";
import * as UserService from "../../api/UserService";
import { setToken } from "../../utils/tokenService";
import './styles.css';

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const user = {
            email,
            password,
        };

        const res = await UserService.login(user);
        if (res.data.data) {
            const token = res.data.data.token;
            console.log("FROM AUTH FORM: ", token);
            setToken(token);
            setEmail("");
            setPassword("");
            // history.push("/");

            //PAGE NEEDS TO RELOAD TO SEE NAV LINKS CHANGE
            window.location = '/'; 
        } else {
            alert("Server Error");
        }
    };
    
    
    
    return (
        <div className='sign-in-form'>
            <h1>Sign In</h1>

            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email"/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password"/>
            <button className='login-button' onClick={handleSubmit}>login</button>
            <p className="message">Not registered? <a href="/signup">Create an account</a></p>
        </div>
    )
}

export default Auth
