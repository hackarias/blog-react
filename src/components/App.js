import React from "react";
import PostList from "./PostList";
import UserHeader from "./UserHeader";

class App extends React.Component {
  render() {
    return (
      <div className="segment ui">
        <PostList />
        <UserHeader />
      </div>
    );
  }
}

export default App;
