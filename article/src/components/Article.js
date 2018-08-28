import React from 'react';
import CommentList from "./CommentList";
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

function Article(props) {
    const {article, isOpen, toggleOpen} = props;

    function getBody() {
        return isOpen ? <section>
            {article.text}
            <hr/>
            <div><CommentList comments={article.comments}/></div>
        </section> : null;
    }

    return (
        <div>
            <h3>{article.title}</h3>
            <button onClick={toggleOpen}>
                {isOpen ? 'close' : 'open'}
            </button>
            {getBody()}
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default toggleOpen(Article);