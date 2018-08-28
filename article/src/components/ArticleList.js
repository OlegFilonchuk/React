import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

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

export default accordion(ArticleList);