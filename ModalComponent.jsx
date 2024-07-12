import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ModalComponent({ popupData, vehicles }) {
    const [agencyDetails, setAgencyDetails] = useState(null);

    useEffect(() => {
        if (popupData && popupData.id_Agence) {
            fetchAgencyDetails(popupData.id_Agence);
        }
    }, [popupData]);

    const fetchAgencyDetails = async (id_Agence) => {
        try {
            const response = await axios.get(`http://localhost:8002/site_location/agence/:id_Agence`);
            setAgencyDetails(response.data.agency);
        } catch (error) {
            console.error('Error fetching agency details:', error);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="modal fade" id="carPopup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{popupData.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
    <Slider {...settings}>
        {vehicles.length > 0 && vehicles.map((vehicle, index) => (
            <div key={index}>
                <figure><img src={vehicle.image_Vehicules} alt={vehicle.modele_Vehicules} /></figure>
                <h3>{vehicle.modele_Vehicules}</h3>
                <p>Marque: {vehicle.marque_Vehicules}</p>
                <p>Type: {vehicle.type_Vehicules}</p>
                <p>Boîte: {vehicle.boite_Vehicules}</p>
                <p>Carburant: {vehicle.carburant_Vehicules}</p>
                <p>Prix: {vehicle.prix_Vehicules} €/jour</p>
                {/* Affichage des informations de l'agence */}
                {vehicle.id_Agence && (
                    <>
                        <p>Agence: {vehicle.nom_Agence}</p>
                        <button onClick={() => fetchAgencyDetails(vehicle.id_Agence)}>Voir détails de l'agence</button>
                        {agencyDetails && (
                            <div className="agency-details">
                                <h4>{agencyDetails.nom_Agence}</h4>
                                <p>Adresse: {agencyDetails.adresse_Agence}</p>
                                <p>Téléphone: {agencyDetails.telephone_Agence}</p>
                                <p>Email: {agencyDetails.email_Agence}</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        ))}
    </Slider>
</div>

                </div>
            </div>
        </div>
    );
}
