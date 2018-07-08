import React, { Component } from "react";
import {Link} from 'react-router-dom';

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let blogs = this.props.blogs.map(blog => {
      let id = `/${blog.id}`;
      return (
        <div className="card" key={id}>
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
