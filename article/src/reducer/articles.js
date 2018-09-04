import {articles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLES} from "../constants";

export default (articleState = defaultArticles, action) => {
    const {type} = action;
    switch (type) {
        case DELETE_ARTICLES: return articleState;
    }

    return articleState;
}