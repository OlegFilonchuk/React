import React from 'react';
import CommentList from "./CommentList";
import PropTypes from 'prop-types';
import {Transition} from 'react-transition-group';

function Article({article, isOpen, toggleOpen}) {

    function getBody() {
        return isOpen ? <section>
            {article.text}
            <hr/>
            <div><CommentList comments={article.comments}/></div>
        </section> : null;
    }

    const duration = 500;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out, height ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: {opacity: 0, height: 0},
        entered: {opacity: 1, height: '200px'},
        exiting: {opacity: 1, height: '200px'},
        exited: {opacity: 0, height: 0}
    };

    return (
        <div>
            <h3>{article.title}</h3>
            <button onClick={toggleOpen}>
                {isOpen ? 'close' : 'open'}
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