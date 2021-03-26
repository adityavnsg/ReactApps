import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import InsurenceForm from './components/InsurenceForm';
import SampleNavigation from './components/SampleNavigation';
import {createBrowserHistory} from 'history';

export default function MainRouter(props){
  const history = createBrowserHistory();
    return(
        <HashRouter history = {history}>
        <Route path="/" component={InsurenceForm} />
        <Route path = '/sample' component = {SampleNavigation}/>
      </HashRouter>
    );
}
