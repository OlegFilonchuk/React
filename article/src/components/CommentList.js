import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm';

function CommentList({article, isOpen, toggleOpen}) {

    function getBody({article: {comments=[], id}, isOpen}) {
        if (!isOpen) return null;
        if (!comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId={id}/>
            </div>
        );

        return (
            <div>
                <ul>
                    {comments.map(id => <li key={id}><Comment id={id}/></li>)}
                </ul>
                <CommentForm articleId={id}/>
            </div>
        )
    }

    return(
        <div>
            <button onClick={toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</button>
            <br/>
            {getBody({article, isOpen})}
        </div>
    );
}

CommentList.propTypes = {
    comments: PropTypes.array
};

export default toggleOpen(CommentList);