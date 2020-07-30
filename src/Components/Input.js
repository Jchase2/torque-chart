import React, { useState } from 'react';
import { Dropdown, Message } from 'semantic-ui-react';
import ResultComp from '../Components/ResultComp';
import ResultCompAdv from '../Components/ResultCompAdv';
import boltSizeOptions from '../Static/boltSizeOptions';
import standardOptions from '../Static/standardOptions';
import boltOptionsSAE from '../Static/boltOptionsSAE';
import boltOptionsISO from '../Static/boltOptionsISO';
import boltOptionsASTM from '../Static/boltOptionsASTM';
import threadingOptions from '../Static/threadingOptions';
import lubricationOptions from '../Static/lubricationOptions';

const Input = (props) => {
    const [standard, setStandard] = useState(null);
    const [grade, setGrade] = useState(null);
    const [size, setSize] = useState(null);
    const [threading, setThreading] = useState(null);
    const [lube, setLube] = useState(null);

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
                <label>
                    <Dropdown
                        onChange={(e, value) => setLube(value.value)}
                        placeholder='Lubricated?'
                        search
                        selection
                        options={lubricationOptions}
                        value={lubricationOptions.value}
                    />
                </label>
            </form>
            {props.advanced === true ? <ResultCompAdv grade={grade} standard={standard} size={size} threading={threading} lube={lube} />
            : <ResultComp grade={grade} standard={standard} size={size} threading={threading} lube={lube} />}
        </div>
    )
}

export default Input;