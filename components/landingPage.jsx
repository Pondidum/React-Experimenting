/** @jsx React.DOM */

var LandingPage = React.createClass({
  render: function() {
    return (
      <div className="row fullwidth">
      	<Header />
        <TemplateList url="templates.json" interval={5000} />
        <HistoryList url="history.json" interval={5000} />
        <div className="column end" />
      </div>
    );
  }
});
