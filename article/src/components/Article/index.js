import React from 'react';
import CommentList from "../CommentList";
import PropTypes from 'prop-types';
import {Transition} from 'react-transition-group';
import './style.css';

function Article({article, isOpen, toggleOpen}) {

    function getBody() {
        return isOpen ? <section>
            {article.text}
            <hr/>
            <div><CommentList comments={article.comments}/></div>
        </section> : null;
    }

    function handleDelete() {
        console.log('deleted article');
    }

    const duration = 500;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out, height ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: {opacity: 0},
        entered: {opacity: 1},
        exiting: {opacity: 1},
        exited: {opacity: 0}
    };

    return (
        <div className={'article'}>
            <h3>{article.title}</h3>
            <button onClick={toggleOpen} className={'article__button'}>
                {isOpen ? 'Close' : 'Open'}
            </button>
            <button onClick={handleDelete} className={'article__button'}>
                Delete article
            </button>
            <Transition
                in={isOpen}
                timeout={100}
            >
                {(status) => (
                        <div
                            style={{
                            ...defaultStyle,
                            ...transitionStyles[status]
                            }}
                            className={`fade fade-${status}`}
                        >
                            {getBody()}
                        </div>
                    )}
            </Transition>
        </div>
    );
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