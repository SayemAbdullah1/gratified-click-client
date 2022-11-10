import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const ShowUserRow = ({review}) => {
    const {user}= useContext(authContext)
    const {customer, message, service} = review
    const {reviewService, setReviewService} = useState({})

    useEffect(() => {
        fetch(`https://gratified-click-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])
    return (
        <tr>
            
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                user?.img ?
                                <img src={user.img} alt="Avatar Tailwind CSS Component" />
                                :
                                <img className='rounded bg-gray-400' alt=''/>
                            }
                        </div>
                    </div>
                    <div>
                        {/* <div className="font-bold">{}</div>
                        <div className="text-sm opacity-50">{}</div> */}
                    </div>
                </div>
            </td>
            <td>
                {customer}
                
            </td>
            <td>{message}</td>
            
        </tr>
    );
};

export default ShowUserRow;