import React from 'react';

const ReviewRow = ({review}) => {
    console.log(review)
    return (
        <tr>
            <th>{review.length}</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Purple</td>
        </tr>
    );
};

export default ReviewRow;