import React from 'react';
import PropTypes from 'prop-types';

export default function Comment(props) {

    const {user, text} = props.comment;
    return(
        <div>
            <div>{text}</div>
            <p><b>by {user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
};