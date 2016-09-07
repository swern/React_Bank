var React = require('react');

var AccountsList = React.createClass({



  render: function(){

    var accountNodes = this.props.accounts.map(function(account,index){
      return(
        <li key={index}>Owner: {account.owner} | Type: {account.type} | Amount: £{account.amount} </li>
        )
    })


    return(
      <div>
        <h4>Accounts</h4>
        <ul>{accountNodes}</ul>
      </div>
      )

    }

})

module.exports = AccountsList