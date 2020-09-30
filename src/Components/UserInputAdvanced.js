import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Dropdown, Message, Input } from 'semantic-ui-react';
import ResultCompAdv from './ResultCompAdv';
import boltSizeOptionsSAE from '../Static/boltSizeOptionsSAE';
import boltSizeOptionsISO from '../Static/boltSizeOptionsISO';
import standardOptions from '../Static/standardOptions';
import boltOptionsSAE from '../Static/boltOptionsSAE';
import boltOptionsISO from '../Static/boltOptionsISO';
import boltOptionsASTM from '../Static/boltOptionsASTM';
import threadingOptions from '../Static/threadingOptions';
import lubricationOptionsAdv from '../Static/lubricationOptionsAdv';
import {
    standardContext, gradeContext, sizeContext,
    lubeContext, customLubeContext, threadsPerInchContext, threadingContext
} from './Store';

const UserInput = (props) => {
    // Context API / hooks store and variables. 
    const [standard, setStandard] = useContext(standardContext);
    const [grade, setGrade] = useContext(gradeContext);
    const [size, setSize] = useContext(sizeContext);
    const [lube, setLube] = useContext(lubeContext);
    const [customLube, setCustomLube] = useContext(customLubeContext);
    const [threadsPerInch, setThreadsPerInch] = useContext(threadsPerInchContext);
    const [threading, setThreading] = useContext(threadingContext);

    // Setting up query string searching. 
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search);
    const standardURL = searchParams.get('standard');
    const gradeURL = searchParams.get('grade');
    const sizeURL = searchParams.get('size');
    const lubeURL = searchParams.get('lube');
    const customLubeURL = searchParams.get('customLube');
    const threadsPerInchURL = searchParams.get('threadsPerInch');
    const threadingURL = searchParams.get('threading');


    // If query string exists, set those variables in the store. 
    if (standardURL) { setStandard(standardURL) };
    if (gradeURL) { setGrade(gradeURL) };
    if (sizeURL) { setSize(sizeURL) };
    if (lubeURL) { setLube(lubeURL) };
    if (customLubeURL) { setCustomLube(customLubeURL) };
    if (threadsPerInchURL) { setThreadsPerInch(threadsPerInchURL) };
    if (threadingURL) { setThreading(threadingURL) };

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
    if (lube) { updateQuery(lube, 'lube', setLube) };
    if (customLube) { updateQuery(customLube, 'customLube', setCustomLube) }
    if (threadsPerInch) { updateQuery(threadsPerInch, 'threadsPerInch', setThreadsPerInch) };

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
                {
                    standard === "ISO" ? null :
                        <label>
                            <Dropdown
                                onChange={(e, value) => updateQuery(value.value, 'threading', setThreading)}
                                options={threadingOptions}
                                placeholder='Select Threading'
                                selection
                                value={threading}
                            />
                        </label>
                }
                {
                    standard === 'SAE' ?
                        <label>
                            <Dropdown
                                value={size}
                                onChange={(e, value) => updateQuery(value.value, 'size', setSize)}
                                placeholder='Select Bolt Size'
                                search
                                selection
                                options={boltSizeOptionsSAE}
                            />
                        </label>
                        :
                        <label>
                            <Dropdown
                                value={size}
                                onChange={(e, value) => updateQuery(value.value, 'size', setSize)}
                                placeholder='Select Bolt Size'
                                search
                                selection
                                options={boltSizeOptionsISO}
                            />
                        </label>
                }
                <label>
                    <Dropdown
                        value={lube}
                        onChange={(e, value) => updateQuery(value.value, 'lube', setLube)}
                        placeholder='Lubricated?'
                        search
                        selection
                        options={lubricationOptionsAdv}
                    />
                </label>
                <label>
                    {standard === 'ISO' ? null : threading === "custom" ?
                        <Input threadsPerInch={threadsPerInch} value={threadsPerInch}
                            placeholder='Threads Per Inch' onChange={(e, value) => updateQuery(value.value, 'threadsPerInch', setThreadsPerInch)} />
                        : null}
                </label>
                <label>
                    {lube === 'Custom' ?
                        <Input customLube={customLube} value={customLube}
                            placeholder='Custom K Value' onChange={(e, value) => updateQuery(value.value, 'customLube', setCustomLube)} />
                        : null}
                </label>
            </form>
            <ResultCompAdv grade={grade} standard={standard} size={size} lube={lube} threadsPerInch={threadsPerInch}
                customLube={customLube} />
        </div>
    )
}

export default UserInput;