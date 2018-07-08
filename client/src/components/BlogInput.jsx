import React, { Component } from "react";

class BlogInput extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="form-group">
        <label for="title">Blog Title</label>
        <input type="text" id="title" className="form-control" />
        <label for="content">Content</label>
        <textarea id="content" className="form-group" />
      </div>
    );
  }
}

export default BlogInput;
