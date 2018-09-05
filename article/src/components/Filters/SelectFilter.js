import React, {Component} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {changeSelection} from "../../AC/";

class SelectFilter extends Component {
    handleChange = selected => {
        return this.props.changeSelection(selected.map(option => option.value));
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({label: article.title, value: article.id}));
        return (
            <div>
                <Select
                    options={options}
                    onChange = {this.handleChange}
                    isMulti
                />
            </div>
        );
    }
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), { changeSelection })(SelectFilter);