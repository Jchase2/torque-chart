import React from 'react';
import { Dropdown, Message } from 'semantic-ui-react';

const boltOptionsSAE = [
    { key: 0, text: 'Grade 1', value: 'Grade 1' },
    { key: 1, text: 'Grade 2', value: 'Grade 2' },
    { key: 2, text: 'Grade 5', value: 'Grade 5' },
    { key: 3, text: 'Grade 5.2', value: 'Grade 5.2' },
    { key: 4, text: 'Grade 8', value: 'Grade 8' },
]
const boltOptionsISO = [
    { key: 0, text: 'Grade 8.8', value: 'Grade 8.8' },
    { key: 1, text: 'Grade 10.9', value: 'Grade 10.9' }
]
const boltOptionsASTM = [
    { key: 0, text: 'A307', value: 'A307' },
    { key: 1, text: 'A325 Type 1', value: 'A325 Type 1' }
]

const BoltGrades = (props) => {
    if (props.boltStandard === 'SAE') {
        return <Dropdown
            placeholder='Select Bolt Grade'
            search
            selection
            options={boltOptionsSAE}
        />
    }
    else if (props.boltStandard === 'ISO') {
        return <Dropdown
            placeholder='Select Bolt Grade'
            search
            selection
            options={boltOptionsISO}
        />
    }
    else if (props.boltStandard === 'ASTM') {
        return <Dropdown
            placeholder='Select Bolt Grade'
            search
            selection
            options={boltOptionsASTM}
        />
    }
    else {
        return <Dropdown placeholder='Select Bolt Grade' search selection>
            <Dropdown.Menu>
                <Message
                    error
                    header='Error'
                    content='Select Bolt Standard'
                />
            </Dropdown.Menu>
        </Dropdown>
    }
}

export default BoltGrades;