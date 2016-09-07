var React = require('react');
var BankBox = require('./BankBox');


var AccountsForm = React.createClass({

  getInitialState: function(){
    return{
      owner: "",
      amount: 0,
      type: ""
    }
  },


    handleOwnerChange: function(e){
      this.setState({owner: e.target.value})
    },

    handleAmountChange: function(e){
      this.setState({amount: e.target.value})
    },

    handleTypeChange: function(e){
      this.setState({type: e.target.value})
    },

    handleSubmit: function(e){
      e.preventDefault()
      var owner = this.state.owner.trim()
      var amount = this.state.amount.trim()
      var type = this.state.type.trim()
      if(!owner || !amount || !type){
        return;
      }
      this.props.handleAccountSubmit({owner: owner, amount: amount, type: type})
      this.setState({owner: '', amount: 0, type: ''})
    },

    render: function(){
    return(

      <div>

        <form className='account-form' onSubmit={this.handleSubmit}>
          <input type="text" placeholder="owner"
          value={this.state.owner}
          onChange={this.handleOwnerChange}
          /><br></br>
          <input type="text" placeholder="amount(£)"
          value={this.state.amount}
          onChange={this.handleAmountChange}/><br></br>
          <input type="text" placeholder="type"
          value={this.state.type}
          onChange={this.handleTypeChange}/><br></br>
          <input type="submit" value="Create Account" />
        </form>

      </div>
      )

  }

})


module.exports = AccountsForm;