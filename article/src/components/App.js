import React, {Component} from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';
import Calendar from "./Calendar";

class App extends Component {

    state = {
        selection: null
    };

    changeSelection = selection => {
        this.setState({selection})
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <Calendar />
                <UserForm/>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} isMulti/>
                <ArticleList articles={this.props.articles}/>
            </div>
        );
    }
}

export default App;