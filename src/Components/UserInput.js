import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Dropdown, Message, Input } from 'semantic-ui-react';
import ResultComp from './ResultComp';
import boltSizeOptions from '../Static/boltSizeOptions';
import standardOptions from '../Static/standardOptions';
import boltOptionsSAE from '../Static/boltOptionsSAE';
import boltOptionsISO from '../Static/boltOptionsISO';
import boltOptionsASTM from '../Static/boltOptionsASTM';
import threadingOptions from '../Static/threadingOptions';
import lubricationOptions from '../Static/lubricationOptions';
import {
    standardContext, gradeContext, sizeContext, threadingContext,
    lubeContext, customLubeContext
} from './Store';

const UserInput = (props) => {
    const [standard, setStandard] = useContext(standardContext);
    const [grade, setGrade] = useContext(gradeContext);
    const [size, setSize] = useContext(sizeContext);
    const [threading, setThreading] = useContext(threadingContext);
    const [lube, setLube] = useContext(lubeContext);
    const [customLube, setCustomLube] = useContext(customLubeContext);

    const { search } = useLocation()
    const searchParams = new URLSearchParams(search);
    const standardURL = searchParams.get('standard');
    const gradeURL = searchParams.get('grade');
    const sizeURL = searchParams.get('size');
    const threadingURL = searchParams.get('threading');
    const lubeURL = searchParams.get('lube');
    const customLubeURL = searchParams.get('customLube');
    if(standardURL){setStandard(standardURL);}
    if(gradeURL){setGrade(gradeURL);}
    if(sizeURL){setSize(sizeURL);}
    if(threadingURL){setThreading(threadingURL);}
    if(lubeURL){setLube(lubeURL);}
    if(customLubeURL){setCustomLube(customLubeURL);}

    console.log(searchParams.get('grade'));

    return (
        <div>
            <form>
                <label>
                    <Dropdown
                        value={standard}
                        onChange={(e, value) => { setStandard(value.value) }}
                        options={standardOptions}
                        placeholder='Select Standard'
                        selection
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
                        onChange={(e, value) => setThreading(value.value)}
                        options={threadingOptions}
                        placeholder='Select Threading'
                        selection
                        value={threading}
                    />
                </label>
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
                        options={lubricationOptions}
                        value={lube}
                    />
                </label>
                <label>
                    {lube === 'Custom' ?
                        <Input customLube={customLube} value={customLube} placeholder='Custom K Value' onChange={(e, value) => setCustomLube(value.value)} />
                        : null}
                </label>
            </form>
            <ResultComp grade={grade} standard={standard} size={size} threading={threading} lube={lube} />
        </div>
    )
}

export default UserInput;