import React from 'react';

import Autocomplete from './autocomplete';
import Inputs from './inputs';
import Button from './button';

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
            <Button/>
        </form>
    </div>
);

export default MortgateCalculator;
