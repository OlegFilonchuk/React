import {normalizedArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT} from "../constants";
import {arrToObj, objToArr} from '../helpers';

const articlesMap = arrToObj(normalizedArticles);

export default (articleState = articlesMap, action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case DELETE_ARTICLE:
            const articlesArr = objToArr(articleState);
            return articlesArr.filter(article => article.id !== payload.id);

        case ADD_COMMENT:
            const article = articleState[payload.articleId];
            return {
                ...articleState,
                [payload.articleId]: {
                    ...article,
                    comments: ((article.comments || []).concat(randomId))
                }
            };

        default:
            return articleState;
    }

}