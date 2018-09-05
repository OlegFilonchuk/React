import React, {Component} from 'react';
import Article from './Article/';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';

class ArticleList extends Component {

    render() {
        const {articles, openElementId, toggleOpen} = this.props;
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id === openElementId}
                toggleOpen={toggleOpen(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        );

    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openElementId: PropTypes.string.isRequired,
    toggleOpen: PropTypes.func.isRequired
};


export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters;

    const filteredArticles = articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    });

    return {articles: filteredArticles};
})(accordion(ArticleList));