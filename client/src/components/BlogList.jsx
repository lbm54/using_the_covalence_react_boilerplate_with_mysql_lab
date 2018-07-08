import React, { Component } from "react";

class BlogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    };
  }

  async componentDidMount() {
    let blogs = await fetch("/api/blogs/");
    let blogsJson = await blogs.json();
    this.setState({ blogs: blogsJson });
  }

  render() {
    let blogs = this.state.blogs.map(blog => {
      let id = blog.id;
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <Link to={id}>
              <button className="btn btn-primary">See Blog</button>
            </Link>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{blogs}</div>
      </div>
    );
  }
}

export default BlogList;
