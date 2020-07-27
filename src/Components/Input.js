import React, { useState } from 'react';
import { Dropdown, Message } from 'semantic-ui-react';
import ResultComp from '../Components/ResultComp';

const boltSizeOptions = [
    { key: 0, text: '1/4', value: '1/4' },
    { key: 1, text: '5/16', value: '5/16' },
    { key: 2, text: '3/8', value: '3/8' },
    { key: 3, text: '7/16', value: '7/16' },
    { key: 4, text: '1/2', value: '1/2' },
    { key: 5, text: '9/16', value: '9/16' },
    { key: 6, text: '5/8', value: '5/8' },
    { key: 7, text: '3/4', value: '3/4' },
    { key: 8, text: '7/8', value: '7/8' },
    { key: 9, text: '1', value: '1' },
    { key: 10, text: '1 - 1/8', value: '1 - 1/8' },
    { key: 11, text: '1 - 1/4', value: '1 - 1/4' },
    { key: 12, text: '1 - 3/8', value: '1 - 3/8' },
    { key: 13, text: '1 - 1/2', value: '1 - 1/2' },
    { key: 14, text: '1 - 3/4', value: '1 - 3/4' },
    { key: 15, text: '2', value: '2' },
    { key: 16, text: '2 - 1/4', value: '2 - 1/4' },
    { key: 17, text: '2 - 1/2', value: '2 - 1/2' },
    { key: 18, text: '2 - 3/4', value: '2 - 3/4' },
    { key: 19, text: '3', value: '3' },
    { key: 20, text: '3 - 1/4', value: '3 - 1/4' },
    { key: 21, text: '3 - 1/2', value: '3 - 1/2' },
    { key: 22, text: '3 - 3/4', value: '3 - 3/4' },
    { key: 23, text: '4', value: '4' },
]
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
const threadingOptions = [
    { key: 0, text: 'UNF / Fine', value: 'UNF' },
    { key: 1, text: 'UNC / Coarse', value: 'UNC' },
]

const Input = () => {
    const [standard, setStandard] = useState(null);
    const [grade, setGrade] = useState(null);
    const [size, setSize] = useState(null);
    const [threading, setThreading] = useState(null);

    return (
        <div>
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
                <label>
                    <Dropdown
                        onChange={(e, value) => setThreading(value.value)}
                        options={threadingOptions}
                        placeholder='Select Threading'
                        selection
                        value={threadingOptions.value}
                    />
                </label>
                <label>
                    <Dropdown
                        onChange={(e, value) => setSize(value.value)}
                        placeholder='Select Bolt Size'
                        search
                        selection
                        options={boltSizeOptions}
                        value={boltSizeOptions.value}
                    />
                </label>
            </form>
            <ResultComp grade={grade} standard={standard} size={size} threading={threading} />
        </div>
    )
}

export default Input;