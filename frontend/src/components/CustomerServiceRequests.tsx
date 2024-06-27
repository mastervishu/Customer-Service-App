import { useEffect, useState } from 'react';
import instance from '../axiosInstance';

export interface IRequest {
    _id: string,
    category: string,
    comments: string,
    userId: string,
}

const CustomerServiceRequests = () => {
    const [requests, setRequests] = useState<IRequest[] | []>([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await instance.get('/api/customer-service-requests');
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        fetchRequests();
    }, []);

    return (
        <div>
            {requests.map((request) => (
                <div key={request._id}>
                    <h3>{request.category}</h3>
                    <p>{request.comments}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerServiceRequests;