import React from "react";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      label: props.label,
      like: false
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  onImportant() {
    this.setState(({ important }) => ({
      important: !important
    }));
  }

  onLike() {
    this.setState(({ like }) => ({
      like: !like
    }));
  }

  editPost() {
    const newLabel = prompt("Type edited post here:");
    this.setState(({ label }) => ({
      label: newLabel
    }));
  }

  render() {
    const { important, like, label } = this.state;
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) classNames += " important";
    if (like) classNames += " like";
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            title="Edit post"
            className="btn btn-danger"
            onClick={this.editPost}
          >
            E
          </button>
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            <i className="fa fa-star" />
          </button>
          <button
            type="button"
            onClick={this.props.onDelete}
            className="btn-trash btn-sm"
          >
            <i className="fa fa-trash-o" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    );
  }
}
