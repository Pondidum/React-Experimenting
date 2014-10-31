/** @jsx React.DOM */

var ItemList = React.createClass({

  render: function() {
    return (
      <div className="itemList large-4 column">
        {this.props.items}
      </div>
    );
  }

});
