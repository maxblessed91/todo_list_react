import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.onSearchItem(this.state.label);
    //     this.setState({
    //         term: ''
    //     });
    // };

    render() {

        return (
            // <form className='item-add-form d-flex'
            // onSubmit={this.onSubmit}>
                <input type='text'
                className='form-control search-input'
                onChange={this.onSearchChange} // EventListener {function}
                placeholder='Type to search'
                value={this.state.term} />
            // </form>
        );
    };
};
