import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {articles} from './fixtures';
import './index.css';


render(<App articles = {articles}/>, document.getElementById('root'));

