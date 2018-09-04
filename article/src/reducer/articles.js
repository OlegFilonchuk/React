import {articles as defaultArticles} from '../fixtures';

export default (articleState = defaultArticles, action) => {
    const {type} = action;
    switch (type) {
        case 'DELETE_ARTICLE': return articleState;
    }

    return articleState;
}