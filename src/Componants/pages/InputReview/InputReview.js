import React, { useContext } from 'react';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const InputReview = ({ serviceDetails }) => {
    const {_id, title} = serviceDetails;
    const {user} = useContext(authContext)

    const handleReview = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            message

        }
        fetch('https://gratified-click-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review place successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er))
    }
    return (
        <div className='mt-5 mb-5'>
            <form onSubmit={handleReview}>
                
                <div>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-80 mb-3" />
                    <br />
                    <textarea name='message' className="textarea w-80 textarea-bordered gap-4 mb-5" placeholder="Your message"></textarea>
                </div>
        
                <div>
                    <button className='btn btn-primary ' type="submit" value='Place your review'>Place your review</button>
                </div>
            </form>
        </div>
    );
};

export default InputReview;