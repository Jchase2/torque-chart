import React, { useState } from 'react';
import { Dropdown, Message } from 'semantic-ui-react';

const standardOptions = [
    { key: 0, text: 'SAE J429', value: 'SAE' },
    { key: 1, text: 'ISO', value: 'ISO' },
    { key: 2, text: 'ASTM', value: 'ASTM' },
]
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

const Input = () => {
    const [standard, setStandard] = useState(null);
    const [grade, setGrade] = useState(null);
    const [size, setSize] = useState(null);

    return (
        <form>
            <label>
                <Dropdown
                    onChange={(e, value) => setStandard(value.value)}
                    options={standardOptions}
                    placeholder='Select Standard'
                    selection
                    value={standardOptions.value}
                />
            </label>
            {
                standard === "SAE" ?
                    <label>
                        <Dropdown
                            onChange={(e, { value }) => setGrade({ value })}
                            options={boltOptionsSAE}
                            placeholder='Select Bolt Grade'
                            selection
                            value={boltOptionsSAE.value}
                        />
                    </label>
                    : standard === "ISO" ?
                        <label>
                            <Dropdown
                                onChange={(e, { value }) => setGrade({ value })}
                                options={boltOptionsISO}
                                placeholder='Select Bolt Grade'
                                selection
                                value={boltOptionsISO.value}
                            />
                        </label>
                        : standard === "ASTM" ?
                            <label>
                                <Dropdown
                                    onChange={(e, { value }) => setGrade({ value })}
                                    options={boltOptionsASTM}
                                    placeholder='Select Bolt Grade'
                                    selection
                                    value={boltOptionsASTM.value}
                                />
                            </label>
                            :
                            <label>
                                <Dropdown placeholder='Select Bolt Grade' search selection>
                                    <Dropdown.Menu>
                                        <Message
                                            error
                                            header='Error'
                                            content='Select Bolt Standard'
                                        />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </label>
            }
        </form>
    )
}

export default Input;