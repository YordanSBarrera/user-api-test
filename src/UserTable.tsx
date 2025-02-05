import { User } from "./util";

type UserTableProps = {
  users: User[];
  hasColor: boolean;
};

const UserTable = ({ users, hasColor }: UserTableProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Foto</td>
          <td>Nombre</td>
          <td>Apellido</td>
          <td>Pais</td>
          <td>acciones</td>
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
                <button onClick={() => {}}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default UserTable;
