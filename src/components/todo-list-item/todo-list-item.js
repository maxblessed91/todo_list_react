import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false
    }; // Добавляем состояние реакт компонента

    onLabelClick = () => {
        // console.log(`Done: ${this.props.label}`);
        this.setState({
            done: true
        });
    }; // Добавление EventListener


    // constructor() {
    //     super();

    //     this.onLabelClick = () => {
    //         console.log(`Done: ${this.props.label}`);
    //     };
    // } Добавление EventListener

    // onLabelClick() {
    //     console.log(`Done: ${this.props.label}`);
    // }


    render() {

        const { label, important = false } = this.props; // Из этого места можно получить текущие свойства
        const { done } = this.state; // используем деструктуризацию, для того чтобы достать done из state

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={ this.onLabelClick }>
                    { label }
                </span>

                <button type='button'
                        className='btn btn-outline-success btn-sm float-right'>
                    <i className='fa fa-exclamation'/>
                </button>

                <button type='button'
                        className='btn btn-outline-danger btn-sm float-right'>
                    <i className='fa fa-trash-o'/>
                </button>
            </span>
        );
    }
}
