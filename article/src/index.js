import React from 'react';
import {render} from 'react-dom';
import List from './List';
import {articles} from './fixtures';

render(<List articles = {articles}/>, document.getElementById('root'));