import { useEffect, useRef, useState } from "react";
import "./App.css";
import UserTable from "./UserTable";
import { User } from "./util";

function App() {
  const [users, setUsers] = useState<User[]>();
  const apiUrl = "https://randomuser.me/api/?results=100";
  const [hasColor, setHasColor] = useState<boolean>(false);
  const [sortByCountry, setSortByCoutry] = useState<boolean>(false);
  const originalState = useRef<User[]>([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.results);
        originalState.current = data.results;
      });
  }, []);

  if (!users) return <>Loading data....</>;

  const sortedUsers = sortByCountry
    ? [...users].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country);
      })
    : users;

  const deleteUser = (email: string) => {
    const deletedUsers = users.filter((user) => {
      return user.email !== email;
    });

    setUsers(deletedUsers);
  };

  const resetUsers = () => {
    setUsers(originalState.current);
  };

  return (
    <>
      <div className="rootDiv">
        <h1>User table</h1>
        <div style={{ display: "flex", marginBottom: "10px", gap: "5px" }}>
          <button
            onClick={() => {
              setHasColor((prevState) => !prevState);
            }}
          >
            {hasColor ? "Quitar Color Tabla" : "Dar Color Tabla"}
          </button>
          <button
            onClick={() => {
              setSortByCoutry((prevState) => !prevState);
            }}
          >
            {sortByCountry ? "Quitar orden por Pais" : "Ordenar por Pais"}
          </button>
          <button onClick={resetUsers}>Resetear Usuarios Originales</button>
        </div>
        <UserTable
          users={sortedUsers}
          hasColor={hasColor}
          deleteUser={deleteUser}
        />
      </div>
    </>
  );
}

export default App;
