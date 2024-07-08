import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Contactus({ user }) {
    const [values, setValues] = useState({
        name: user ? user.name : "",
        email: user ? user.email : "",
        message: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8002/contactus", values)
            .then(res => {
                console.log("Message sent successfully!", res.data);
                setSuccess("Message sent successfully!");
                setError("");
                setValues({ name: user ? user.name : "", email: user ? user.email : "", message: "" });
            })
            .catch(err => {
                console.error(err);
                setError("Error sending message");
                setSuccess("");
            });
    };

    return (
        <div className="p-3 rounded">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
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
                        disabled={user !== null}
                    />
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
                        disabled={user !== null}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message"><strong>Message</strong></label>
                    <textarea
                        placeholder="Enter Message"
                        name="message"
                        className="form-control rounded-0"
                        value={values.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
                <button type="submit" className="btn btn-success w-100 rounded-0">Send Message</button>
            </form>
        </div>
    );
}
