import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

export default class CommentList extends React.Component {
    static propTypes = {
      comments: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

    }
    static defaultProps = {
      comments: []
    };

    getBody = () => {
        const commentsElements = this.props.comments.map(comment => <li
            key={comment.id}>
            <Comment comment = {comment}/>
        </li>);
        return (!this.state.isOpen ? null : commentsElements.length ? <ul>{commentsElements}</ul> : <div>No comments yet</div>);
    };

    getButtonText = () => {
      return (this.state.isOpen ? 'Hide comments' : 'Show comments');
    };

    commentButtonHandler = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
    };

    render() {
        return(
            <div>
                <button onClick={this.commentButtonHandler}>{this.getButtonText()}</button>
                {this.getBody()}
            </div>
        );
    }
}