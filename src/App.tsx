import { useEffect, useRef, useState } from "react";
import "./App.css";
import UserTable from "./UserTable";
import { filterByType, filterColunm, User } from "./util";

function App() {
  const [users, setUsers] = useState<User[]>();
  const apiUrl = "https://randomuser.me/api/?results=100";
  const [hasColor, setHasColor] = useState<boolean>(false);
  const [sortByCountry, setSortByCoutry] = useState<boolean>(false);
  const originalState = useRef<User[]>([]);
  const [filteredByCountry, setFiltedByCountry] = useState<string | null>(null);
  const [sortByColunm, setSortByColunm] = useState<filterByType>(null);

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

  // const sortedUsers = sortByCountry
  //   ? [...users].sort((a, b) => {
  //       return a.location.country.localeCompare(b.location.country);
  //     })
  //   : users;
  function sortedUsersByCountry(users: User[]) {
    return sortByCountry
      ? [...users].sort((a, b) => {
          return a.location.country.localeCompare(b.location.country);
        })
      : users;
  }

  const deleteUser = (email: string) => {
    const deletedUsers = users.filter((user) => {
      return user.email !== email;
    });
    setUsers(deletedUsers);
  };

  const resetUsers = () => {
    setUsers(originalState.current);
  };

  // const filteredByCountryUsers = filteredByCountry
  //   ? users.filter((user) =>
  //       user.location.country
  //         .toLocaleLowerCase()
  //         .includes(filteredByCountry.toLocaleLowerCase())
  //     )
  //   : users;

  function filteredByCountryName(users: User[]) {
    return filteredByCountry
      ? users.filter((user: User) =>
          user.location.country
            .toLocaleLowerCase()
            .includes(filteredByCountry.toLocaleLowerCase())
        )
      : users;
  }

  function filterBy(): User[] {
    switch (sortByColunm) {
      case filterColunm.pais:
        console.log("swit pais");
        return users!.sort((a, b) => {
          return a.location.country.localeCompare(b.location.country);
        });

      case filterColunm.nombre:
        console.log("swit nombre");
        return users!.sort((a, b) => {
          return a.name.first.localeCompare(b.name.first);
        });

      case filterColunm.apellido:
        console.log("swit apellido");
        return users!.sort((a, b) => {
          return a.name.last.localeCompare(b.name.last);
        });

      default:
        return users!;
    }
  }
  const filteredUsers = filteredByCountryName(sortedUsersByCountry(filterBy()));

  return (
    <>
      <div className="rootDiv">
        <h1>Lista de Usuarios</h1>
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
          <input
            placeholder="Filtrar por Pais"
            onChange={(even) => {
              setFiltedByCountry(even.target.value);
            }}
          />
        </div>
        <UserTable
          users={filteredUsers}
          hasColor={hasColor}
          deleteUser={deleteUser}
          filterByColunm={setSortByColunm}
        />
      </div>
    </>
  );
}

export default App;
