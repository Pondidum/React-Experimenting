/** @jsx React.DOM */

var TemplateList = React.createClass({

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

    var templates = this.state.data.map(function(item) {
        return (
          <TemplateItem template={item} />
        );
    });

    return (
      <div className="templateList large-4 column">
        {templates}
      </div>
    );
  }
});

var TemplateItem = React.createClass({
  render: function() {
    var template = this.props.template;

    return (
      <div className="templateItem">
        <h1>{template.name}</h1>
        <p>{template.description}</p>
        <p>Brands: {template.brands}</p>
        <ul>
          <li><a href="#">View/Edit</a></li>
          <li><a href="#">History</a></li>
        </ul>
      </div>
    );
  }
});
