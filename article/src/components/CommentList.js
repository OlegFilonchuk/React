import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm';

function CommentList({comments = [], isOpen, toggleOpen}) {

    function getBody() {
        const commentsElements = comments.map(id => <li
            key={id}>
            <Comment id = {id}/>
        </li>);
        return (!isOpen ? null : commentsElements.length ? <div><CommentForm/><ul>{commentsElements}</ul></div> : <div>No comments yet</div>);
    }

    return(
        <div>
            <button onClick={toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</button>
            <br/>
            {getBody()}
        </div>
    );
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default toggleOpen(CommentList);