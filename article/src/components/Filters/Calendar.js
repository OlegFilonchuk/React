import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import {connect} from 'react-redux';
import {changeDateRange} from '../../AC/'
import 'react-day-picker/lib/style.css';

class Calendar extends React.Component {

    handleDayClick = day => {
        const { changeDateRange, range } = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range));
    };

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="RangeExample">
                <DayPicker
                    className="Selectable"
                    numberOfMonths={1}
                    selectedDays={day => DateUtils.isDayInRange(day, {from , to})}
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
        );
    }
}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange })(Calendar)