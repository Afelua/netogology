import React from 'react';

import Autocomplete from './autocompleteToolbox';
import Inputs from './inputsToolbox';
import Checkbox from './checkboxToolbox';
import Button from './buttonToolbox';

const styles = {
    width: '350px',
    margin: '0px auto',
    border: '1px solid',
    padding: '30px',
    textAlign: 'center'
};

const MortgateCalculator = () => (
    <div style={styles}>
        <form action="">
            <Autocomplete/>
            <Inputs/>
            <Checkbox/>
            <Button/>
        </form>
    </div>
);

export default MortgateCalculator;
