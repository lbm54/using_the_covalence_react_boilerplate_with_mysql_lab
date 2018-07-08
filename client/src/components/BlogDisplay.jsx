import React, { Component } from "react";

class BlogDisplay extends Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.id;

    this.state = {
      blog: {
        title: "",
        content: ""
      }
    };
  }

  async componentDidMount() {
    let blog = await fetch(`/api/blogs/${this.id}`);
    let blogJson = await blogs.json();
    this.setState({ blog: blogJson });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.blog.title}</h5>
          <p className="card-text">{this.blog.content}</p>
        </div>
      </div>
    );
  }
}

export default BlogDisplay;
