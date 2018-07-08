import React, { Component } from "react";
import BlogList from './BlogList';
import BlogInput from './BlogInput';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-xs-8">
            <BlogList />
          </div>
          <div className="col col-xs-4">
            <BlogInput />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
