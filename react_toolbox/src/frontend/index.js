import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';
import App from './component/App';
import Modal from './component/Modal';
import Progress from './component/Progress';
import MortgageCalculator from './component/mortgage/index';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

const rootEl = document.getElementById('app');

const render = () => {
    ReactDOM.render((
        <AppContainer>
            <BrowserRouter>
                <main>
                    <Switch>
                        <Route exact path='/' component={App}/>
                        <Route path='/modal' component={Modal}/>
                        <Route path='/progress' component={Progress}/>
                        <Route path='/mortgage' component={MortgageCalculator}/>
                    </Switch>
                </main>
            </BrowserRouter>
        </AppContainer>
    ), rootEl
  );
};

if (process.env.NODE_ENV !== 'production') {
  overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
  ));
  if (module.hot) {
    module.hot.accept('./component/App', render);
  }
}

render();
