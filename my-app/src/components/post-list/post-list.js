import React from "react";
import PostListItem from "../post-list-item";

const PostList = ({ posts }) => {
  let newPosts = posts.filter(post => {
    return typeof post === "object";
  });

  const elems = newPosts.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="app-list list-group">{elems}</ul>;
};

export default PostList;
