import {createSelector} from 'reselect';
import {objToArr} from '../helpers';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filtrateArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters ) => {
    const {selected, dateRange: {from, to}} = filters;
    const articlesArr = objToArr(articles);

    return articlesArr.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    });
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id];
});