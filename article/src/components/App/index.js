import React, {Component} from 'react';
import ArticleList from '../ArticleList';
import Counter from '../../components/Counter';
import Filters from "../Filters";

class App extends Component {

    render() {

        return (
            <div>
                <Counter/>
                <Filters/>
                <ArticleList/>
            </div>
        );
    }
}

export default App;