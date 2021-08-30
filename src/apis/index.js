import axios  from "axios";


const URL = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${URL}/posts`);


export const fetchBooks = () => axios.get(`${URL}/books`);

export const fetchBookById = (id) => axios.get(`${URL}/books/getbook/${id}`);

export const login = (payload) => axios.post(`${URL}/users/login`, payload);

export const register = (payload) => axios.post(`${URL}/users/register`, payload);
