import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App'


Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
