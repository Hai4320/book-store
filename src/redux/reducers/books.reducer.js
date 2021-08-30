import {INIT_STATE} from '../../constants'
import {getBooks, getType, getBookById} from '../actions/books.actions'

export default function booksReducer(state = INIT_STATE.books, action)
{
    switch (action.type) {
        case getType(getBooks.getBooksRequest):
        return {
            ...state,
            isLoading: true,
        }
        case getType(getBooks.getBooksSuccess):
        return {
            ...state,
            isLoading: false,
            data: action.payload,
        }
        case getType(getBooks.getBooksFailure):
        return {
            ...state,
            isLoading: false,
        }
        case getType(getBookById.getBookByIdRequest):
        return {
            ...state,
            isLoading: true,
        }
        case getType(getBookById.getBookByIdSuccess):
        return {
            ...state,
            isLoading: false,
            book: action.payload,
        }
        case getType(getBookById.getBookByIdFailure):
        return {
            ...state,
            isLoading: false,
        }
        default: 
            return state;
    }
}