import React from 'react';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';

import theme from '../assets/react-toolbox/theme';
import "..//assets/react-toolbox/theme.css";

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import Modal from './component/Modal';
import MortgageCalculator from './component/mortgage';
import MortgageCalculatorToolbox from './component/mortgage_toolbox';
import Step1 from './component/mortgage_toolbox_steps/step1';

const AppRoot = () =>
    <ThemeProvider theme={theme}>
        <Router>
            <main>
                <Switch>
                    <Route exact path='/' component={MortgageCalculator} />
                    <Route path='/modal' component={Modal} />
                    <Route path='/mortgage-toolbox' component={MortgageCalculatorToolbox} />
                    <Route path='/step1' component={Step1} />
                </Switch>
            </main>
        </Router>
    </ThemeProvider>;

render(<AppRoot />, document.getElementById('root'));
