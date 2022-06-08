import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {buyDonut} from '../redux/donuts/donutAction'

function HooksDonutContainer(props) {
    const numberOfDonuts = useSelector(state => state.numberOfDonuts)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Donuts - {numberOfDonuts}</h2>
            <button onClick={() => dispatch(buyDonut())}>Buy one!</button>
        </div>
    );
}

export default HooksDonutContainer;