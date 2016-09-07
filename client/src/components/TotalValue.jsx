var React = require('react');

var TotalValue = React.createClass({

  render: function(){



    return(
      <div>
        <h4>Total Value:</h4>
       <p>£{this.props.totalCash}</p>
      </div>
      );
  }


});


module.exports = TotalValue;

