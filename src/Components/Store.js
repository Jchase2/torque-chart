import React, { useState } from 'react';

export const standardContext = React.createContext();
export const gradeContext = React.createContext();
export const sizeContext = React.createContext();
export const threadingContext = React.createContext();
export const proofLoadContext = React.createContext();
export const lubeContext = React.createContext();
export const customLubeContext = React.createContext();
export const threadsPerInchContext = React.createContext();

const Store = ({ children }) => {
    const [standard, setStandard] = useState(null);
    const [grade, setGrade] = useState(null);
    const [size, setSize] = useState(null);
    const [threading, setThreading] = useState(null);
    const [lube, setLube] = useState(null);
    const [customLube, setCustomLube] = useState(null);
    const [threadsPerInch, setThreadsPerInch] = useState(null);
    return (
        <standardContext.Provider value={[standard, setStandard]}>
            <gradeContext.Provider value={[grade, setGrade]}>
                <sizeContext.Provider value={[size, setSize]}>
                    <threadingContext.Provider value={[threading, setThreading]}>
                        <lubeContext.Provider value={[lube, setLube]}>
                            <customLubeContext.Provider value={[customLube, setCustomLube]}>
                                <threadsPerInchContext.Provider value={[threadsPerInch, setThreadsPerInch]}>
                                    {children}
                                </threadsPerInchContext.Provider>
                            </customLubeContext.Provider>
                        </lubeContext.Provider>
                    </threadingContext.Provider>
                </sizeContext.Provider>
            </gradeContext.Provider>
        </standardContext.Provider>
    );
};

export default Store;