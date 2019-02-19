import React, { useState } from "react";
import ResourceList from "./ResourseList";
import UserList from "./UserList";
const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <div>
        <UserList />
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      {resource}
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
