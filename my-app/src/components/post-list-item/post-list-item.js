import React from "react";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label
    };
    this.editPost = this.editPost.bind(this);
  }

  editPost() {
    const newLabel = prompt("Type edited post here:");
    this.setState(({ label }) => ({
      label: newLabel
    }));
  }

  render() {
    const { label } = this.state;
    const {
      onDelete,
      onToggleImportant,
      onToggleLiked,
      important,
      like
    } = this.props;
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) classNames += " important";
    if (like) classNames += " like";
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>
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
            onClick={onToggleImportant}
          >
            <i className="fa fa-star" />
          </button>
          <button type="button" onClick={onDelete} className="btn-trash btn-sm">
            <i className="fa fa-trash-o" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    );
  }
}
