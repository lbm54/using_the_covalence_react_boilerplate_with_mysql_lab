import React, { Component } from "react";

class BlogInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };

    this.handleChange = (what, value) => {
      this.setState({
        [what]: value
      });
    };

    this.handleSubmit = async () => {
      let insertObject = {
        title: this.state.title,
        content: this.state.content
      }
      try {
        fetch("/api/blogs", {
          method: "post",
          body: JSON.stringify(insertObject),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        props.refresh();
      } catch (e) {
        console.log(e);
      }
    };
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          onChange={event => this.handleChange("title", event.target.value)}
          id="title"
          className="form-control"
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          onChange={event => this.handleChange("content", event.target.value)}
          className="form-group"
        />
        <button
          className="btn btn-primary"
          onClick={event => this.handleSubmit()}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default BlogInput;
