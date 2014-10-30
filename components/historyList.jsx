/** @jsx React.DOM */

var HistoryList = React.createClass({

  loadFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function(){
    return {data: []};
  },

  componentDidMount: function() {
    this.loadFromServer();
    setInterval(this.loadFromServer, this.props.interval);
  },

  render: function() {

    var history = this.state.data.map(function(item) {
      return (
        <HistoryItem entry={item} />
      );
    });

    return (
      <ItemList items={history} />
    );
  }
});
