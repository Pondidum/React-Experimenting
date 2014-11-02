/** @jsx React.DOM */

var LandingPage = React.createClass({
  render: function() {
    return (
      <div className="row fullwidth">
        <TemplateList url="api/templates.json" interval={5000} />
        <HistoryList url="api/history.json" interval={5000} />
        <div className="column end" />
      </div>
    );
  }
});
