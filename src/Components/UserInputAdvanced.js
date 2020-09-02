import React, { useContext } from 'react';
import { Dropdown, Message, Input } from 'semantic-ui-react';
import ResultCompAdv from './ResultCompAdv';
import boltSizeOptions from '../Static/boltSizeOptions';
import standardOptions from '../Static/standardOptions';
import boltOptionsSAE from '../Static/boltOptionsSAE';
import boltOptionsISO from '../Static/boltOptionsISO';
import boltOptionsASTM from '../Static/boltOptionsASTM';
import lubricationOptionsAdv from '../Static/lubricationOptionsAdv';
import {standardContext, gradeContext, sizeContext, 
    lubeContext, customLubeContext, threadsPerInchContext} from './Store';

const UserInput = (props) => {
    const [standard, setStandard] = useContext(standardContext);
    const [grade, setGrade] = useContext(gradeContext);
    const [size, setSize] = useContext(sizeContext);
    const [lube, setLube] = useContext(lubeContext);
    const [customLube, setCustomLube] = useContext(customLubeContext);
    const [threadsPerInch, setThreadsPerInch] = useContext(threadsPerInchContext);

    return (
        <div>
            <form>
                <label>
                    <Dropdown
                        onChange={(e, value) => { setStandard(value.value) }}
                        options={standardOptions}
                        placeholder='Select Standard'
                        selection
                        value={standard}
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
                                value={grade}
                            />
                        </label>
                        : standard === "ISO" ?
                            <label>
                                <Dropdown
                                    onChange={(e, { value }) => setGrade(value)}
                                    options={boltOptionsISO}
                                    placeholder='Select Bolt Grade'
                                    selection
                                    value={grade}
                                />
                            </label>
                            : standard === "ASTM" ?
                                <label>
                                    <Dropdown
                                        onChange={(e, { value }) => setGrade(value)}
                                        options={boltOptionsASTM}
                                        placeholder='Select Bolt Grade'
                                        selection
                                        value={grade}
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
                        value={size}
                    />
                </label>
                <label>
                    <Dropdown
                        onChange={(e, value) => setLube(value.value)}
                        placeholder='Lubricated?'
                        search
                        selection
                        options={lubricationOptionsAdv}
                        value={lube}
                    />
                </label>
                <label>
                    <Input threadsPerInch={threadsPerInch} value={threadsPerInch} 
                    placeholder='Threads Per Inch' onChange={(e, value) => setThreadsPerInch(value.value)} />
                </label>
                <label>
                    {lube === 'Custom' ?
                        <Input customLube={customLube} value={customLube} 
                        placeholder='Custom K Value' onChange={(e, value) => setCustomLube(value.value)} />
                        : null}
                </label>
            </form>
            <ResultCompAdv grade={grade} standard={standard} size={size} lube={lube} threadsPerInch={threadsPerInch}
                customLube={customLube} />
        </div>
    )
}

export default UserInput;