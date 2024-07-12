import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // Importer Slider de react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ChooseComponent from './ChooseComponent';

export default function Templates() {
  const [popupData, setPopupData] = useState({ 
    title: '', 
    image: '', 
    marque: '', 
    type: '', 
    boite: '', 
    carburant: '', 
    prix: '',
    id_Agence: '',
    nom_Agence: ''  // Add nom_Agence to state
  });
  const [vehicles, setVehicles] = useState([]);
  const [filters, setFilters] = useState({
    marque: '',
    boite: '',
    type: ''
  });

  useEffect(() => {
    // Appel de la fonction pour récupérer les véhicules depuis l'API au montage du composant
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      // Requête pour obtenir les données des véhicules
      const response = await axios.get('http://localhost:8002/site_location/vehicules');
      setVehicles(response.data.data);
    } catch (error) {
      // Gestion des erreurs
      console.error('Error fetching vehicles data:', error);
    }
  };

  const openPopup = async (vehicle) => {
    // Mise à jour des données du popup avec les informations du véhicule sélectionné
    setPopupData({ 
        title: vehicle.modele_Vehicules, 
        image: vehicle.image_Vehicules,
        marque: vehicle.marque_Vehicules,
        type: vehicle.type_Vehicules,
        boite: vehicle.boite_Vehicules,
        carburant: vehicle.carburant_Vehicules,
        prix: vehicle.prix_Vehicules,
        id_Agence: vehicle.id_Agence
    });
    try {
        const response = await axios.get(`http://localhost:8002/site_location/agence/${vehicle.id_Agence}`);
        setPopupData(prevState => ({
            ...prevState,
            nom_Agence: response.data.agency.nom_Agence
        }));
    } catch (error) {
        console.error('Error fetching agency details:', error);
    }
    // Affichage du modal
    const modal = new window.bootstrap.Modal(document.getElementById('carPopup'));
    modal.show();
  };

  const handleFilterChange = (e) => {
    // Mise à jour des filtres en fonction de l'option sélectionnée
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredVehicles = vehicles.filter(vehicle =>
    // Filtrage des véhicules en fonction des filtres sélectionnés
    (filters.marque === '' || vehicle.marque_Vehicules === filters.marque) &&
    (filters.boite === '' || vehicle.boite_Vehicules === filters.boite) &&
    (filters.type === '' || vehicle.type_Vehicules === filters.type)
  );

  return (
    <>
      <section className="banner_main">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-12">
              <div className="text-bg">
                <h1>Trouvez la meilleure voiture ici À louer</h1>
                <strong>Gratuit Multifonctionnel Adaptatif</strong>
                <p>Roulez librement avec nos offres de location de voiture personnalisées - votre aventure commence ici !</p>
                <a href="#">Lire Plus</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChooseComponent />

      <div className="car">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>VARIÉTÉ DE VOITURES</h2>
                <span>Découvrez notre vaste sélection de voitures pour tous vos besoins - de la citadine économique au SUV spacieux, nous avons le véhicule parfait pour vous !</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              {/* Filtre par marque */}
              <select name="marque" value={filters.marque} onChange={handleFilterChange}>
                <option value="">Toutes les marques</option>
                <option value="Citroen">Citroen</option>
                <option value="Renault">Renault</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Mercedes">Mercedes</option>
              </select>
            </div>
            <div className="col-md-4">
              {/* Filtre par boîte de vitesses */}
              <select name="boite" value={filters.boite} onChange={handleFilterChange}>
                <option value="">Toutes les boîtes</option>
                <option value="automatique">Automatique</option>
                <option value="manuel">Manuel</option>
              </select>
            </div>
            <div className="col-md-4">
              {/* Filtre par type de véhicule */}
              <select name="type" value={filters.type} onChange={handleFilterChange}>
                <option value="">Tous les types</option>
                <option value="citadine">Citadine</option>
                <option value="utilitaire">Utilitaire</option>
              </select>
            </div>
          </div>

          <div className="row" id='vehicles'>
            {/* Affichage des véhicules filtrés */}
            {filteredVehicles.map((vehicle, index) => (
              <div className="col-md-4 padding_leri" key={index}>
                <div className="car_box">
                  <figure><img src={vehicle.image_Vehicules} alt={vehicle.modele_Vehicules} /></figure>
                  <h3 onClick={() => openPopup(vehicle)}>{vehicle.modele_Vehicules}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Composant du modal avec le slider */}
      <ModalComponent popupData={popupData} vehicles={filteredVehicles} />
    </>
  );
}

const ModalComponent = ({ popupData, vehicles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Mise à jour de l'index actuel en fonction du véhicule sélectionné
    const index = vehicles.findIndex(vehicle => vehicle.modele_Vehicules === popupData.title);
    setCurrentIndex(index !== -1 ? index : 0);
  }, [popupData, vehicles]);

  const settings = {
    dots: true, // Affichage des points de navigation
    infinite: true, // Défilement infini
    speed: 500, // Vitesse de défilement
    slidesToShow: 1, // Nombre de slides à afficher en même temps
    slidesToScroll: 1, // Nombre de slides à défiler en même temps
    initialSlide: currentIndex, // Slide initial
    beforeChange: (current, next) => setCurrentIndex(next) // Mise à jour de l'index avant le changement de slide
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
                  <p>Agence: {popupData.nom_Agence}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
