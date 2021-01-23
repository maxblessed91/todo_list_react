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
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ]
};

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
    const newItem = {
        label: text,
        important: false,
        id: this.maxId++
    } // add element in array


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

    render() {
        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3} />
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                todos={this.state.todoData}
                onDeleted={ this.deleteItem }/>
                <ItemAddForm addItem={this.addItem} />
            </div>
        );
    };
    }
    // const value = '<script>alert("")</script>';
