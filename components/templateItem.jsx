/** @jsx React.DOM */

var TemplateItem = React.createClass({
  render: function() {
    var template = this.props.template;

    var brands = template.brands.map(function(brand) {
      return (
        <a href="#">[{brand}]</a>
      );
    });

    return (
      <div className="templateItem">
        <h1>{template.name}</h1>
        <ul className="actions">
          <li><a href="#">View/Edit</a></li>
          <li><a href="#">History</a></li>
        </ul>
        <p className="description">{template.description}</p>
        <div className="brands">Brands: {brands}</div>
      </div>
    );
  }
});
