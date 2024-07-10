import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const CreateStudent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {name, email})
        .then(res => {
            console.log(res);
            navigate('/');

        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit = {handleSubmit}>
                <h2>Ajouter réservation</h2>
                <div className='mb-2'>
                    <label htmlFor="">Prénom</label>
                    <input type="text" placeholder='Entrez votre nom' className='form-control'
                    onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Entrez votre email' className='form-control'
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Soumettre</button>
            </form>
        </div>
    </div>
  )
}

export default CreateStudent