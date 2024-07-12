import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateRservation = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id, {name, email})
        .then(res => {
            console.log(res);
            alert("Vos modifications ont été bien enregistrés")
            navigate('/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit = {handleSubmit}>
                <h2>Mettre à jour une Réservation</h2>
                <div className='mb-2'>
                    <label htmlFor="">Prénom</label>
                    <input type="text" placeholder='Enter-Name' className='form-control'
                    onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter-Email' className='form-control'
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Confirmer</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateRservation
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const UpdateStudent = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get(`http://localhost:8081/student/`)
//             .then(res => {
//                 const student = res.data;
//                 setName(student.Name);
//                 setEmail(student.Email);
//             })
//             .catch(err => console.log(err));
//     }, [id]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log('Updating student with ID:', id);
//         console.log('Name:', name);
//         console.log('Email:', email);
//         try {
//             const response = await axios.put(`http://localhost:8081/update/` + id, { name, email });
//             console.log('Response:', response.data);
//             if (response.data.affectedRows > 0) {
//                 navigate('/');
//             } else {
//                 console.log('No rows updated');
//             }
//         } catch (error) {
//             console.error('Error updating student:', error);
//         }
//     };

//     return (
//         <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//             <div className='w-50 bg-white rounded p-3'>
//                 <form onSubmit={handleSubmit}>
//                     <h2>Mettre à jour la réservation</h2>
//                     <div className='mb-2'>
//                         <label htmlFor='name'>Nom</label>
//                         <input
//                             type='text'
//                             id='name'
//                             placeholder='Entrez le nom'
//                             className='form-control'
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label htmlFor='email'>Email</label>
//                         <input
//                             type='email'
//                             id='email'
//                             placeholder="'Entrez l\'email'"
//                             className='form-control'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <button className='btn btn-success'>Mettre à jour</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpdateStudent;








