import React, { component } from 'react';
import { observer, inject } from 'mobx-react';
import ToDoItem from './ToDoItem'

const ToDoList = inject('store')(observer(({ store }) => {
	const todos = store.todos;
	const items = todos.map((todo) =>
		<ToDoItem key={todo.id} item={todo.item} />
	);

	return (
		<ul>
			{items}
		</ul>
	);
}));

export default ToDoList;