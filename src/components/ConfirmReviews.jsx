// import React, { useEffect, useState } from 'react';
// import { collection, query, where, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
// import { db } from '../components/auth/firebase';
// import { ListGroup, Button, Container } from 'react-bootstrap';

// const ConfirmReviews = () => {
//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         const fetchReviews = async () => {
//             const q = query(collection(db, 'avis'), where('is_confirmed', '==', false));
//             const querySnapshot = await getDocs(q);
//             const reviewsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//             setReviews(reviewsList);
//         };

//         fetchReviews();
//     }, []);

//     const confirmReview = async (id) => {
//         const reviewRef = doc(db, 'avis', id);
//         await updateDoc(reviewRef, {
//             is_confirmed: true
//         });
//         setReviews(reviews.filter(review => review.id !== id));
//     };

//     const rejectReview = async (id) => {
//         const reviewRef = doc(db, 'avis', id);
//         await deleteDoc(reviewRef);
//         setReviews(reviews.filter(review => review.id !== id));
//     };

//     return (
//             <Container className="mt-5 ">
//             <h2>Confirm Reviews</h2>
//             <ListGroup>
//                 {reviews.map((review) => (
//                     <ListGroup.Item key={review.id}>
//                         <strong>Name:</strong> {review.name} <br/>
//                         <strong>Email:</strong> {review.email} <br/>
//                         <strong>Message:</strong> {review.message} <br/>
//                         <Button variant="success" onClick={() => confirmReview(review.id)} className="ml-2">Confirmer l'avis</Button>
//                         <Button variant="danger" onClick={() => rejectReview(review.id)} className="ml-2">Refuser l'avis</Button>
//                     </ListGroup.Item>
//                 ))}
//             </ListGroup>
//         </Container>
        
//     );
// };

// export default ConfirmReviews;

import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../components/auth/firebase';
import { ListGroup, Button, Container } from 'react-bootstrap';

const ConfirmReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const q = query(collection(db, 'avis'), where('is_confirmed', '==', false));
            const querySnapshot = await getDocs(q);
            const reviewsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setReviews(reviewsList);
        };

        fetchReviews();
    }, []);

    const confirmReview = async (id) => {
        const reviewRef = doc(db, 'avis', id);
        await updateDoc(reviewRef, {
            is_confirmed: true
        });
        setReviews(reviews.filter(review => review.id !== id));
    };

    const rejectReview = async (id) => {
        const reviewRef = doc(db, 'avis', id);
        await deleteDoc(reviewRef);
        setReviews(reviews.filter(review => review.id !== id));
    };

    return (
        <Container className="mt-5 text-light p-4 rounded">
            <h2 className=' text-dark'>Confirm Reviews</h2>
            <ListGroup>
                {reviews.map((review) => (
                    <ListGroup.Item key={review.id} className=" text-secondary mb-5">
                        <strong>Name:</strong> {review.name} <br/>
                        <strong>Email:</strong> {review.email} <br/>
                        <strong>Message:</strong> {review.message} <br/>
                        <Button variant="success" onClick={() => confirmReview(review.id)} className="ml-2">Confirmer l'avis</Button>
                        <Button variant="danger" onClick={() => rejectReview(review.id)} className="ml-2">Refuser l'avis</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default ConfirmReviews;


