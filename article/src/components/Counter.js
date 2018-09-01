import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Counter extends PureComponent {
    handleIncrement = () => {
        console.log('increment');
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

export default Counter;