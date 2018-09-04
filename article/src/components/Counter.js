import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC/'

class Counter extends PureComponent {
    handleIncrement = () => {
        console.log('increment');
        this.props.increment();
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

Counter.propTypes = {
    counter: PropTypes.number
};

export default connect(state => ({
    counter: state.count
}), { increment })(Counter);