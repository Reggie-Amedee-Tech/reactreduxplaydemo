import React from 'react';
import { connect } from 'react-redux';
import { buyDonut } from '../redux/donuts/donutAction';

function DonutContainer(props) {
    return (
        <div>
            <h2>Number of Donuts - {props.numberOfDonuts}</h2>
            <button onClick={props.buyDonut}>Buy Donut</button>
        </div>
    );
}

const matchStateToProps = state => {
    return {
        numberOfDonuts: state.numberOfDonuts
    }
}

const matchDispatchToProps = dispatch => {
    return {
        buyDonut: () => dispatch(buyDonut())
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(DonutContainer);

