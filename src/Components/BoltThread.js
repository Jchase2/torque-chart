import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 0, text: 'UNF / Fine', value: 'UNF' },
    { key: 1, text: 'UNC / Coarse', value: 'UNC' },
    {key: 2, text: 'Unknown', value: 'Unknown'},
]

export default class BoltThread extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Dropdown
                onChange={this.handleChange}
                options={options}
                placeholder='Select Threading'
                selection
                value={value}
            />
        );
    }

}