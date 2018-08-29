import React, {Component} from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';

class App extends Component {

    render() {
        return (
            <div>
                <UserForm/>
                <ArticleList articles={this.props.articles}/>
            </div>
        );
    }
}

export default App;