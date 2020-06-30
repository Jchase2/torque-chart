import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const boltSizeOptions = [
    {key: 0, text: '1/4', value: '1/4'},
    {key: 1, text: '5/16', value: '5/16'},
    {key: 2, text: '3/8', value: '3/8'},
    {key: 3, text: '7/16', value: '7/16'},
    {key: 4, text: '1/2', value: '1/2'},
    {key: 5, text: '9/16', value: '9/16'},
    {key: 6, text: '5/8', value: '5/8'},
    {key: 7, text: '3/4', value: '3/4'},
    {key: 8, text: '7/8', value: '7/8'},
    {key: 9, text: '1', value: '1'},
    {key: 10, text: '1 - 1/8', value: '1 - 1/8'},
    {key: 11, text: '1 - 1/4', value: '1 - 1/4'},
    {key: 12, text: '1 - 3/8', value: '1 - 3/8'},
    {key: 13, text: '1 - 1/2', value: '1 - 1/2'},
    {key: 14, text: '1 - 3/4', value: '1 - 3/4'},
    {key: 15, text: '2', value: '2'},
    {key: 16, text: '2 - 1/4', value: '2 - 1/4'},
    {key: 17, text: '2 - 1/2', value: '2 - 1/2'},
    {key: 18, text: '2 - 3/4', value: '2 - 3/4'},
    {key: 19, text: '3', value: '3'},
    {key: 20, text: '3 - 1/4', value: '3 - 1/4'},
    {key: 21, text: '3 - 1/2', value: '3 - 1/2'},
    {key: 22, text: '3 - 3/4', value: '3 - 3/4'},
    {key: 23, text: '4', value: '4'},
]

const BoltSize = () => (
    <Dropdown
        placeholder='Select Bolt Size'
        search
        selection
        options={boltSizeOptions}
    />
)

export default BoltSize;