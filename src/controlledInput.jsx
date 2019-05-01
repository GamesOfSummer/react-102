import React, { Component } from 'react';

export default class ControlledInput extends Component {
    constructor() {
        super();

        this.state = {
            foods: ['b', 'd', 'cats'],

            people: [
                { id: 1, name: 'Bob', age: '35' },
                { id: 2, name: 'Bobby', age: '15' }
            ],

            inputValue: ''
        };
    }

    handleChange = evt => {
        this.setState({ inputValue: evt.target.value });
    };

    render() {
        return (
            <div>
                Input
                <input
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
