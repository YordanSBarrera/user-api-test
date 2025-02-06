import { filterByType, filterColunm, User } from "./util";

type UserTableProps = {
  users: User[];
  hasColor: boolean;
  deleteUser: (email: string) => void;
  filterByColunm: (colunm: filterByType) => void;
};

const UserTable = ({
  users,
  hasColor,
  deleteUser,
  filterByColunm,
}: UserTableProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Foto</th>
          <th onClick={() => filterByColunm(filterColunm.nombre)}>Nombre</th>
          <th onClick={() => filterByColunm(filterColunm.apellido)}>
            Apellido
          </th>
          <th onClick={() => filterByColunm(filterColunm.pais)}>Pais</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr
              key={user.email}
              style={{
                backgroundColor: hasColor
                  ? index % 2
                    ? "#97b6d6"
                    : "#7bba9b"
                  : "",
              }}
            >
              <td>
                <img src={user.picture.thumbnail} alt="" />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.email)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default UserTable;
