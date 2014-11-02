/** @jsx React.DOM */

var HistoryItem = React.createClass({
  render: function() {

    var entry = this.props.entry;
    var date = moment(entry.createDate).calendar();

    return (
      <div className="historyItem">
        <img src={entry.userIcon} />
        <p className="timestamp">{date}</p>
        <h1>{entry.userName}</h1>
        <a className="action" href="#">{entry.templateName} [{entry.templateBrand}]</a>
      </div>
    );
  }
});
