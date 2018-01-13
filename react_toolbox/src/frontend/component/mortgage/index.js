import React from 'react';

import Autocomplete from './components_toolbox/autocomplete';
import Inputs from './components_toolbox/inputs';
import Checkbox from './components_toolbox/checkbox';
import Button from './components_toolbox/button';

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
