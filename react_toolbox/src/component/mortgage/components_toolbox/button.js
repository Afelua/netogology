import React from 'react';
import {Button} from 'react-toolbox/lib/button/Button';
import theme from './button.css';

const MortgateCalculatorButton = () => (
    <Button label='Отправить' flat primary
            theme={theme}/>
);

export default MortgateCalculatorButton;
