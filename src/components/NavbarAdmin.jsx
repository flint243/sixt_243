import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Contactus from "./Contactus";

export default function Navbar({ user, onSignIn, onSignOut }) {
    const [showSignup, setShowSignup] = useState(false);
    const [showSignin, setShowSignin] = useState(false);
    const [showContactus, setShowContactus] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 w-100">
                <h1 className="text-left">Sixit</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link btn btn-link mr-3" href="/">Reservation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-link mr-3" href="/avis">Avis</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {showSignup && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>
                                <button type="button" className="close" onClick={() => setShowSignup(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Signup />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showSignin && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign In</h5>
                                <button type="button" className="close" onClick={() => setShowSignin(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Signin onSignIn={onSignIn} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showContactus && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contact Us</h5>
                                <button type="button" className="close" onClick={() => setShowContactus(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Contactus user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}