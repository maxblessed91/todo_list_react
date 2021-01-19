import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }; // Добавляем состояние реакт компонента

    onLabelClick = () => {
        // console.log(`Done: ${this.props.label}`);
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    }; // Добавление EventListener


    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        });
    };

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

        const { label } = this.props; // Из этого места можно получить текущие свойства
        const { done, important } = this.state; // используем деструктуризацию, для того чтобы достать done из state

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={ this.onLabelClick }>
                    { label }
                </span>

                <button type='button'
                        className='btn btn-outline-success btn-sm float-right'
                        onClick={this.onMarkImportant}>
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
