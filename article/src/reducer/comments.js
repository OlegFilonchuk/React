import {normalizedComments as defaultComments} from '../fixtures';
import {arrToObj} from '../helpers';
import {ADD_COMMENT} from "../constants";

const commentsMap = arrToObj(defaultComments);

export default (commentsState = commentsMap, action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case ADD_COMMENT:
            return {...commentsState, [randomId]: {...payload.comment, id: randomId}};
        default:
            return commentsState;
    }

}