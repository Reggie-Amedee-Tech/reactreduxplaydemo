import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyDonut } from '../redux/donuts/donutAction';

function DonutContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Donuts - {props.numberOfDonuts}</h2>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => props.buyDonut(number)}>Buy Donut</button>
        </div>
    );
}

const matchStateToProps = state => {
    return {
        numberOfDonuts: state.donut.numberOfDonuts
    }
}

const matchDispatchToProps = dispatch => {
    return {
        buyDonut: number => dispatch(buyDonut(number))
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(DonutContainer);

