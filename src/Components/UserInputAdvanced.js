import React, { useState } from 'react';
import { Dropdown, Message, Input } from 'semantic-ui-react';
import ResultCompAdv from './ResultCompAdv';
import boltSizeOptions from '../Static/boltSizeOptions';
import standardOptions from '../Static/standardOptions';
import boltOptionsSAE from '../Static/boltOptionsSAE';
import boltOptionsISO from '../Static/boltOptionsISO';
import boltOptionsASTM from '../Static/boltOptionsASTM';
import lubricationOptionsAdv from '../Static/lubricationOptionsAdv';

const UserInput = (props) => {
    const [standard, setStandard] = useState(null);
    const [grade, setGrade] = useState(null);
    const [size, setSize] = useState(null);
    const [lube, setLube] = useState(null);
    const [customLube, setCustomLube] = useState(null);
    const [threadsPerInch, setThreadsPerInch] = useState(null);

    return (
        <div>
            <form>
                <label>
                    <Dropdown
                        onChange={(e, value) => { setStandard(value.value) }}
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
                                onChange={(e, { value }) => setGrade(value)}
                                options={boltOptionsSAE}
                                placeholder='Select Bolt Grade'
                                selection
                                value={boltOptionsSAE.value}
                            />
                        </label>
                        : standard === "ISO" ?
                            <label>
                                <Dropdown
                                    onChange={(e, { value }) => setGrade(value)}
                                    options={boltOptionsISO}
                                    placeholder='Select Bolt Grade'
                                    selection
                                    value={boltOptionsISO.value}
                                />
                            </label>
                            : standard === "ASTM" ?
                                <label>
                                    <Dropdown
                                        onChange={(e, { value }) => setGrade(value)}
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
                        onChange={(e, value) => setSize(value.value)}
                        placeholder='Select Bolt Size'
                        search
                        selection
                        options={boltSizeOptions}
                        value={boltSizeOptions.value}
                    />
                </label>
                <label>
                    <Dropdown
                        onChange={(e, value) => setLube(value.value)}
                        placeholder='Lubricated?'
                        search
                        selection
                        options={lubricationOptionsAdv}
                        value={lubricationOptionsAdv.value}
                    />
                </label>
                <label>
                    <Input threadsPerInch={threadsPerInch} placeholder='Threads Per Inch' onChange={(e, value) => setThreadsPerInch(value.value)} />
                </label>
                <label>
                    {lube === 'Custom' ?
                        <Input customLube={customLube} placeholder='Custom K Value' onChange={(e, value) => setCustomLube(value.value)} />
                        : null}
                </label>
            </form>
            <ResultCompAdv grade={grade} standard={standard} size={size} lube={lube} threadsPerInch={threadsPerInch}
                customLube={customLube} />
        </div>
    )
}

export default UserInput;