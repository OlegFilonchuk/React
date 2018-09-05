import React, {Component} from 'react';
import Calendar from "./Calendar";
import Select from 'react-select';

class Filters extends Component {

    render() {
        return (
            <div>
                <Calendar/>
                <Select />
            </div>
        );
    }
}

export default Filters;