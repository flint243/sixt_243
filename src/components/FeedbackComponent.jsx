// import React, { useState, useEffect } from 'react';
// import { collection, getDocs, query, orderBy, addDoc } from 'firebase/firestore';
// import { db } from '../components/auth/firebase';
// import { Modal, Button, Form } from 'react-bootstrap';
// import '../assets/css/style.css';
// import '../assets/css/FeedbackComponent.css';
// import cross from '../assets/images/cross_img.png';
// import te1 from '../assets/images/te1.png';
// import '../assets/css/FeedbackComponent.css'


// const FeedbackComponent = () => {
//   const [avis, setAvis] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [formError, setFormError] = useState(null);
//   const [formSuccess, setFormSuccess] = useState(false);

//   // Function to fetch reviews from Firestore
//   const fetchAvis = async () => {
//     try {
//       const q = query(collection(db, 'avis'), orderBy('timestamp', 'desc'));
//       const querySnapshot = await getDocs(q);
//       const avisList = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setAvis(avisList);
//       setLoading(false);
//     } catch (e) {
//       console.error('Erreur lors de la récupération des avis :', e);
//       setError('Erreur lors de la récupération des avis.');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAvis();
//   }, []);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email)) {
//       setFormError('Veuillez entrer une adresse email valide.');
//       return;
//     }

//     if (!name.trim() || !message.trim()) {
//       setFormError('Veuillez remplir tous les champs.');
//       return;
//     }

//     setFormError(null);
//     setFormSuccess(false);

//     try {
//       // Ajouter l'avis à Firestore
//       await addDoc(collection(db, 'avis'), {
//         name,
//         email,
//         message,
//         timestamp: new Date()
//       });
//       alert('Avis envoyé avec succès');
//       setFormSuccess(true);
//       setName('');
//       setEmail('');
//       setMessage('');
//       setShowModal(false);
//     } catch (e) {
//       console.error('Erreur lors de l\'envoi de l\'avis :', e);
//       setFormError('Erreur lors de l\'envoi de l\'avis. Veuillez réessayer plus tard.');
//     }
//   };

//   if (loading) {
//     return <p>Chargement des avis...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="cutomer">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="titlepage">
//               <h2>Ce que disent nos clients</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <div id="myCarousel" className="carousel slide cutomer_Carousel" data-ride="carousel">
//               <ol className="carousel-indicators">
//                 {avis.map((_, index) => (
//                   <li key={index} data-target="#myCarousel" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
//                 ))}
//               </ol>
//               <div className="carousel-inner">
//                 {avis.map((av, index) => (
//                   <div key={av.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//                     <div className="container">
//                       <div className="carousel-caption">
//                         <div className="cross_img">
//                           {/* Image croix */}
//                         </div>
//                         <div className="our cross_layout">
//                           <div className="test_box">
//                             <h4>{av.name}</h4>
//                             <p>{av.message}</p>
//                             <i><img src={te1} alt="#" /></i>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Previous</span>
//               </a>
//               <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Next</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12 text-center mt-4">
//             <Button 
//               className="btn btn-primary mt-5"
//               style={{ backgroundColor: '#f6d601', color: '#ffffff', padding: '1rem', border: 'none' }}
//               onClick={() => setShowModal(true)}
//             >
//               Donner votre avis
//             </Button>
//           </div>
//         </div>
//       </div>
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Donnez votre avis</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {formError && <p className='text-danger'>{formError}</p>}
//           {formSuccess && <p className='text-success'>Avis envoyé avec succès !</p>}
//           <Form onSubmit={handleFormSubmit} >
//             <Form.Group controlId="formName" className=' mb-4'>
//               <Form.Label>Nom</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="Entrez votre nom" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmail" className=' mb-4'>
//               <Form.Label>Email</Form.Label>
//               <Form.Control 
//                 type="email" 
//                 placeholder="Entrez votre email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//               />
//             </Form.Group>
//             <Form.Group controlId="formMessage" className=' mb-4'>
//               <Form.Label>Message</Form.Label>
//               <Form.Control 
//                 as="textarea" 
//                 rows={3} 
//                 placeholder="Entrez votre message" 
//                 value={message} 
//                 onChange={(e) => setMessage(e.target.value)} 
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Envoyer
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default FeedbackComponent;

import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, addDoc } from 'firebase/firestore';
import { db } from '../components/auth/firebase';
import { Modal, Button, Form } from 'react-bootstrap';
import '../assets/css/style.css';
import '../assets/css/FeedbackComponent.css';
import cross from '../assets/images/cross_img.png';
import te1 from '../assets/images/te1.png';
import '../assets/css/FeedbackComponent.css';

const FeedbackComponent = () => {
  const [avis, setAvis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setFormError('Veuillez entrer une adresse email valide.');
      return;
    }

    if (!name.trim() || !message.trim()) {
      setFormError('Veuillez remplir tous les champs.');
      return;
    }

    setFormError(null);
    setFormSuccess(false);

    try {
      // Ajouter l'avis à Firestore
      await addDoc(collection(db, 'avis'), {
        name,
        email,
        message,
        timestamp: new Date()
      });
      alert('Avis envoyé avec succès');
      setFormSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setShowModal(false);
    } catch (e) {
      console.error('Erreur lors de l\'envoi de l\'avis :', e);
      setFormError('Erreur lors de l\'envoi de l\'avis. Veuillez réessayer plus tard.');
    }
  };

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
            <div id="myCarousel" className="carousel slide cutomer_Carousel" data-ride="carousel">
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
                          {/* Image croix */}
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
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <Button 
              className="btn btn-primary mt-5"
              style={{ backgroundColor: '#f6d601', color: '#ffffff', padding: '1rem', border: 'none' }}
              onClick={() => setShowModal(true)}
            >
              Donner votre avis
            </Button>
          </div>
        </div>
      </div>
      <Modal className="custom-modal" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Donnez votre avis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formError && <p className='text-danger'>{formError}</p>}
          {formSuccess && <p className='text-success'>Avis envoyé avec succès !</p>}
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName" className='mb-4'>
              <Form.Label>Nom</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Entrez votre nom" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className='mb-4'>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Entrez votre email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className='mb-4'>
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Entrez votre message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Envoyer
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FeedbackComponent;
