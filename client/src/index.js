var React = require('react');
var ReactDOM = require('react-dom');
var Bank = require('./models/bank/bank.js');
var BankBox = require('./components/BankBox');

window.onload = function(){
  ReactDOM.render(
    <BankBox />,
    document.getElementById('app')
    )
};
