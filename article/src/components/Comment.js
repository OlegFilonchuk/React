import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelector} from '../selectors/';

function Comment(props) {

    const {user, text} = props.comment;
    return(
        <div>
            <div>{text}</div>
            <p><b>by {user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect:
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
};

export default connect((state, ownProps) => {
    return {comment: commentSelector(state, ownProps)}
})(Comment)