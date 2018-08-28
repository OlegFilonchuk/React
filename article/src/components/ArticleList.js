import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

function ArticleList({articles, openElementId, toggleOpen}) {

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

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openElementId: PropTypes.string.isRequired,
    toggleOpen: PropTypes.func.isRequired
};


export default accordion(ArticleList);