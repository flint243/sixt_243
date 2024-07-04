import React, { useState } from "react";  // Importation de React et du hook useState
import Signup from "./Signup";  // Importation du composant Signup (s'assurer que le chemin est correct)
import Signin from "./Signin";  // Importation du composant Signin (s'assurer que le chemin est correct)

export default function Navbar() {
    // Définition de l'état initial pour contrôler l'affichage des modales Signup et Signin
    const [showSignup, setShowSignup] = useState(false);
    const [showSignin, setShowSignin] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 w-100">
                <h1 className="text-left">Sixit</h1>  {/* Titre de la navbar */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>  {/* Bouton pour toggler la navbar sur les petits écrans */}
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link btn btn-link mr-3" href="index.html">Home</a>  {/* Lien vers la page d'accueil */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-link mr-3" href="#">About</a>  {/* Lien vers la page "About" */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-link mr-3" href="#">Contact us</a>  {/* Lien vers la page "Contact us" */}
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link mr-3" onClick={() => setShowSignup(true)}>Sign up</button>  {/* Bouton pour ouvrir la modale d'inscription */}
                        </li>
                    </ul>
                    <div className="sign_btn">
                        <button className="nav-link btn btn-primary" onClick={() => setShowSignin(true)}>Sign in</button>  {/* Bouton pour ouvrir la modale de connexion */}
                    </div>
                </div>
            </nav>

            {/* Modale d'inscription */}
            {showSignup && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>
                                <button type="button" className="close" onClick={() => setShowSignup(false)}>  {/* Bouton pour fermer la modale */}
                                    <span>&times;</span>  {/* Symbole de fermeture */}
                                </button>
                            </div>
                            <div className="modal-body">
                                <Signup />  {/* Inclusion du composant Signup */}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modale de connexion */}
            {showSignin && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign In</h5>
                                <button type="button" className="close" onClick={() => setShowSignin(false)}>  {/* Bouton pour fermer la modale */}
                                    <span>&times;</span>  {/* Symbole de fermeture */}
                                </button>
                            </div>
                            <div className="modal-body">
                                <Signin />  {/* Inclusion du composant Signin */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
