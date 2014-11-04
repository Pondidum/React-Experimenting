/** @jsx React.DOM */

var EditPage = React.createClass({
  render: function() {
    return (
      <div className="row fullwidth">
        <Header />
        <h2>CWS For Me Update</h2>
        <div className="large-5 column">
          <Editor />
        </div>
        <div className="mergeFieldsList large-2 column">
          <ul className="no-bullet">
            <li>
              <h2>Merge Fields</h2>
              <ul>
                <li>
                  <h3>Candidate</h3>
                  <ul>
                    <li>Name</li>
                    <li>Email</li>
                    <li>HomePhone</li>
                    <li>Brand</li>
                  </ul>
                </li>
                <li>
                  <h3>Consultant</h3>
                  <ul>
                    <li>Intro</li>
                    <li>Signature</li>
                  </ul>
                </li>
                <li>
                  <h3>Vacancy</h3>
                  <ul>
                    <li>Title</li>
                    <li>Refnum</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="templatePreview large-5 column">
          <h2>Preview</h2>
        </div>
      </div>
    );
  }
});