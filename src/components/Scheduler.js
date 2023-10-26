import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { getAllDeliverySchedule } from '../services/actions/schedularActions';

const Scheduler = () => {

    const dispatch = useDispatch();
    const {isLoading, schedulers, error} = useSelector((state) => state);
    
    // useEffect(() => {
    //     dispatch(getAllDeliverySchedule(postalCode, productId));
        
    // }, []);

    const [postalCode, setPostalCode] = useState('');

    const [productId, setProductId] = useState(0);

    const handleChangePostalCode = (e) => {
        setPostalCode(e.target.value);
    } 

    const handleChangeProductId = (e) => {
        setProductId(e.target.value);
    } 

    const handleClick = () => {

        dispatch(getAllDeliverySchedule(postalCode, productId));
        
    }


    return (
        <div>
            <div className='SearchProduct'>
                Postal Code: <input type='text' value={postalCode} onChange={handleChangePostalCode}></input>
                Product Id: <input type='number' value={productId} onChange={handleChangeProductId}></input>
                <button type='submit' onClick={handleClick}>Search</button>
            </div>
            {isLoading && <h3>LOADING..</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {schedulers && schedulers.map((scheduler) => {
                    const {postalCode, deliveryDate, isGreenDelivery} = scheduler
                    return <article className={ isGreenDelivery ? 'GreenDelivery' : '' }>
                        <h3>
                            {postalCode} - {deliveryDate}
                        </h3>

                    </article>
                })}
            </section>
        </div>
    )
}

export default Scheduler
