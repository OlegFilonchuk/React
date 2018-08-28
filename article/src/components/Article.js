import React from 'react';
import CommentList from "./CommentList";
import PropTypes from 'prop-types';

function Article({article, isOpen, toggleOpen}) {

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
            <button
                onClick={toggleOpen}
            >
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

export default Article;