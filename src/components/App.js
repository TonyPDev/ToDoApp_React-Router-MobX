import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import { observer } from 'mobx-react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import HelloWorld from './HelloWorld';

const App = observer(() =>
	<Router>
		<div>
			<h1>Local To-Do</h1>
			<ul>
				<li><Link to="/">To Do</Link></li>
				<li><Link to="/hello">Hello World</Link></li>
			</ul>

			<hr/>

			<Route
				exact path="/"
				render={(routeProps) => (
					<AddToDo {...routeProps} />
				)}
			/>
			<Route
				exact path="/"
				render={(routeProps) => (
					<ToDoList {...routeProps} />
				)}
			/>
			<Route
				exact path="/hello"
				component={HelloWorld}
			/>
		</div>
	</Router>
);

export default App