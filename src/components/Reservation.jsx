// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Reservation = () => {
//     const [reservation, setReservation] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:8081/")
//             .then(res => setReservation(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete('http://localhost:8081/reservation/' + id);
//             window.location.reload();
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
//             <div className='w-50 bg-white rounded p-3'>
//                 <Link to="/create" className='btn btn-success mb-3'>Ajouter +</Link>
//                 <table className='table'>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Prénom</th>
//                             <th>Email</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             reservation.map((data, i) => (
//                                 <tr key={i}>
//                                     <td>{data.ID}</td>
//                                     <td>{data.Name}</td>
//                                     <td>{data.Email}</td>
//                                     <td>
//                                         <Link to={`/update/${data.ID}`} className='btn btn-primary'>mettre à jour</Link>
//                                         <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Effacer</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Reservation;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Reservation = () => {
//     const [reservations, setReservations] = useState([]);
//     const [selectedReservation, setSelectedReservation] = useState(null);

//     useEffect(() => {
//         axios.get("http://localhost:8081/")
//             .then(res => setReservations(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8081/reservation/${id}`);
//             setReservations(reservations.filter(reservation => reservation.ID !== id));
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const handleEdit = (reservation) => {
//         setSelectedReservation(reservation);
//     };

//     const handleClose = () => {
//         setSelectedReservation(null);
//     };

//     return (
//         <div className='d-flex flex-column vh-100 bg-dark justify-content-center align-items-center'>
//             {!selectedReservation ? (
//                 <div className='w-50 bg-white rounded p-3 mb-3'>
//                     <Link to="/create" className='btn btn-success mb-3'>Ajouter +</Link>
//                     <table className='table'>
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Prénom</th>
//                                 <th>Email</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 reservations.map((data, i) => (
//                                     <tr key={i}>
//                                         <td>{data.ID}</td>
//                                         <td>{data.Name}</td>
//                                         <td>{data.Email}</td>
//                                         <td>
//                                             <button className='btn btn-warning me-2' onClick={() => handleEdit(data)}>Lire</button>
//                                             <Link to={`/update/${data.ID}`} className='btn btn-primary me-2'>mettre à jour</Link>
//                                             <button className='btn btn-danger' onClick={() => handleDelete(data.ID)}>Effacer</button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             ) : (
//                 <div className='w-50 bg-white rounded p-3'>
//                     <h3>Détails de la réservation</h3>
//                     <table className='table'>
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Prénom</th>
//                                 <th>Email</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>{selectedReservation.ID}</td>
//                                 <td>{selectedReservation.Name}</td>
//                                 <td>{selectedReservation.Email}</td>
//                                 <td>
//                                     <button className='btn btn-primary' onClick={handleClose}>Retour</button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Reservation;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Reservation = () => {
    const [reservations, setReservations] = useState([]);
    const [selectedReservation, setSelectedReservation] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8081/")
            .then(res => setReservations(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/reservation/${id}`);
            setReservations(reservations.filter(reservation => reservation.ID !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (reservation) => {
        setSelectedReservation(reservation);
    };

    const handleClose = () => {
        setSelectedReservation(null);
    };

    return (
        <div className='d-flex flex-column vh-100 bg-dark justify-content-center align-items-center'>
            {!selectedReservation ? (
               <div className='container-sm bg-white rounded p-3 mb-3'>
               <Link to="/create" className='btn btn-success mb-3 d-block d-sm-inline-block'>Ajouter +</Link>
               <div className='table-responsive'>
                   <table className='table table-striped table-hover'>
                       <thead className=''>
                           <tr>
                               <th scope='col'>ID</th>
                               <th scope='col'>Prénom</th>
                               <th scope='col'>Email</th>
                               <th scope='col'>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               reservations.map((data, i) => (
                                   <tr key={i}>
                                       <td>{data.ID}</td>
                                       <td>{data.Name}</td>
                                       <td>{data.Email}</td>
                                       <td>
                                           <button className='btn btn-warning me-2' onClick={() => handleEdit(data)}>Lire</button>
                                           <Link to={`/update/${data.ID}`} className='btn btn-primary me-2'>Mettre à jour</Link>
                                           <button className='btn btn-danger' onClick={() => handleDelete(data.ID)}>Effacer</button>
                                       </td>
                                   </tr>
                               ))
                           }
                       </tbody>
                   </table>
               </div>
           </div>
           
            ) : (
                <div className='w-50 bg-white rounded p-3'>
    <h3 className='text-center mb-4'>Détails de la réservation</h3>
    <div className='table-responsive'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{selectedReservation.ID}</td>
                    <td>{selectedReservation.Name}</td>
                    <td>{selectedReservation.Email}</td>
                    <td className='text-center'>
                        <button className='btn btn-primary' onClick={handleClose}>Retour</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

            )}
        </div>
    );
};

export default Reservation;


