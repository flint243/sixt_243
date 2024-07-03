import React, { useState } from 'react';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../components/auth/firebase';
import '../assets/css/AvisComponent.css'

const AvisComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }

    if (!name.trim() || !message.trim()) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    setError(null);
    setSuccess(false);

    try {
      // Ajouter l'avis à Firestore
      await addDoc(collection(db, 'avis'), {
        name,
        email,
        message,
        timestamp: new Date()
      });

      alert('Avis envoyé avec succès');
      console.log('Avis envoyé avec succès');
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      alert('Échec de l\'envoi de l\'avis');
      console.error('Erreur lors de l\'envoi de l\'avis :', e);
      setError('Erreur lors de l\'envoi de l\'avis. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className='black-cont'>
      <div className='news-container'>
        <h1>Donnez votre avis</h1>
        <p>Nous apprécions vos commentaires et suggestions.</p>
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>Avis envoyé avec succès !</p>}
        <form onSubmit={handleFormSubmit}>
          <input
            className='pt-8'
            type='text'
            placeholder='Entrez votre nom'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='pt-8'
            type='text'
            placeholder='Entrez votre Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className='pt-8 message-area'
            placeholder='Entrez votre message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type='submit'>Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default AvisComponent;
