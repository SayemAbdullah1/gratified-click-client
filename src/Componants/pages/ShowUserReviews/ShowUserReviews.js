import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import ShowUserRow from './ShowUserRow';

const ShowUserReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://gratified-click-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                        
                            <th>Image</th>
                            <th>Name</th>
                            <th>Review</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ShowUserRow
                            key={review._id}
                            review={review}
                            ></ShowUserRow>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ShowUserReviews;