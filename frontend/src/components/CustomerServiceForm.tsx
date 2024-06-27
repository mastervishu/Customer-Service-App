// src/components/CustomerServiceForm.js
import React, { useState } from 'react';
import instance from '../axiosInstance';

const CustomerServiceForm = ({ userId }: { userId: string }) => {
    const [category, setCategory] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await instance.post('/api/customer-service', { category, comments, userId });
            alert('Request submitted successfully');
        } catch (error) {
            console.error('Error submitting request:', error);
            alert('Failed to submit request');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="General Queries">General Queries</option>
                    <option value="Product Features Queries">Product Features Queries</option>
                    <option value="Product Pricing Queries">Product Pricing Queries</option>
                    <option value="Product Feature Implementation Requests">Product Feature Implementation Requests</option>
                </select>
            </label>
            <label>
                Comments:
                <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerServiceForm;