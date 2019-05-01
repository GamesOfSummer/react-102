import React, { Component } from 'react';

export default class ControlledInput extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: '',

            violations2: []
        };
    }

    handleChange = evt => {
        this.setState({ inputValue: evt.target.value });
    };

    componentDidMount() {
        fetch('http://cpsc-api.herokuapp.com/api')
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                console.log('data?', data);
                this.setState({ violations2: data.violations });
            });
    }

    render() {
        return (
            <div>
                Input
                <input
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <br />
                <ul>
                    {this.state.violations2.map(item => {
                        return (
                            <li>
                                {item.date} -> {item.product}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
