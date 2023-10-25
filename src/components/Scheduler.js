import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDeliverySchedule } from '../services/actions/schedularActions';

const Scheduler = () => {

    const dispatch = useDispatch();
    const {isLoading, schedulers, error} = useSelector((state) => state);
    useEffect(() => {
        dispatch(getAllDeliverySchedule());
        
    }, []);


    return (
        <div>
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
