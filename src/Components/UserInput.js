import React, { useState } from 'react';
import { Dropdown, Message, Input } from 'semantic-ui-react';
import ResultComp from './ResultComp';
import ResultCompAdv from './ResultCompAdv';
import boltSizeOptions from '../Static/boltSizeOptions';
import standardOptions from '../Static/standardOptions';
import boltOptionsSAE from '../Static/boltOptionsSAE';
import boltOptionsISO from '../Static/boltOptionsISO';
import boltOptionsASTM from '../Static/boltOptionsASTM';
import threadingOptions from '../Static/threadingOptions';
import lubricationOptions from '../Static/lubricationOptions';
import lubricationOptionsAdv from '../Static/lubricationOptionsAdv';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const UserInput = (props) => {
    const [standard, setStandard] = useState(null);
    const [grade, setGrade] = useState(null);
    const [size, setSize] = useState(null);
    const [threading, setThreading] = useState(null);
    const [lube, setLube] = useState(null);
    const [customLube, setCustomLube] = useState(null);
    const [threadsPerInch, setThreadsPerInch] = useState(null);

    return (
        <div>
            <form>
                <label>
                    <Dropdown
                        onChange={(e, value) => setStandard(value.value)}
                        options={standardOptions}
                        placeholder = 'Select Standard'
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
                {
                    !props.advanced ?
                        <label>
                            <Dropdown
                                onChange={(e, value) => setThreading(value.value)}
                                options={threadingOptions}
                                placeholder='Select Threading'
                                selection
                                value={threadingOptions.value}
                            />
                        </label>
                        : null
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
                    {props.advanced ?
                        <Dropdown
                            onChange={(e, value) => setLube(value.value)}
                            placeholder='Lubricated?'
                            search
                            selection
                            options={lubricationOptionsAdv}
                            value={lubricationOptionsAdv.value}
                        />
                        :
                        <Dropdown
                            onChange={(e, value) => setLube(value.value)}
                            placeholder='Lubricated?'
                            search
                            selection
                            options={lubricationOptions}
                            value={lubricationOptions.value}
                        />
                    }
                </label>
                <label>
                    {props.advanced ?
                        <Input threadsPerInch={threadsPerInch} placeholder='Threads Per Inch' onChange={(e, value) => setThreadsPerInch(value.value)} />
                        : null}
                </label>
                <label>
                    {lube === 'Custom' ?
                        <Input customLube={customLube} placeholder='Custom K Value' onChange={(e, value) => setCustomLube(value.value)} />
                        : null}
                </label>
            </form>
            {props.advanced === true ?
                <ResultCompAdv grade={grade} standard={standard} size={size} threading={threading} lube={lube} threadsPerInch={threadsPerInch} 
                customLube={customLube}/>
                : <ResultComp grade={grade} standard={standard} size={size} threading={threading} lube={lube} />}
        </div>
    )
}

export default UserInput;