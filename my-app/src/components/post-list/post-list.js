import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

const PostList = ({ posts, onDelete }) => {
  let newPosts = posts.filter(post => {
    return typeof post === "object";
  });

  const elems = newPosts.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps} onDelete={() => onDelete(id)} />
      </li>
    );
  });

  return <ListGroup className="app-list list-group">{elems}</ListGroup>;
};

export default PostList;
