import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";
import "../app-header/app-header.css";
import "../post-add-form/post-add-form.css";
import "../post-list/post-list.css";
import "../post-status-filter/post-status-filter.css";
import "../search-panel/search-panel.css";
import "../post-list-item/post-list-item.css";

const App = () => {
  const data = [
    55,
    "Maaamey",
    { label: "Going to learn React", important: false, id: "2w1d" },
    { label: "Got fun?", important: true, id: "wx1s" },
    { label: "I wanna to ride!", important: false, id: "1qw3" }
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
