import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../AC/';

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    };

    handleChange = input => ev => {
        if (this.state[input].length > limits[input].max) return;
        this.setState({
            [input]: ev.target.value
        });
    };

    getClassName = input => (
      this.state[input].length && this.state[input].length < limits[input].min ? 'red' : ''
    );

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.addComment(this.state, this.props.articleId);
        this.setState({
            user:'',
            text:''
        });
    };

    render() {
        const {user, text} = this.state;
        return (
            <form onSubmit={this.handleSubmit} >
                <hr/>
                Add a comment:
                <br/>
                <input
                    name='user'
                    type="text"
                    placeholder={'Your name'}
                    value={user}
                    onChange={this.handleChange('user')}
                    className={this.getClassName('user')}
                />
                <br/>
                <textarea
                    name="text"
                    cols="30"
                    rows="10"
                    placeholder={'Your comment'}
                    value={text}
                    onChange={this.handleChange('text')}
                    className={this.getClassName('text')}
                >
                </textarea>
                <br/>
                <input type="submit" value="Submit"/>
                <hr/>
            </form>
        );
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 100
    }
};

export default connect(null, {addComment})(CommentForm);