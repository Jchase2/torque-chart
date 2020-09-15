import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Dropdown, Message, Input } from 'semantic-ui-react';
import ResultComp from './ResultComp';
import boltSizeOptionsSAE from '../Static/boltSizeOptionsSAE';
import boltSizeOptionsISO from '../Static/boltSizeOptionsISO';
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
    // Context API / hooks store and variables. 
    const [standard, setStandard] = useContext(standardContext);
    const [grade, setGrade] = useContext(gradeContext);
    const [size, setSize] = useContext(sizeContext);
    const [threading, setThreading] = useContext(threadingContext);
    const [lube, setLube] = useContext(lubeContext);
    const [customLube, setCustomLube] = useContext(customLubeContext);

    // Setting up query string searching. 
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search);
    const standardURL = searchParams.get('standard');
    const gradeURL = searchParams.get('grade');
    const sizeURL = searchParams.get('size');
    const threadingURL = searchParams.get('threading');
    const lubeURL = searchParams.get('lube');
    const customLubeURL = searchParams.get('customLube');

    // If query string exists, set those variables in the store. 
    if (standardURL) { setStandard(standardURL); }
    if (gradeURL) { setGrade(gradeURL) };
    if (sizeURL) { setSize(sizeURL) };
    if (threadingURL) { setThreading(threadingURL) };
    if (lubeURL) { setLube(lubeURL) };
    if (customLubeURL) { setCustomLube(customLubeURL) };

    // Function for updating the query string. 
    const updateQuery = (value, queryName, updateMethod) => {
        if (!search) {
            props.history.push({
                pathname: '/',
                search: queryName + '=' + value
            })
        }
        else if (!searchParams.has(queryName)) {
            props.history.push(search + '&' + queryName + '=' + value)
        }
        else if (searchParams.has(queryName) && searchParams.get(queryName) !== value) {
            let replaceMe = queryName + '=' + searchParams.get(queryName);
            var reg = new RegExp(replaceMe, "g");
            let qString = search.replace(reg, queryName + '=' + value);
            props.history.push({
                pathname: '/',
                search: qString
            })
        }
        updateMethod(value);
    }

    // If values are already in the store, update the query string with 
    // said values. 
    if (standard) { updateQuery(standard, 'standard', setStandard) };
    if (grade) { updateQuery(grade, 'grade', setGrade) };
    if (size) { updateQuery(size, 'size', setSize) };
    if (threading) { updateQuery(threading, 'threading', setThreading) };
    if (lube) { updateQuery(lube, 'lube', setLube) };
    if (customLube) { updateQuery(customLube, 'customLube', setCustomLube) }

    return (
        <div>
            <form>
                <label>
                    <Dropdown
                        value={standard}
                        onChange={(e, value) => updateQuery(value.value, 'standard', setStandard)}
                        options={standardOptions}
                        placeholder='Select Standard'
                        selection
                    />
                </label>
                {
                    standard === "SAE" ?
                        <label>
                            <Dropdown
                                value={grade}
                                onChange={(e, value) => updateQuery(value.value, 'grade', setGrade)}
                                options={boltOptionsSAE}
                                placeholder='Select Bolt Grade'
                                selection
                            />
                        </label>
                        : standard === "ISO" ?
                            <label>
                                <Dropdown
                                    value={grade}
                                    onChange={(e, value) => updateQuery(value.value, 'grade', setGrade)}
                                    options={boltOptionsISO}
                                    placeholder='Select Bolt Grade'
                                    selection
                                />
                            </label>
                            : standard === "ASTM" ?
                                <label>
                                    <Dropdown
                                        value={grade}
                                        onChange={(e, value) => updateQuery(value.value, 'grade', setGrade)}
                                        options={boltOptionsASTM}
                                        placeholder='Select Bolt Grade'
                                        selection
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
                        onChange={(e, value) => updateQuery(value.value, 'threading', setThreading)}
                        options={threadingOptions}
                        placeholder='Select Threading'
                        selection
                        value={threading}
                    />
                </label>
                {
                    standard === 'SAE' ?
                        <label>
                            <Dropdown
                                onChange={(e, value) => updateQuery(value.value, 'size', setSize)}
                                placeholder='Select Bolt Size'
                                search
                                selection
                                options={boltSizeOptionsSAE}
                                value={size}
                            />
                        </label>
                        :
                        <label>
                            <Dropdown
                                onChange={(e, value) => updateQuery(value.value, 'size', setSize)}
                                placeholder='Select Bolt Size'
                                search
                                selection
                                options={boltSizeOptionsISO}
                                value={size}
                            />
                        </label>

                }
                <label>
                    <Dropdown
                        onChange={(e, value) => updateQuery(value.value, 'lube', setLube)}
                        placeholder='Lubricated?'
                        search
                        selection
                        options={lubricationOptions}
                        value={lube}
                    />
                </label>
                <label>
                    {lube === 'Custom' ?
                        <Input customLube={customLube} value={customLube} placeholder='Custom K Value'
                            onChange={(e, value) => updateQuery(value.value, 'customLube', setCustomLube)} /> : null}
                </label>
            </form>
            <ResultComp grade={grade} standard={standard} size={size} threading={threading} lube={lube} />
        </div>
    )
}

export default UserInput;