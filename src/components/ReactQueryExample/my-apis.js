import axios from "axios";

export const getTodos = () => axios.get('https://localhost:3000/api/todos').then(res => res.data)

export const postTodos = (todo) => axios.post('https://localhost:3000/api/todo', { todo }).then(res => res.data)