import React, { Component } from 'react'; // Подключаем библиотеки


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100; // Добавляем id, начиная с которого необходимо добавлять элементы

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
    ]
};

createTodoItem(label) {
    return {
        label,
        important: false,
        done: false,
        id: this.maxId++
    }
}

deleteItem = (id) => {
    this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);

        // const before = todoData.slice(0, idx); // берем все элементы до удаленного
        // const after = todoData.slice(idx + 1); // берем все элементы после удаленного(slice не изменяет изначальный массив)

        const newArray = [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1)
        ]; // конструируем новый массив из всех элементов до нужного и после нужного

        return {
            todoData: newArray // наш новый массив
        };
    });
};

addItem = (text) => {
    const newItem = this.createTodoItem(text);


    this.setState(({ todoData }) => {
        const newArr = [
            ...todoData,
            newItem
        ]; // add element to array

        return {
            todoData: newArr
        };
    });
};

toggleProperty(arr, id, propName) {


        // 1. Update object
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]: !oldItem[propName]};

        // 2. Construct new array
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

}

onToggleImportant = (id) => {
    this.setState(({ todoData }) => {

        return {
            todoData: this.toggleProperty(todoData, id, 'important')
        };
    });
};

onToggleDone = (id) => {
    this.setState(({ todoData }) => {

        return {
            todoData: this.toggleProperty(todoData, id, 'done')
        };
    });
};

    render() {
        const { todoData } = this.state;
        const doneCount = todoData
                            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                todos={todoData}
                onDeleted={ this.deleteItem }
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
                />
                <ItemAddForm addItem={this.addItem}  />

            </div>
        );
    };
    }
    // const value = '<script>alert("")</script>';
