/** @jsx React.DOM */

var Header = React.createClass({
  render: function() {
    return (
      <nav className="top-bar">
        <ul className="title-area">
          <li className="name">
            <h1><a href="#">My Site</a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>
        <section className="top-bar-section">
          <ul className="left">
            <li><a href="#">Left Nav Button</a></li>
          </ul>
        </section>
      </nav>
    );
  }
});