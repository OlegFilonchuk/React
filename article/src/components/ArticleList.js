import React, {Component} from 'react';
import Article from './Article/';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from '../selectors/';

class ArticleList extends Component {

    render() {
        console.log('rerender articleList');
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


export default connect((state) => {
    return {
        articles: filtrateArticlesSelector(state)
    };
})(accordion(ArticleList));