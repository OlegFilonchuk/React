import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root';
import {articles} from './fixtures';
import './index.css';


render(<Root articles = {articles}/>, document.getElementById('root'));

