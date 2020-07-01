import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 0, text: 'Yes', value: 'Yes' },
    { key: 1, text: 'No', value: 'No' },
]

export default class BoltLube extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <>
                <Dropdown
                    onChange={this.handleChange}
                    options={options}
                    placeholder='Lubricated?'
                    selection
                    value={value}
                />
            </>
        );
    }

}