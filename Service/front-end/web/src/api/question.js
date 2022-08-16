import {axios} from 'utils';

/**
 * @param {{userId: number}} params
 */
export const getQuestionsByUserId = async params =>
    axios.get('/question/question-show-by-userId', {params});
