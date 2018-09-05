import React, {Component} from 'react';
import Calendar from "./Calendar";
import SelectFilter from './SelectFilter';

class Filters extends Component {

    render() {
        return (
            <div>
                <Calendar/>
                <SelectFilter />
            </div>
        );
    }
}

export default Filters;