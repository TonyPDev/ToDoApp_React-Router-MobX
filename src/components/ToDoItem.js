import React from 'react';
import { observer } from 'mobx-react';

const ToDoItem = observer(({ item }) =>
	<li>{item}</li>
);

export default ToDoItem;