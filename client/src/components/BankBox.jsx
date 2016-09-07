var React = require('react');
var AccountsList = require('./AccountsList');
var Bank = require('../models/bank/bank.js');
var TotalValue = require('./TotalValue');
var AccountsForm = require('./AccountsForm');

var sampleData = [
 {owner:'Jay',amount:50, type:'business'},
 {owner:'Val',amount:150, type:'business'},
 {owner:'Keith',amount:150, type:'personal'}
];

var BankBox = React.createClass({




  getInitialState: function(){

    var bank = new Bank()

    sampleData.forEach(function(account){
      bank.addAccount(account)
    })

    return{
      accounts: bank.accounts,
      totalCash: bank.totalCash()
    };
  },

  handleAccountSubmit: function(account){
    var newAccounts = this.state.accounts.concat([account])
    this.setState({accounts: newAccounts})
  },

  addAccount: function(newAccount){
    var bank = new Bank()

    this.state.accounts.forEach(function(account){
      bank.addAccount(account)
    })

    bank.addAccount(newAccount)
    this.setState({accounts: bank.accounts})
  },

  render: function(){
    return(
        <div>

          <h1>Bank</h1>
          <TotalValue totalCash={this.state.totalCash}/>
          <AccountsList accounts={this.state.accounts}/>
          <AccountsForm handleAccountSubmit={this.handleAccountSubmit}/>

        </div>
      )
  }


})

module.exports = BankBox; 