import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../components/auth/firebase';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        rating: 1
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'reviews'), {
                ...formData,
                is_confirmed: false,
                created_at: new Date()
            });
            navigate('/confirm');
            setFormData({ name: '', email: '', message: '', rating: 1 });
        } catch (err) {
            console.error('Error submitting review:', err);
        }
    };

    return (
        <Container className="d-flex vh-100 bg-light justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-4">
                <h2 className="mb-4">Submit a Review</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter your email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Write your message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control 
                            type="number" 
                            min="1" 
                            max="5" 
                            name="rating" 
                            value={formData.rating} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default ReviewForm;
