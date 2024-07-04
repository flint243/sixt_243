import React, { useState } from "react";
import axios from "axios";

export default function Signin({ onClose }) {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
            try {
                console.log("Sending signin request:", values);
                const res = await axios.post("http://localhost:8002/signin", values);
                console.log("Signin response:", res.data);
                alert("Logged in Successfully!");
                onClose();
            } catch (err) {
                console.log("Signin error:", err);
                if (err.response && err.response.status === 401) {
                    setFormErrors({ general: err.response.data.message });
                } else {
                    setFormErrors({ general: "An error occurred. Please try again later." });
                }
            }
        } else {
            setFormErrors(errors);
        }
    }

    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email address.";
        }

        if (!values.password) {
            errors.password = "Password is required.";
        }

        return errors;
    }

    return (
        <div className="d-flex w-100 vh-100 bg-dark justify-content-center align-items-center position-fixed top-0 start-0">
            <div className="bg-light p-3 rounded w-25 position-relative">
                <button className="btn-close position-absolute top-0 end-0 p-3" onClick={onClose}></button>
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
                        {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
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
                        {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                    </div>
                    {formErrors.general && <p className="text-danger">{formErrors.general}</p>}
                    <button type="submit" className="btn btn-success w-100 rounded-0">Sign In</button>
                </form>
            </div>
        </div>
    );
}
