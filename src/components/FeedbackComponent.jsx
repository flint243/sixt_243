// import React from 'react'
// import '../assets/css/style.css'
// import '../assets/css/FeedbackComponent.css'
// import cross from '../assets/images/cross_img.png';
// import te1 from '../assets/images/te1.png';


// const FeedbackComponent = () => {
//   return (
//     <>
//         <div className="cutomer">
//          <div className="container">
//             <div className="row">
//                <div className="col-md-12">
//                   <div className="titlepage">
//                      <h2>Ce que disent nos clients</h2>
//                   </div>
//                </div>
//             </div>
//             <div className="row">
//                <div className="col-md-12">
//                   <div id="myCarousel" className="carousel slide cutomer_Carousel " data-ride="carousel">
//                      <ol className="carousel-indicators">
//                         <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//                         <li data-target="#myCarousel" data-slide-to="1"></li>
//                         <li data-target="#myCarousel" data-slide-to="2"></li>
//                      </ol>
//                      <div className="carousel-inner">
//                         <div className="carousel-item active">
//                            <div className="container">
//                               <div className="carousel-caption ">
//                                  <div className="cross_img">
//                                     <figure><img src={cross} alt="#"/></figure>
//                                  </div>
//                                  <div className="our cross_layout">
//                                     <div className="test_box">
//                                        <h4>Marie D</h4>
//                                        <p>J'ai loué une voiture pour un week-end à la campagne et l'expérience a été fantastique. Le processus de réservation était simple et rapide, et le véhicule était en parfait état. Le service client était très réactif et sympathique. Je recommande vivement !</p>
//                                        <i><img src={te1} alt="#"/></i>
//                                     </div>
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                         <div className="carousel-item">
//                            <div className="container">
//                               <div className="carousel-caption">
//                                  <div className="cross_img">
//                                     <figure><img src={cross} alt="#"/></figure>
//                                  </div>
//                                  <div className="our cross_layout">
//                                     <div className="test_box">
//                                        <h4>Ahmed K</h4>
//                                        <p>Je suis très satisfait de ma location. Le choix de voitures est excellent, et j'ai trouvé exactement ce dont j'avais besoin pour mon voyage d'affaires. Les prix sont compétitifs et transparents, sans frais cachés. Je reviendrai certainement pour mes prochaines locations.</p>
//                                        <i><img src={te1} alt="#"/></i>
//                                     </div>
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                         <div className="carousel-item">
//                            <div className="container">
//                               <div className="carousel-caption">
//                                  <div className="cross_img">
//                                     <figure><img src={cross} alt="#"/></figure>
//                                  </div>
//                                  <div className="our cross_layout">
//                                     <div className="test_box">
//                                        <h4>Laura S</h4>
//                                        <p>Excellente expérience de location ! Le véhicule était propre et bien entretenu, et le personnel était professionnel et serviable. J'ai particulièrement apprécié les offres spéciales qui m'ont permis de faire des économies. Merci pour ce service de qualité !</p>
//                                        <i><img src={te1} alt="#"/></i>
//                                     </div>
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
//                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                      <span className="sr-only">Previous</span>
//                      </a>
//                      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
//                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                      <span className="sr-only">Next</span>
//                      </a>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//     </>
//   )
// }

// export default FeedbackComponent

import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../components/auth/firebase';
import '../assets/css/style.css';
import '../assets/css/FeedbackComponent.css';
import cross from '../assets/images/cross_img.png';
import te1 from '../assets/images/te1.png';

const FeedbackComponent = () => {
  const [avis, setAvis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch reviews from Firestore
  const fetchAvis = async () => {
    try {
      const q = query(collection(db, 'avis'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const avisList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAvis(avisList);
      setLoading(false);
    } catch (e) {
      console.error('Erreur lors de la récupération des avis :', e);
      setError('Erreur lors de la récupération des avis.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvis();
  }, []);

  if (loading) {
    return <p>Chargement des avis...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="cutomer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Ce que disent nos clients</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="myCarousel" className="carousel slide cutomer_Carousel " data-ride="carousel">
              <ol className="carousel-indicators">
                {avis.map((_, index) => (
                  <li key={index} data-target="#myCarousel" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
              </ol>
              <div className="carousel-inner">
                {avis.map((av, index) => (
                  <div key={av.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="container">
                      <div className="carousel-caption">
                        <div className="cross_img">
                          <figure><img src={cross} alt="#" /></figure>
                        </div>
                        <div className="our cross_layout">
                          <div className="test_box">
                            <h4>{av.name}</h4>
                            <p>{av.message}</p>
                            <i><img src={te1} alt="#" /></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackComponent;
