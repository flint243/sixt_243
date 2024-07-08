import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export default function Signup() {
    const [values, setValues] = useState({
        surname: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [apiError, setApiError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "name") {
            const formattedName = value.replace(/[^a-zA-Z]/g, "").substring(0, 30);
            setValues({ ...values, [name]: formattedName.charAt(0).toUpperCase() + formattedName.slice(1) });
        } else if (name === "surname") {
            const formattedSurname = value.replace(/[^a-zA-Z]/g, "").substring(0, 30).toUpperCase();
            setValues({ ...values, [name]: formattedSurname });
        } else if (name === "phone") {
            // Allow only + and numbers, limit to 12 characters
            const formattedPhone = value.replace(/[^+\d]/g, "").substring(0, 12);
            setValues({ ...values, [name]: formattedPhone });
        } else {
            setValues({ ...values, [name]: value });
        }
    }

    const validateForm = () => {
        const errors = {};
        const nameRegex = /^[a-zA-Z]{1,30}$/;
        const surnameRegex = /^[A-Z]{1,30}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        

        if (!nameRegex.test(values.name)) {
            errors.name = "Name should contain only letters and be up to 30 characters.";
        }
        if (!surnameRegex.test(values.surname)) {
            errors.surname = "Surname should contain only uppercase letters and be up to 30 characters.";
        }
        if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email address.";
        }
        
        if (values.password !== values.confirmPassword) {
            errors.password = "Passwords do not match.";
        }
        if (!captchaVerified) {
            errors.captcha = "Please verify that you are not a robot.";
        }

        return errors;
    }

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
            axios.post("http://localhost:8002/localxit_dt", values)
                .then(res => {
                    console.log("Registered Successfully!");
                    setApiError("");
                })
                .catch(err => {
                    if (err.response && err.response.status === 409) {
                        setApiError("Email or phone number already exists");
                    } else {
                        console.log(err);
                    }
                });
        } else {
            setFormErrors(errors);
        }
    }

    return (
        <div className="p-3 rounded">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="surname"><strong>Surname</strong></label>
                    <input
                        type="text"
                        placeholder="Enter Surname"
                        name="surname"
                        className="form-control rounded-0"
                        value={values.surname}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.surname && <p className="text-danger">{formErrors.surname}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        className="form-control rounded-0"
                        value={values.name}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
                </div>
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
                    <label htmlFor="phone"><strong>Phone</strong></label>
                    <input
                        type="text"
                        placeholder="Enter Phone (+33XXXXXXXXX)"
                        name="phone"
                        className="form-control rounded-0"
                        value={values.phone}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.phone && <p className="text-danger">{formErrors.phone}</p>}
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
                <div className="mb-3">
                    <label htmlFor="confirmPassword"><strong>Confirm Password</strong></label>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="confirmPassword"
                        className="form-control rounded-0"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                </div>
                <div className="mb-3">
                    <ReCAPTCHA
                        sitekey="6LfgYQgqAAAAAOhlU3w6_fF_w8pcpxauAfwaN14-"
                        onChange={handleCaptchaChange}
                    />
                    {formErrors.captcha && <p className="text-danger">{formErrors.captcha}</p>}
                </div>
                {apiError && <p className="text-danger">{apiError}</p>}
                <button type="submit" className="btn btn-success w-100 rounded-0">Sign Up</button>
            </form>
        </div>
    );
}
