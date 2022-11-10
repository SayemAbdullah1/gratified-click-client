import React from 'react';

const AddServices = () => {

    const handlePlaceService = event =>{
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const img = form.imgURL.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            title,
            img,
            price,
            description
        }

        fetch('https://gratified-click-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service place successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er))
    }
    return (
        <div className='mb-5 mt-12'>
            <h2 className=' mb-6 text-blue-600 text-5xl font-semibold text-center '>Add new Service</h2>
            <div>
                <form onClick={handlePlaceService}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='title' type="text" placeholder="Service title" className="input input-bordered w-full" />
                        <input name='imgURL' type="text" placeholder="Your imgURL" className="input input-bordered w-full" />
                        <input name='price' type="text" placeholder="Total Price" className="input input-bordered w-full" />
                        <input name='description' type="text" placeholder="Service description" className="input input-bordered w-full" />
                        
                    </div>
                    
                    <input className='btn mt-3' type="submit" value='Place your service' />
                </form>
            </div>
        </div>
    );
};

export default AddServices;