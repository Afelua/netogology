import React from 'react';
import { overrideComponentTypeChecker } from 'react-toolbox';
import App from './component/App';
import Modal from './component/Modal';
import Progress from './component/Progress';
import MortgageCalculator from './component/mortgage/index';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';

const rootEl = document.getElementById('app');

const AppRoot = () =>
    <Router>
        <main>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/modal' component={Modal}/>
                <Route path='/progress' component={Progress}/>
                <Route path='/mortgage' component={MortgageCalculator}/>
            </Switch>
        </main>
    </Router>;

render(<AppRoot />, rootEl);
