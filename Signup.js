import React, { useState } from "react";  // Importation des modules React et useState
import axios from "axios";  // Importation de la bibliothèque axios pour les requêtes HTTP
import ReCAPTCHA from "react-google-recaptcha";  // Importation du composant ReCAPTCHA

export default function Signup() {
    // Définition de l'état initial des valeurs du formulaire avec useState
    const [values, setValues] = useState({
        surname: "",  // Champ pour le nom de famille
        name: "",  // Champ pour le prénom
        email: "",  // Champ pour l'email
        phone: "",  // Champ pour le téléphone
        password: "",  // Champ pour le mot de passe
        confirmPassword: ""  // Champ pour la confirmation du mot de passe
    });

    // Définition de l'état pour vérifier si le captcha est validé
    const [captchaVerified, setCaptchaVerified] = useState(false);
    // Définition de l'état pour les erreurs du formulaire
    const [formErrors, setFormErrors] = useState({});

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "name") {
            const formattedName = value.replace(/[^a-zA-Z]/g, "").substring(0, 30);  // Suppression des caractères non alphabétiques et limitation à 30 caractères
            setValues({ ...values, [name]: formattedName.charAt(0).toUpperCase() + formattedName.slice(1) });  // Mise en majuscule de la première lettre
        } else if (name === "surname") {
            const formattedSurname = value.replace(/[^a-zA-Z]/g, "").substring(0, 30).toUpperCase();  // Suppression des caractères non alphabétiques, limitation à 30 caractères et mise en majuscule
            setValues({ ...values, [name]: formattedSurname });
        } else {
            setValues({ ...values, [name]: value });  // Mise à jour de l'état pour les autres champs
        }
    }

    // Fonction pour valider les champs du formulaire
    const validateForm = () => {
        const errors = {};
        const nameRegex = /^[a-zA-Z]{1,30}$/;  // Regex pour valider le prénom
        const surnameRegex = /^[A-Z]{1,30}$/;  // Regex pour valider le nom de famille
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex pour valider l'email
        const phoneRegex = /^[0-9]{10,15}$/;  // Regex pour valider le téléphone

        if (!nameRegex.test(values.name)) {
            errors.name = "Name should contain only letters and be up to 30 characters.";  // Message d'erreur pour le prénom
        }
        if (!surnameRegex.test(values.surname)) {
            errors.surname = "Surname should contain only uppercase letters and be up to 30 characters.";  // Message d'erreur pour le nom de famille
        }
        if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email address.";  // Message d'erreur pour l'email
        }
        if (!phoneRegex.test(values.phone)) {
            errors.phone = "Phone should contain only numbers and be between 10 and 15 digits.";  // Message d'erreur pour le téléphone
        }
        if (values.password !== values.confirmPassword) {
            errors.password = "Passwords do not match.";  // Message d'erreur pour les mots de passe
        }
        if (!captchaVerified) {
            errors.captcha = "Please verify that you are not a robot.";  // Message d'erreur pour le captcha
        }

        return errors;  // Retourne les erreurs trouvées
    }

    // Fonction pour gérer le changement de l'état du captcha
    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);  // Mise à jour de l'état captchaVerified
    }

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();  // Empêche le comportement par défaut du formulaire
        const errors = validateForm();  // Valide le formulaire et récupère les erreurs

        if (Object.keys(errors).length === 0) {  // Si aucune erreur
            axios.post("http://localhost:8002/localxit_dt", values)  // Envoie les données du formulaire au serveur
                .then(res => console.log("Registered Successfully!"))  // Message de succès
                .catch(err => console.log(err));  // Gère les erreurs de la requête
        } else {
            setFormErrors(errors);  // Mise à jour de l'état formErrors
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
                        placeholder="Enter Phone"
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
                        sitekey="6LfgYQgqAAAAAOhlU3w6_fF_w8pcpxauAfwaN14-"  // Clé de site ReCAPTCHA
                        onChange={handleCaptchaChange}  // Fonction appelée lors du changement de l'état du captcha
                    />
                    {formErrors.captcha && <p className="text-danger">{formErrors.captcha}</p>}
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Sign Up</button>
            </form>
        </div>
    );
}
