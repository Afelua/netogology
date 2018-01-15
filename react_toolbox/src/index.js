import React from 'react';

import Modal from './component/Modal';
import MortgageCalculator from './component/mortgage';
import MortgageCalculatorToolbox from './component/mortgage_toolbox';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';

import theme from '../assets/react-toolbox/theme';
import "..//assets/react-toolbox/theme.css";

const AppRoot = () =>
    <ThemeProvider theme={theme}>
        <Router>
            <main>
                <Switch>
                    <Route exact path='/' component={MortgageCalculator} />
                    <Route path='/modal' component={Modal} />
                    <Route path='/mortgage-toolbox' component={MortgageCalculatorToolbox} />
                </Switch>
            </main>
        </Router>
    </ThemeProvider>;

render(<AppRoot />, document.getElementById('root'));
