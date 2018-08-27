import React from 'react';
import CommentList from "./CommentList";

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    handleOpenButton = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
    };

    getBody = () => {
        const {text, comments} = this.props.article;
        return this.state.isOpen ? <section>
            {text}
            <hr/>
            <div><CommentList comments={comments}/></div>
        </section> : null;
    };

    render() {
        const {article} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.handleOpenButton}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }
}