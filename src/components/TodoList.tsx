import React from 'react';
import './styles.css'
import { Todo } from '../models/model'
import SingleTodo from './SingleTodo';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = ({todos, setTodos}): JSX.Element => {
  return (
	  <div className='todos'>{
		  todos.map(todo => (
			  <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
		  ))
	}</div>
  )
}

export default TodoList