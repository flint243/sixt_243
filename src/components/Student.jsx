// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Student = () => {
//     const [student, setStudent] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:8081/")
//             .then(res => setStudent(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete('http://localhost:8081/student/' + id);
//             window.location.reload();
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//             <div className='w-50 bg-white rounded p-3'>
//                 <Link to="/create" className='btn btn-success'>Ajouter +</Link>
//                 <table className='table'>
//                     <thead>
//                         <tr>
//                             <th>Prénom</th>
//                             <th>Email</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             student.map((data, i) => (
//                                 <tr key={i}>
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

// export default Student;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Student = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/")
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/student/' + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success mb-3'>Ajouter +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Prénom</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Email}</td>
                                    <td>
                                        <Link to={`/update/${data.ID}`} className='btn btn-primary'>mettre à jour</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Effacer</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Student;



