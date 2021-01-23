import React, { Component } from 'react'; // Подключаем библиотеки


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export default class App extends Component {

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

    render() {
        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3} />
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={this.state.todoData}
                onDeleted={ this.deleteItem }/>
            </div>
        );
    };
    }
    // const value = '<script>alert("")</script>';
