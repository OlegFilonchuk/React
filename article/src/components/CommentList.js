import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

function CommentList({comments = [], isOpen, toggleOpen}) {

    function getBody() {
        const commentsElements = comments.map(comment => <li
            key={comment.id}>
            <Comment comment = {comment}/>
        </li>);
        return (!isOpen ? null : commentsElements.length ? <ul>{commentsElements}</ul> : <div>No comments yet</div>);
    }

    return(
        <div>
            <button onClick={toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</button>
            {getBody()}
        </div>
    );
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default toggleOpen(CommentList);