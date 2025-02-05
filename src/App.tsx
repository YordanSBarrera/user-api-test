import { useEffect, useState } from "react";
import "./App.css";
import UserTable from "./UserTable";
import { User } from "./util";

function App() {
  const [users, setUsers] = useState<User[]>();
  const apiUrl = "https://randomuser.me/api/?results=100";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  if (!users) return <>Loading data....</>;

  return (
    <>
      <div className="rootDiv">
        <h1>User table</h1>
        <UserTable users={users} />
      </div>
    </>
  );
}

export default App;
