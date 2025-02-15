import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2351;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const postTodo = (todo: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, todo);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const patchTodo = ({ title, id, userId, completed }: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, { title, completed, userId });
};

// Add more methods here
