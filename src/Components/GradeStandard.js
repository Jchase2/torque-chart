import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import BoltGrades from './BoltGrades';

const options = [
    { key: 0, text: 'SAE', value: 'SAE' },
    { key: 1, text: 'ISO', value: 'ISO' },
    { key: 2, text: 'ASTM', value: 'ASTM' }
]

export default class GradeStandard extends Component {
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
                    placeholder='Select Standard'
                    selection
                    value={value}
                />
                <BoltGrades boltStandard={value}/>
            </>
        );
    }

}