import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { serviceName, service, message, _id } = review
    // console.log(review)
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])
    return (
        <tr>
            <th>{reviewService.length}</th>
            <td>{serviceName}</td>
            <td>{message}</td>
            <td><button className="btn btn-active btn-ghost">Update</button></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-active btn-secondary">Delete</button></td>
        </tr>
    );
};

export default ReviewRow;