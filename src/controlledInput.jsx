import React, { Component } from 'react';

export default class ControlledInput extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: '',
            message: '',
            violations: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = evt => {
        this.setState({ inputValue: evt.target.value });
    };

    handleClick = evt => {
        evt.preventDefault();
        console.log('The link was clicked.');

        fetch(
            'http://cpsc-api.herokuapp.com/api/search?q=' +
                this.state.inputValue
        )
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                this.setState({ violations: data.infractions });

                if (data.infractions.length === 0) {
                    this.message = 'Sorry, no records returned!';
                } else {
                    this.message = '';
                }
            });
    };

    render() {
        return (
            <div>
                Input
                <input
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <br />
                <button onClick={this.handleClick}>Search</button>
                {this.message}
                <ul>
                    {this.state.violations.map(item => {
                        return (
                            <li>
                                {item.date} - {item.violation} - {item.product}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
