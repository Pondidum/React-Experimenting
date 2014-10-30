/** @jsx React.DOM */

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
