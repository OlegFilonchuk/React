import React from 'react';
import Article from './Article';

export default function List({articles}) {
    const articleElements = articles.map(article => <li key={article.id}><Article article = {article}/></li>);

    return (
        <ul>
            {articleElements}
        </ul>
    );
}