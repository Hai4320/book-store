import {createActions} from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}


export const getBooks = createActions({
    getBooksRequest: undefined,
    getBooksSuccess: (payload) => payload,
    getBooksFailure: (err) => err,
})

export const getBookById = createActions({
    getBookByIdRequest: undefined,
    getBookByIdSuccess: (payload) => payload,
    getBookByIdFailure: (err) => err,
})
