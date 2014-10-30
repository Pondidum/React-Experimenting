/** @jsx React.DOM */

var HistoryItem = React.createClass({
  render: function() {
    var entry = this.props.entry;

    return (
      <div className="historyItem">
        <img src={entry.userIcon} />
        <h1>{entry.userName}</h1>
        <p>{entry.createData}</p>
        <a href="#">{entry.templateName} [{entry.templateBrand}]</a>
      </div>
    );
  }
});
