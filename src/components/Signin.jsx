import React, { useState } from "react";
import axios from "axios";

export default function Signin({ onSignIn }) {
    const [values, setValues] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8002/signin", values)
            .then(res => {
                console.log("Logged in successfully!", res.data);
                onSignIn(res.data.client); // Passe les informations de l'utilisateur connecté à la fonction onSignIn
                setError("");
            })
            .catch(err => {
                console.error(err);
                setError("Invalid email or password");
            });
    };

    return (
        <div className="p-3 rounded">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        className="form-control rounded-0"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="form-control rounded-0"
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-success w-100 rounded-0">Sign In</button>
            </form>
        </div>
    );
}