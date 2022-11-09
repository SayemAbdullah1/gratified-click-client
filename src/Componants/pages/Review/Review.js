import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Review = () => {
    const {user} = useContext(authContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data =>setReviews(data))
    }, [user?.email])
    // console.log(reviews);

    return (
        <div className="overflow-x-auto mt-5 mb-5">
            <h2 className=' text-blue-600 text-5xl font-semibold text-center '>All reviews</h2>
            <table className="table table-zebra w-full">
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Review</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    reviews.map((review) => <ReviewRow
                    key={review._id}
                    review={review}
                    ></ReviewRow>)
                   }
                    
                </tbody>
            </table>
        </div>
    );
};

export default Review;