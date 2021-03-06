import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }

    getUsers();
  });

  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{`${u.name}`}</li>
        ))}
      </ul>
    </div>
  );
}
