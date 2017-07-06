import { observable, computed, action } from 'mobx';

class Store {
	@observable todos;

	constructor(todos = [{id:0,item:'test'},{id:1,item:'2nd item'}]) {
    	this.todos = todos;
  	}

	@action addToDo = (item) => {
		this.todos.push({
			id: Date.now(),
			item: item
		});
	}
}

const store = new Store();

export default store;
export { Store };