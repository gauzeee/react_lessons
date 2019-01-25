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

import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        55,
        "Maaamey",
        { label: "Going to learn React", important: false, id: "2w1d" },
        { label: "Got fun?", important: true, id: "wx1s" },
        { label: "I wanna to ride!", important: false, id: "1qw3" }
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newData
      };
    });
  }

  addItem(body) {
    const newPost = {
      label: body,
      important: false,
      id: this.maxId++
    };
    this.setState(({ data }) => {
      const newData = [...data, newPost];
      return {
        data: newData
      };
    });
  }

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
